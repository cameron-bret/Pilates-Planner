const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')
const mongoose = require('./connections')

const mars = new Exercise({
    title: 'Fly to Mars',
    description: "Earth isn't Red enough. Let's move to a new planet"
})

const tesla = new Exercise({
    title: 'Build a Car',
    description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

const elon = new Lesson({
    username: 'elon_musk',
    password: 'spaceiscool',
    exercises: [mars, tesla]
})

Lesson.remove({})
    .then(() => Exercise.remove({}))
    .then(() => Exercise.insertMany([mars, tesla]))
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())