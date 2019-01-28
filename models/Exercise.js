const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Exercise = new Schema({
    exerciseTitle: String,
    description: String,
    equipment: String,
    springWeight: Number
})

module.exports = mongoose.model('Exercise', Exercise)