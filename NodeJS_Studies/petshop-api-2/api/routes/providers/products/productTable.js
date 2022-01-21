const Model = require('./ProductModelTable')
const instance = require('../../../database')
const NotFound = require('../../../errors/NotFound')

module.exports =
{
    list(providerId)
    {
        return Model.findAll ({
            where: { provider: providerId },
            raw: true
        })
    },

    insert(data)
    {
        return Model.create(data)
    },

    remove(productId, providerId)
    {
        return Model.destroy({
            where: { id: productId, provider: providerId }
        })
    },

    async searchById(productId, providerId)
    {
        const found = await Model.findOne({
            where:
            {
                id: productId,
                provider: providerId
            },
            raw: true
        })

        if(!found)
        {
            throw new NotFound('Product')
        }

        return found
    },

    update(productData, dataForUpdate)
    {
        return Model.update(
            dataForUpdate,
            {
                where: productData
            }
        )
    },

    decrease(productId, providerId, field, amount)
    {
        return instance.transaction(async transaction =>
            {
                const product = await Model.findOne({
                    where:
                    {
                        id: productId,
                        provider: providerId
                    }
                })

                product[field] = amount

                await product.save()

                return product
            })
    }
}