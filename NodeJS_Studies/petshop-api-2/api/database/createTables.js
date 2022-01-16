const TableModel = require('../routes/providers/ProvidersModelTable')

TableModel
    .sync()
    .then(() => console.log('Table Created Succssefully!'))
    .catch(console.log)