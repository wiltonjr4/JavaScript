const database = require('../models')

class LevelsController
{
    static async getAllLevels(requisition, answer)
    {
        try
        {
            const allLevels = await database.Levels.findAll()
            return answer.status(200).json(allLevels)
        }
        catch (error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async getOneLevel(requisition, answer)
    {
        const { id } = requisition.params
        
        try
        {
            const oneLevel = await database.Levels.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(oneLevel)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async createLevel(requisition, answer)
    {
        const newLevel = requisition.body

        try
        {
            const newLevelCreated = await database.Levels.create(newLevel)
            return answer.status(201).json(newLevelCreated)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async updateLevel(requisition, answer)
    {
        const newInfo = requisition.body
        const { id } = requisition.params

        try
        {
            await database.Levels.update(newInfo, { where: { id: Number(id) }})
            
            const oneLevel = await database.Levels.findOne({
                where:
                {
                    id: Number(id)
                }
            })

            return answer.status(200).json(oneLevel)
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }

    static async deleteLevel(requisition, answer)
    {
        const { id } = requisition.params

        try
        {
            await database.Levels.destroy({where: { id: Number(id) }})
            return answer.status(200).json({message: `The Level with ID: ${id} was successfully deleted`})
        }
        catch(error)
        {
            return answer.status(500).json(error.message)
        }
    }
}

module.exports = LevelsController