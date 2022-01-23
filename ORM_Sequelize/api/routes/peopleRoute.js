const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)

router.get('/people/:id', PeopleController.getOnePerson)

router.get('/people/:studentId/enrollments/:enrollmentId', PeopleController.getOneEnrollment)

router.post('/people', PeopleController.createPerson)

router.post('/people/:studentId/enrollments', PeopleController.createEnrollment)

router.put('/people/:id', PeopleController.updatePerson)

router.delete('/people/:id', PeopleController.deletePerson)

module.exports = router