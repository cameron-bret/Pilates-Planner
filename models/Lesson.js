const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Lesson = new Schema({
    username: String,
    password: String,
    ideas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
})

module.exports = mongoose.model('Lesson', Lesson)