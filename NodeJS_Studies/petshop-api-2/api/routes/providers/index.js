const router = require('express').Router()
const ProviderTable = require('./ProviderTable')

router.use('/', async (requisition, answer) =>
    {
        const results = await ProviderTable.list()
        answer.send(
            JSON.stringify(results)
        )
    })

module.exports = router