const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const UserSchema = new Schema({
    name: {
        type: String,
        ref: 'user'
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)

