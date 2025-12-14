const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


const SECRET = 'segredo'


module.exports = {
async register(req, res) {
const { name, email, password } = req.body
const hash = await bcrypt.hash(password, 10)
const user = await User.create({ name, email, password: hash })
res.json(user)
},


async login(req, res) {
const { email, password } = req.body
const user = await User.findOne({ where: { email } })


if (!user) return res.status(401).json({ message: 'Usuário inválido' })


const valid = await bcrypt.compare(password, user.password)
if (!valid) return res.status(401).json({ message: 'Senha inválida' })


const token = jwt.sign({ id: user.id }, SECRET)
res.json({ token })
}
}