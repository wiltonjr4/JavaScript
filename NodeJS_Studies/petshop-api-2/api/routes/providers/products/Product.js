const Table = require('./productTable')
const DataNotProvided = require('../../../errors/DataNotProvided')
const InvalidField = require('../../../errors/InvalidField')

class Product
{
    constructor ({ id, title, price, stock, provider, createdAt, updatedAt, version})
    {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.provider = provider
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.version = version
    }

    validation()
    {
        if (typeof this.title !== 'string' || this.title.length === 0)
        {
            throw new InvalidField('title')
        }

        if (typeof this.price !== 'number' || this.price === 0)
        {
            throw new InvalidField('price')
        }
    }

    async create()
    {
        this.validation()
        const result = await Table.insert({
            title: this.title,
            price: this.price,
            stock: this.stock,
            provider: this.provider
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }

    remove()
    {
        return Table.remove(this.id, this.provider)
    }

    async searchById()
    {
        const product = await Table.searchById(this.id, this.provider)
        this.title = product.title
        this.price = product.price
        this.stock = product.stock
        this.createdAt = product.createdAt
        this.updatedAt = product.updatedAt
        this.version = product.version
    }

    update()
    {
        const dataForUpdate = {}

        if (typeof this.title === 'string' && this.title.length > 0)
        {
            dataForUpdate.title = this.title
        }

        if (typeof this.price === 'number' && this.price > 0)
        {
            dataForUpdate.price = this.price
        }

        if (typeof this.stock === 'number')
        {
            dataForUpdate.stock = this.stock
        }

        if (Object.keys(dataForUpdate).length ===0 )
        {
            throw new DataNotProvided()
        }

        return Table.update(
            {
                id: this.id,
                provider: this.provider
            },
            dataForUpdate
        )

    }

    decreaseStock()
    {
        return Table.decrease(
            this.id,
            this.provider,
            'stock',
            this.stock
        )
    }

}

module.exports = Product