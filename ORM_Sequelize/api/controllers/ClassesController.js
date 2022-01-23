const database = require('../models')

class ClassesController
{
    static async getAllClasses(requisition, answer)
    {
        try
        {
            const allClasses = await database.Classes.findAll()
            return answer.status(200).json(allClasses)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getOneClass(requisition, answer)
    {
        const { id } = requisition.params

        try
        {
            const oneClass = await database.Classes.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(oneClass)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async createClass(requisition, answer)
    {
        const newClass = requisition.body

        try
        {
            const newClassCreated = await database.Classes.create(newClass)
            return answer.status(201).json(newClassCreated)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async updateClass(requisition, answer)
    {
        const { id } = requisition.params
        const newInfo = requisition.body

        try
        {
            await database.Classes.update(newInfo, { where:{ id:Number(id) }})
            
            const updatedClass = await database.Classes.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(updatedClass)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async deleteClass(requisition, answer)
    {
        const { id } = requisition.params

        try
        {
            await database.Classes.destroy({ where: { id: Number(id) }})
            return answer.status(200).json({message: `The Class with ID: ${id} was successfully deleted`})
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController