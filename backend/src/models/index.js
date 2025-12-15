const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const User = require('./User')(sequelize, DataTypes)
const Checklist = require('./Checklist')(sequelize, DataTypes)

const models = {
  User,
  Checklist
}

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models)
  }
})

sequelize.sync()

module.exports = {
  sequelize,
  Sequelize,
  ...models
}
