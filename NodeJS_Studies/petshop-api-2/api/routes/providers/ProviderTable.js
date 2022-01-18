const Model = require('./ProvidersModelTable')
const NotFound = require('../../errors/NotFound')

module.exports =
{
    list ()
    {
        return Model.findAll({ raw: true })
    },

    insert (provider)
    {
        return Model.create(provider)
    },

    async getByID (id)
    {
        const found = await Model.findOne({
            where: { id: id }
        })

        if (!found)
        {
            throw new NotFound()
        }

        return found
    },

    update (id, dataToUptade)
    {
        return Model.update(dataToUptade, { where: {id: id} })
    },

    remove(id)
    {
       return Model.destroy({
            where: {id: id}
        })
    }
}