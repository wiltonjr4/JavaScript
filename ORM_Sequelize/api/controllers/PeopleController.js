const database = require('../models')
const people = require('../models/people')

class PeopleController
{
    static async getAllActivePeople(requisition, answer)
    {
        try
        {
            const allActivePeople = await database.People.findAll()
            return answer.status(200).json(allActivePeople)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getAllPeople(requisition, answer)
    {
        try
        {
            const allPeople = await database.People.scope('all').findAll()
            return answer.status(200).json(allPeople)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }
    
    static async getOnePerson(requisition, answer)
    {
        const { id } = requisition.params
        try
        {
            const onePerson = await database.People.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(onePerson)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async createPerson(requisition, answer)
    {
        const newPerson = requisition.body

        try
        {
            const newPersonCreated = await database.People.create(newPerson)
            return answer.status(201).json(newPersonCreated)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async updatePerson (requisition, answer)
    {
        const newInfo = requisition.body
        const { id } = requisition.params

        try
        {
            await database.People.update(newInfo, { where: { id: Number(id) }})
            
            const onePerson = await database.People.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(onePerson)
        }
        catch (error)
        {
            answer.status(500).json(error.message)
        }
    }

    static async deletePerson (requisition, answer)
    {
        const { id } = requisition.params

        try
        {
            await database.People.destroy({ where: { id: Number(id) }})
            return answer.status(200).json({ message: `The person with Id ${id} was successfully deleted` })
        }
        catch (error)
        {
            answer.status(500).json(error.message)
        }
    }

    static async restorePerson(requisition, answer)
    {
        const { id } = requisition.params

        try
        {
            await database.People.restore({ where: { id: Number(id) }})
            return answer.status(200).json({ message: `The person with Id ${id} was successfully restored` })
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getOneEnrollment(requisition, answer)
    {
        const { studentId, enrollmentId } = requisition.params
        try
        {
            const oneEnrollment = await database.Enrollment.findOne({
                where:
                {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            })

            return answer.status(200).json(oneEnrollment)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async createEnrollment(requisition, answer)
    {
        const { studentId } = requisition.params
        const newEnrollment = { ...requisition.body, studentId: Number(studentId) }

        try
        {
            const newEnrollmentCreated = await database.Enrollment.create(newEnrollment)
            return answer.status(201).json(newEnrollmentCreated)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getEnrollment(requisition, answer)
    {
        const { studentId } = requisition.params

        try
        {
            const person = await database.People.findOne( { where: { id: Number(studentId) }})
            const enrollment = await people.getEnrollmentClasses()
            return answer.status(201).json(enrollment)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getEnrollmentByClasses(requisition, answer)
    {
        const { classId } = requisition.params

        try
        {
            const allEnrollments = await database.Enrollment.findAndCountAll({
                where:
                {
                    class_id: Number(classId),
                    status: 'confirmed'
                }
            })
            return answer.status(201).json(allEnrollments)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController