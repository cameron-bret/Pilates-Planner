const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')

const exercisesController = {
    index: (req, res) => {
        var lessonId = req.params.lessonId
        Lesson.findById(lessonId).populate('exercises')
            .then((lesson) => {
                res.send(lesson.exercises)
            })
    },
    show: (req, res) => {
        var exerciseId = req.params.exerciseId
        Exercise.findById(exerciseId)
            .then((exercise) => {
                res.send(exercise)
            })
    },
    delete: (req, res) => {
        var exerciseId = req.params.exerciseId
        Exercise.findByIdAndDelete(exerciseId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var exerciseId = req.params.exerciseId
        Exercise.findByIdAndUpdate(exerciseId, req.body, { new: true })
            .then((updatedExercise) => {
                updatedExercise.save()
                res.send(updatedExercise)
            })
    },
    create: (req, res) => {
        var lessonId = req.params.lessonId
        Lesson.findById(lessonId)
            .then((lesson) => {
                console.log(lesson)
                Exercise.create(req.body)
                    .then((newExercise) => {
                        console.log(newExercise)
                        user.exercises.push(newExercise)
                        user.save()
                        res.send(newExercise)
                    })
            })
    }

}

module.exports = exercisesController