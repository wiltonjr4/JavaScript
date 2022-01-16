const Model = require('./ProvidersModelTable')

module.exports =
{
    list ()
    {
        return Model.findAll()
    }
}