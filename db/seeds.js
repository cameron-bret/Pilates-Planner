const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')
const mongoose = require('./connections')

const pushUp = new Exercise({
    title: 'Push Up',
    description: "push the planet away from yourself",
    equipment: "blah blah blah",
    springWeight: 5
})

const bicepCurl = new Exercise({
    title: 'Bicep Curl',
    description: "Build muscles in your beefy arms",
    equipment: "blagh blgah blgah",
    springWeight: 7
})

const tricepDip = new Lesson({
    muscleGroup: 'arms',
    level: 'introductory',
    exercises: [pushUp, bicepCurl]
})

Lesson.remove({})
    .then(() => Exercise.remove({}))
    .then(() => Exercise.insertMany([pushUp, bicepCurl]))
    .then(() => tricepDip.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())