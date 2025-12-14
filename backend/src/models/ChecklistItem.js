const { DataTypes } = require('sequelize')
const sequelize = require('../database/sequelize')


const ChecklistItem = sequelize.define('ChecklistItem', {
titulo: DataTypes.STRING,
descricao: DataTypes.STRING,
concluido: {
type: DataTypes.BOOLEAN,
defaultValue: false
}
})


module.exports = ChecklistItem