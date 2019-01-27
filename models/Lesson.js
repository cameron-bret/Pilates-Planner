const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Lesson = new Schema({
    muscleGroup: String,
    level: String,
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
})

module.exports = mongoose.model('Lesson', Lesson)