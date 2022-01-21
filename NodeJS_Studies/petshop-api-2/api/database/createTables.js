const models = 
[
    require('../routes/providers/ProvidersModelTable'),
    require('../routes/providers/products/ProductModelTable')
]

async function createTable()
{
    for (let i = 0; i < models.length; i++)
    {
        const model = models[i]
        await model.sync()
    }
}

createTable()