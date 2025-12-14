const express = require('express')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
res.json({ message: 'API rodando' })
})

const sequelize = require('./database/sequelize')
const User = require('./models/User')
const ChecklistItem = require('./models/ChecklistItem')


User.hasMany(ChecklistItem)
ChecklistItem.belongsTo(User)


sequelize.sync()

app.listen(3000, () => {
console.log('Servidor rodando na porta 3000')
})

const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes)