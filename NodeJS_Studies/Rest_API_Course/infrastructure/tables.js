class Tables
{
    init(conection)
    {
        this.conection = conection

        this.createAttendance()
    }

    createAttendance()
    {
        const sql = `CREATE TABLE IF NOT EXISTS Attendance
        (
            id int NOT NULL AUTO_INCREMENT,
            client varchar(50) NOT NULL,
            pet varchar(20),
            service varchar(20) NOT NULL,
            date datetime NOT NULL,
            creationDate datetime NOT NULL,
            status varchar(20) NOT NULL,
            observations text,
            PRIMARY KEY(id)
        )`

        this.conection.query(sql, erro => 
        {
            if (erro)
            { console.log(erro) }
            else
            { console.log('Table Attendance created successefully') }
        })
    }
}

module.exports = new Tables