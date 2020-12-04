import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './Config/db.js'


dotenv.config()

connectDB()

const importData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // insert users
        const createUsers = await User.insertMany(users)

        // get admin user
        const adminUser = createUsers[0]._id

        // add admin user into product 
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        // insert sample products
        await Product.insertMany(sampleProducts)

        console.log('Data imported '.green.inverse)

    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


// Delete data
const destroyData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed '.red.inverse)

    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


// conditions for import or delete
if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}