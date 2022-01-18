class ValueNotSupported extends Error
{
    constructor(contentType)
    {
        super(`The content type '${contentType}' is not supported`)
        this.name = 'ValueNotSupported'
        this.idError = 3
    }
}

module.exports = ValueNotSupported