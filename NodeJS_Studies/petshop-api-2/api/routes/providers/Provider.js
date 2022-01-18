const { type } = require('express/lib/response')
const ProviderTable = require('./ProviderTable')
const InvalidField = require('../../errors/InvalidField')
const DataNotProvided = require('../../errors/DataNotProvided')

class Provider
{
    constructor({ id, company, email, category, createdAt, updatedAt, version })
    {
        this.id = id
        this.company = company
        this.email = email
        this.category = category
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.version = version
    }

    async create() 
    {
        this.validation()
        const result = await ProviderTable.insert({
            company: this.company,
            email: this.email,
            category: this.category
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }

    async searchByID()
    {
        const found = await ProviderTable.getByID(this.id)
        this.company = found.company
        this.email = found.email
        this.category = found.category
        this.createdAt = found.createdAt
        this.updatedAt = found.updatedAt
        this.version = found.version
    }

    async update()
    {
        await ProviderTable.getByID(this.id)
        const fields = ['company', 'email', 'category']
        const dataToUptade = {}

        fields.forEach( (field) =>
        {
            const value = this[field]

            if (typeof value === 'string' && value.length > 0)
            {
                dataToUptade[field] = value
            }
        })

        if (Object.keys(dataToUptade).length === 0)
        {
            throw new DataNotProvided()
        }

        await ProviderTable.update(this.id, dataToUptade)

    }

    remove()
    {
        return ProviderTable.remove(this.id)
    }

    validation()
    {
        const fields = ['company', 'email', 'category']

        fields.forEach( field =>
            {
                const value = this[field]

                if (typeof value !== 'string' || value.length === 0)
                {
                    throw new InvalidField(field)
                }
            })
    }
}

module.exports = Provider