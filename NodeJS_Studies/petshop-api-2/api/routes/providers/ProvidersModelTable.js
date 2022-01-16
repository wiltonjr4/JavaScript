const sequelize = require('sequelize')
const instance = require('../../database')

const columns =
{
    company:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    email:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    category:
    {
        type: sequelize.ENUM('food', 'toys'),
        allowNull: false
    }
}

const options =
{
    freezeTableName: true,
    tableName: 'providers',
    timestamps: true,
    version: 'version'
}

module.exports = instance.define('providers', columns, options)