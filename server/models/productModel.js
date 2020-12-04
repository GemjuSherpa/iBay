import mongoose from 'mongoose'

// Review Schema
const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: String, required: true},
    comment: {type: String, required: true},
}, {
    timestamps: true
})


// product schema
const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: Boolean,
        required: true,
        default: false
    },
    category: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

// create product table
const Product = mongoose.model('Product', productSchema)

export default Product