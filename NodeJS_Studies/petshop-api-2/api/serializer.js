const ValueNotSupported = require('./errors/ValueNotSupported')

class Serializer
{
    json(data)
    {
        return JSON.stringify(data)
    }

    serialize (data)
    {
        if (this.contentType === 'application/json')
        {
            return this.json( this.filter(data) )
        }

        throw new ValueNotSupported(this.contentType)
    }

    filterObject(data)
    {
        const newObject = {}

        this.publicFields.forEach((field) =>
        {
            if (data.hasOwnProperty(field))
            {
                newObject[field] = data[field]
            }
        })

        return newObject
    }

    filter (data)
    {
        if (Array.isArray(data))
        {
            data = data.map(item => { return this.filterObject(item) })
        }
        else
        {
            data = this.filterObject(data)
        }

        return data
    }
}

class ProviderSerializer extends Serializer
{
    constructor(contentType, extraFields)
    {
        super()
        this.contentType = contentType
        this.publicFields = ['id', 'company', 'category'].concat(extraFields || [])
    }
}

class ProductSerializer extends Serializer
{
    constructor(contentType, extraFields)
    {
        super()
        this.contentType = contentType
        this.publicFields = ['id', 'title'].concat(extraFields || [])
    }
}

module.exports = 
{
    Serializer: Serializer,
    ProviderSerializer: ProviderSerializer,
    ProductSerializer: ProductSerializer,
    acceptedFormats: ['application/json']
}