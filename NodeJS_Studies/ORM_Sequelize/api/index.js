const express = require('express')
const routes = require('./routes')

const app = express()
const gate = 3000

routes(app)

app.listen(gate, () => console.log(`The server is running in the gate ${gate}`))

module.exports = app