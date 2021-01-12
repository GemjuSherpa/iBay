import express from'express'
import dotenv from'dotenv'
import connectDB from './Config/db.js'
import colors from 'colors'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


//Initialize dotenv
dotenv.config()

// Connect to DB
connectDB()

const app = express()

app.use(express.json())

// Test route
app.get('/', (req, res)=>{
    res.send('API is running ..')
})

// routes pointer
app.use('/api/products', productRoutes)

// user auth route
app.use('/api/users', userRoutes)

// order routes
app.use('/api/orders', orderRoutes)

//fall back 
app.use(notFound)


// custom error response
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))