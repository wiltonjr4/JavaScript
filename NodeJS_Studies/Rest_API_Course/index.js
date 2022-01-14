const customExpress = require('./config/customExpress')
const conection = require('./infrastructure/conection')
const tables = require('./infrastructure/tables')

conection.connect (erro =>
    { 
        if (erro) { console.log(erro) }
        else 
        {
            console.log('connected successfully')
            
            tables.init(conection)

            const app = customExpress()

            app.listen(3000, () => console.log('Server running in the gate 3000'))
        } 
    })