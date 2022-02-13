const bodyparser = require('body-parser')
const people = require('./peopleRoute')
const levels = require('./levelsRoute')
const classes = require('./classesRoute')

module.exports = app =>
{
    app.use(bodyparser.json(), people, levels, classes)
}