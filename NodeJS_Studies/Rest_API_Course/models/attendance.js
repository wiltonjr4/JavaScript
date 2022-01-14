const moment = require('moment')
const attendance = require('../controllers/attendance')
const connection = require('../infrastructure/conection')

class Attendance
{
    add(attendance, res)
    {
        const creationDate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const validDate = moment(date).isSameOrAfter(creationDate)
        const validClient = attendance.client.length >= 5

        const validations =
        [
            {
                name: 'date',
                valid: validDate,
                menssage: 'Date need to be equal or greater than the current date'
            },

            {
                name: 'client',
                valid: validClient,
                menssage: 'Client need to have at least 5 char'
            }
        ]

        const errors = validations.filter(field => !field.valid)
        const existErrors = errors.length
        
        if(existErrors)
        {
            res.status(400).json(errors)
        }
        else
        {
            const attendanceDated = {...attendance, creationDate, date}

            const sql = 'INSERT INTO Attendance SET ?'

            connection.query(sql, attendanceDated, (erro, result) =>
            {
                if (erro)
                {
                    res.status(400).json(erro)
                }
                else
                {
                    res.status(201).json(attendance)
                } 
            })
        }
    }

    list(res)
    {
        const sql = 'SELECT * FROM Attendance'

        connection.query(sql, (error, results) =>
        {
            if (error)
            {
                res.status(400).json(error)
            }
            else
            {
                res.status(200).json(results)
            }
        })
    }

    searchByID(id, res)
    {
        const sql = `SELECT * FROM Attendance WHERE id=${id}`

        connection.query(sql, (error, results) =>
        {
            const attendanceRes = results[0]

            if (error)
            {
                res.status(400).json(error)
            }
            else
            {
                res.status(200).json(attendanceRes)
            }
        })
    }

    modify(id, values, res)
    {
        if(values.date)
        {
            values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Attendance SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, results) =>
        {
            if(error)
            {
                res.status(400).json(error)
            }
            else
            {
                res.status(200).json({...values, id})
            }
        })
    }

    delete(id, res)
    {
        const sql = 'DELETE FROM Attendance WHERE id=?'

        connection.query(sql, id, (error, results) =>
        {
            if(error)
            {
                res.status(400).json(error)
            }
            else
            {
                res.status(200).json(`The client with id: ${id} was successfully DELETED!`)
            }
        })
    }
}

module.exports = new Attendance