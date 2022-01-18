class DataNotProvided extends Error
{
    constructor()
    {
        super('No data provided to update!')
        this.name = 'DataNotProvided'
        this.id = 2
    }
}

module.exports = DataNotProvided