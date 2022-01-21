class NotFound extends Error
{
    constructor(name)
    {
        super(`${name} not found!`)
        this.name = 'NotFound'
        this.idError = 0
    }
}

module.exports = NotFound