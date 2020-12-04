import express from'express'
import dotenv from'dotenv'
import connectDB from './Config/db.js'
import colors from 'colors'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'


//Initialize dotenv
dotenv.config()

// Connect to DB
connectDB()

const app = express()

// Test route
app.get('/', (req, res)=>{
    res.send('API is running ..')
})

// routes pointer
app.use('/api/products', productRoutes)

//fall back 
app.use(notFound)


// custom error response
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))