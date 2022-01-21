const router = require('express').Router({ mergeParams: true })
const Table = require('./productTable')
const Product = require('./Product')
const Serializer = require('../../../serializer').ProductSerializer
const { route } = require('express/lib/application')

router.get('/', async (requisition, answer) => 
{
    const products = await Table.list(requisition.provider.id)
    const serializer = new Serializer( answer.getHeader('Content-Type') )

    answer.send( serializer.serialize(products) )
})

router.post('/', async (requisition, answer, next) => 
{
    try
    {
        const providerId = requisition.provider.id
        const body = requisition.body
        const data = Object.assign({}, body, { provider: providerId })
        const product = new Product(data)
        await product.create()
        const serializer = new Serializer( answer.getHeader('Content-Type') )
    
        answer.status(201)
        answer.send( serializer.serialize(product) )
    }
    catch (error)
    {
        next(error)
    }
})

router.delete('/:id', async (requisition, answer) =>
{
    const data =
    {
        id: requisition.params.id,
        provider: requisition.provider.id
    }

    const product = new Product(data)
    await product.remove()

    answer.status(204)
    answer.end()
})

router.get('/:id', async (requisition, answer, next) =>
{
    try
    {
        const data =
        {
            id: requisition.params.id,
            provider: requisition.provider.id
        }
    
        const product = new Product(data)
        await product.searchById()
        const serializer = new Serializer( answer.getHeader('Content-Type'), ['price', 'stock', 'provider', 'createdAt', 'updatedAt', 'version'] )
    
        answer.send( serializer.serialize(product) )
    }
    catch (error)
    {
        next(error)
    }
})

router.put('/:id', async (requisition, answer, next) =>
{
    try
    {
        const data = Object.assign(
            {},
            requisition.body,
            {
                id: requisition.params.id,
                provider: requisition.provider.id
            }
        )
    
        const product = new Product(data)
        await product.update()

        answer.status(204)
        answer.end()
    }
    catch (error)
    {
        next(error)
    }
})

router.post('/:id/decrease-stock', async (requisition, answer, next) =>
{
    try
    {
        const product = new Product({
            id: requisition.params.id,
            provider: requisition.provider.id
        })
        
        await product.searchById()
        product.stock = product.stock - requisition.body.amount
        await product.decreaseStock()

        answer.status(204)
        answer.end()
    }
    catch (error)
    {
        next(error)
    }
})

module.exports = router