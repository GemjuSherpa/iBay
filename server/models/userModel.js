import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

// decrypt the password and match
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
    
}

// encrypt password before creating new user
userSchema.pre('save', async function(next){
    // check if the password has been modified already
    if(!this.isModified('password')){
        next()
    }
    
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


// create user table
const User = mongoose.model('User', userSchema)

export default User