module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('Checklist', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    concluido: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  Checklist.associate = (models) => {
    Checklist.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return Checklist
}
