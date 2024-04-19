import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reuired: true
    },
    number: {
        type: Number,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true
    }
}, {timestamps: true})


userSchema.methods.generateAccessToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        number: this.number,
    },
    process.env.USER_ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.USER_ACCESS_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model('USER', userSchema)