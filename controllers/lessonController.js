const Lesson = require('../models/Lesson')
const Exercise = require('../models/Exercise')

const lessonController = {
    index: (req, res) => {
        Lesson.find({})
            .then((lessons) => {
                res.send(lessons)
            })
    },
    show: (req, res) => {
        Lesson.findById(req.params.lessonId).populate('exercises')
            .then((lesson) => {
                res.send(lesson)
            })
    },
    update: (req, res) => {
        Lesson.findByIdAndUpdate(req.params.lessonId, req.body)
            .then((updatedLesson) => {
                updatedLesson.save()
                res.send(updatedLesson)
            })
    },
    delete: (req, res) => {
        Lesson.findByIdAndDelete(req.params.lessonId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Lesson.create(req.body)
            .then((lesson) => {
                res.send(lesson)
            })
    }
}

module.exports = lessonController