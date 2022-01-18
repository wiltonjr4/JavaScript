const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const NotFound = require('./errors/NotFound')
const InvalidField = require('./errors/InvalidField')
const DataNotProvided = require('./errors/DataNotProvided')
const ValueNotSupported = require('./errors/ValueNotSupported')
const acceptedFormats = require('./serializer').acceptedFormats

app.use(bodyParser.json())

app.use((requisition, answer, next) =>
{
    let requisitedFormat = requisition.header('Accept')

    if (requisitedFormat === '*/*') { requisitedFormat = 'application/json' }

    if(acceptedFormats.indexOf(requisitedFormat) === -1)
    {
        answer.status(406)
        answer.end()
        return
    }

    answer.setHeader('content-Type', requisitedFormat)
    next()
})

const router = require('./routes/providers')
const { contentType } = require('express/lib/response')

app.use('/api/providers', router)

app.use((error, requisition, answer, next) =>
{
    let status = 500

    if(error instanceof NotFound)
    {
        status = 404
    }

    if(error instanceof InvalidField || error instanceof DataNotProvided)
    {
        status = 400
    }

    if(error instanceof ValueNotSupported)
    {
        status = 406
    }

    answer.status(status)
    answer.send( JSON.stringify({ message: error.message, id: error.idError }))
})

app.listen(config.get('api.gate'), () => console.log('The API is running!'))