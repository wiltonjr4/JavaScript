class InvalidField extends Error
{
    constructor(field)
    {
        const message = `The fied '${field}' is invalid!`
        super(message)
        this.name = 'InvalidField'
        this.idError = 1
    }
}

module.exports = InvalidField