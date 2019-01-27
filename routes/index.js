const express = require('express')
const router = express.Router()
const lessonController = require('../controllers/lessonController')
const exercisesController = require('../controllers/exercisesController')

router.get('/api/lessons', lessonController.index)
router.post('/api/lessons/', lessonController.create)
router.get('/api/lesson/:lessonId', lessonController.show)
router.patch('/api/lessons/:lessonId', lessonController.update)
router.delete('/api/lessons/:lessonId', lessonController.delete)

router.get('/api/lessons/:lessonId/exercises', exercisesController.index)
router.get('/api/exercises/:exerciseId', exercisesController.show)
router.delete('/api/exercises/:exerciseId', exercisesController.delete)
router.patch('/api/exercises/:exerciseId', exercisesController.update)
router.post('/api/lessons/:lessonId/exercises', exercisesController.create)

module.exports = router