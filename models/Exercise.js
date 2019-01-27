const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Exercise = new Schema({
    title: String,
    description: String,
    equipment: String,
    springWeight: Number
})

module.exports = mongoose.model('Exercise', Exercise)