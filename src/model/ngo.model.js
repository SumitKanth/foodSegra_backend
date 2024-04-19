import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: Number, 
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}, {timestamps: true})

ngoSchema.methods.generateAccessToken = async function() {
    jwt.sign({
        _id: this._id,
        email: this.email,
        phone: this.phone
    },
    process.env.NGO_ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.NGO_ACCESS_TOKEN_EXPIRY
    }
)
}

export const Ngo = mongoose.model('NGO', ngoSchema)