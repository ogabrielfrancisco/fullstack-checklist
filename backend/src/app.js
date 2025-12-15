const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const checklistRoutes = require('./routes/checklist.routes')

require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/checklist', checklistRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
