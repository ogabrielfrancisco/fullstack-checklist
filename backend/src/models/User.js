const { DataTypes } = require('sequelize')
const sequelize = require('../database/sequelize')


const User = sequelize.define('User', {
name: DataTypes.STRING,
email: DataTypes.STRING,
password: DataTypes.STRING
})


module.exports = User