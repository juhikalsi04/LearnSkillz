const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const apptitudeSchema = new Schema({

    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('apptitude', questionSchema)