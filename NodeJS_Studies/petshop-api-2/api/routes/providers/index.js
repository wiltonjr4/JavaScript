const router = require('express').Router()
const ProviderTable = require('./ProviderTable')
const Provider = require('./Provider')
const ProviderSerializer = require('../../serializer').ProviderSerializer

router.get('/', async (requisition, answer) =>
{
    const results = await ProviderTable.list()
    answer.status(200)

    const serialize = new ProviderSerializer( answer.getHeader('Content-Type'))

    answer.send( serialize.serialize(results) )
})

router.post('/', async (requisition, answer, next) =>
{
    try
    {
        const receivedData = requisition.body
        const provider = new Provider(receivedData)
        await provider.create()
        answer.status(201)

        const serialize = new ProviderSerializer( answer.getHeader('Content-Type') )

        answer.send( serialize.serialize(provider) )
    }
    catch (error)
    {
        next(error)
    }
})

router.get('/:providerId', async (requisition, answer, next) =>
{
    try {
        const id = requisition.params.providerId
        const provider = new Provider({ id: id })
        await provider.searchByID()
        answer.status(200)

        const serialize = new ProviderSerializer( answer.getHeader('Content-Type'), ['email', 'createdAt', 'updatedAt', 'version'] )

        answer.send( serialize.serialize(provider) )
    }
    catch (error) 
    {
        next(error)
    }
})

router.put('/:providerId', async (requisition, answer, next) =>
{
    try
    {
        const id = requisition.params.providerId
        const receivedData = requisition.body
        const data = Object.assign({}, receivedData, {id: id})
        const provider = new Provider(data)
        await provider.update()
        answer.status(204)
        answer.end()
    }
    catch (error)
    {
        next(error)
    }
})

router.delete('/:providerId', async (requisition, answer, next) =>
{
    try
    {
        const id = requisition.params.providerId
        const provider = new Provider({ id: id })
        await provider.searchByID()
        await provider.remove()
        answer.status(204)
        answer.end()
    }
    catch (error)
    {
        next(error)
    }
})

module.exports = router