const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')
const mongoose = require('./connections')

const pushUp = new Exercise({
    exerciseTitle: 'Push Up',
    description: "push the planet away from yourself",
    equipment: "mat or reformer",
    springWeight: 5
})

const bicepCurl = new Exercise({
    exerciseTitle: 'Bicep Curl',
    description: "Build muscles in your beefy arms",
    equipment: "mat or reformer",
    springWeight: 7
})

const scissors = new Exercise({
    exerciseTitle: 'Scissors',
    description: "alternate kick legs",
    equipment: "mat or reformer",
    springWeight: 5
})

const liftAndLower = new Exercise({
    exerciseTitle: 'Lift and Lower',
    description: "first the legs lift, and then they lower",
    equipment: "mat or reformer",
    springWeight: 2
})

const plank = new Exercise({
    exerciseTitle: 'Plank',
    description: "holding push-up position",
    equipment: "mat, reformer, or box",
    springWeight: 1
})

const chestLifts = new Exercise({
    exerciseTitle: 'Chest Lifts',
    description: "When you lift your chest",
    equipment: "mat",
    springWeight: 0
})

const supineArms = new Exercise({
    exerciseTitle: 'Supine Arms',
    description: "work out beast mode",
    equipment: "blah blah blah",
    springWeight: 5
})

const skullCrusher = new Exercise({
    exerciseTitle: 'Skull Crasher',
    description: "tricep over the head lifty thingy",
    equipment: "mat or reformer",
    springWeight: 1
})

const Lesson1 = new Lesson({
    lessonTitle: 'Lesson 1',
    muscleGroup: 'arms',
    level: 'introductory',
    exercises: [pushUp, bicepCurl, supineArms, skullCrusher]
})

const Lesson2 = new Lesson({
    lessonTitle: 'Lesson 2',
    muscleGroup: 'legs',
    level: 'intermediate',
    exercises: [liftAndLower, scissors]
})

const Lesson3 = new Lesson({
    lessonTitle: 'Lesson 3',
    muscleGroup: 'core',
    level: 'advanced',
    exercises: [plank, chestLifts]
})

const Lesson4 = new Lesson({
    lessonTitle: 'Lesson 4',
    muscleGroup: 'arms',
    level: 'injury',
    exercises: [bicepCurl, pushUp]
})

Lesson.remove({})
    .then(() => Exercise.remove({}))
    .then(() => Exercise.insertMany([pushUp, bicepCurl, scissors, liftAndLower, plank, chestLifts, supineArms, skullCrusher]))
    .then(() => Lesson1.save())
    .then(() => Lesson2.save())
    .then(() => Lesson3.save())
    .then(() => Lesson4.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())