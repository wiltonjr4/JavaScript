const attendance = require('../models/attendance')
const attendanceModels = require('../models/attendance')

module.exports = app =>
{
    app.get('/attendance', (req, res) =>
    {
      attendance.list(res)  
    })

    app.get('/attendance/:id', (req, res) =>
    {
        const id = parseInt(req.params.id)

        attendanceModels.searchByID(id, res)
    })

    app.post('/attendance', (req, res) => 
    {
        const attendance = req.body

        attendanceModels.add(attendance, res)
    })

    app.patch('/attendance/:id', (req, res) =>
    {
        const id = parseInt(req.params.id)
        const values = req.body

        attendanceModels.modify(id, values, res)
    })

    app.delete('/attendance/:id', (req, res) =>
    {
        const id = parseInt(req.params.id)

        attendanceModels.delete(id, res)
    })
    
}