const { Router } = require('express')
const ClassesController = require('../controllers/ClassesController')

const router = Router()

router.get('/classes', ClassesController.getAllClasses)

router.get('/classes/:id', ClassesController.getOneClass)

router.post('/classes', ClassesController.createClass)

router.put('/classes/:id', ClassesController.updateClass)

router.delete('/classes/:id', ClassesController.deleteClass)

module.exports = router