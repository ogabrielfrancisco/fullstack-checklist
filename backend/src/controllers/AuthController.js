const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body

      const userExists = await User.findOne({ where: { email } })
      if (userExists) {
        return res.status(400).json({ message: 'Usuário já existe' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await User.create({
        name,
        email,
        password: hashedPassword
      })

      return res.status(201).json({ message: 'Usuário criado com sucesso' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erro no servidor' })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' })
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        return res.status(401).json({ message: 'Credenciais inválidas' })
      }

      const token = jwt.sign(
        { id: user.id },
        'secret',
        { expiresIn: '1d' }
      )

      return res.json({ token })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erro no servidor' })
    }
  }
}
