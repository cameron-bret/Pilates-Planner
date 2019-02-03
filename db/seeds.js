const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')
const mongoose = require('./connections')

const pushUp = new Exercise({
    exerciseTitle: 'Push Up',
    description: "Push the planet away from yourself",
    equipment: "Mat or Reformer",
    springWeight: 5
})

const bicepCurl = new Exercise({
    exerciseTitle: 'Bicep Curl',
    description: "Build muscles in your beefy arms",
    equipment: "Mat or Reformer",
    springWeight: 7
})

const scissors = new Exercise({
    exerciseTitle: 'Scissors',
    description: "Alternate kick legs in air",
    equipment: "Mat or Reformer",
    springWeight: 5
})

const liftAndLower = new Exercise({
    exerciseTitle: 'Lift and Lower',
    description: "First the legs lift, and then they lower",
    equipment: "Mat or Reformer",
    springWeight: 2
})

const plank = new Exercise({
    exerciseTitle: 'Plank',
    description: "Holding push-up position",
    equipment: "Mat, Reformer, or Box",
    springWeight: 1
})

const chestLifts = new Exercise({
    exerciseTitle: 'Chest Lifts',
    description: "When you lift your chest",
    equipment: "Mat",
    springWeight: 0
})

const supineArms = new Exercise({
    exerciseTitle: 'Supine Arms',
    description: "Work out beast mode for those arms",
    equipment: "Mat or Reformer",
    springWeight: 5
})

const skullCrusher = new Exercise({
    exerciseTitle: 'Skull Crusher',
    description: "Tricep over the head lifty thingy",
    equipment: "Mat or Reformer",
    springWeight: 1
})

const Lesson1 = new Lesson({
    lessonTitle: 'Lesson 1',
    muscleGroup: 'Arms',
    level: 'Introductory',
    exercises: [pushUp, bicepCurl, supineArms, skullCrusher]
})

const Lesson2 = new Lesson({
    lessonTitle: 'Lesson 2',
    muscleGroup: 'Legs',
    level: 'Intermediate',
    exercises: [liftAndLower, scissors]
})

const Lesson3 = new Lesson({
    lessonTitle: 'Lesson 3',
    muscleGroup: 'Core',
    level: 'Advanced',
    exercises: [plank, chestLifts]
})

const Lesson4 = new Lesson({
    lessonTitle: 'Lesson 4',
    muscleGroup: 'Arms',
    level: 'Injury',
    exercises: [bicepCurl, pushUp]
})

const Lesson5 = new Lesson({
    lessonTitle: 'Lesson 5',
    muscleGroup: 'Arms',
    level: 'Injury',
    exercises: [bicepCurl, pushUp]
})

const Lesson6 = new Lesson({
    lessonTitle: 'Lesson 6',
    muscleGroup: 'Arms',
    level: 'Injury',
    exercises: [bicepCurl, pushUp]
})

const Lesson7 = new Lesson({
    lessonTitle: 'Lesson 7',
    muscleGroup: 'Arms',
    level: 'Injury',
    exercises: [bicepCurl, pushUp]
})

const Lesson8 = new Lesson({
    lessonTitle: 'Lesson 8',
    muscleGroup: 'Arms',
    level: 'Injury',
    exercises: [bicepCurl, pushUp]
})

Lesson.remove({})
    .then(() => Exercise.remove({}))
    .then(() => Exercise.insertMany([pushUp, bicepCurl, scissors, liftAndLower, plank, chestLifts, supineArms, skullCrusher]))
    .then(() => Lesson1.save())
    .then(() => Lesson2.save())
    .then(() => Lesson3.save())
    .then(() => Lesson4.save())
    .then(() => Lesson5.save())
    .then(() => Lesson6.save())
    .then(() => Lesson7.save())
    .then(() => Lesson8.save())
    .then(() => mongoose.connection.close())