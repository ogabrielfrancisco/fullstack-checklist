const { Checklist } = require('../models')

class ChecklistController {
  async list(req, res) {
    const items = await Checklist.findAll({
      where: { userId: req.userId }
    })
    return res.json(items)
  }

  async create(req, res) {
    const item = await Checklist.create({
      titulo: req.body.titulo,
      userId: req.userId
    })
    return res.status(201).json(item)
  }

  async update(req, res) {
    const item = await Checklist.findOne({
      where: { id: req.params.id, userId: req.userId }
    })

    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado' })
    }

    await item.update(req.body)
    return res.json(item)
  }

  async delete(req, res) {
    const item = await Checklist.findOne({
      where: { id: req.params.id, userId: req.userId }
    })

    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado' })
    }

    await item.destroy()
    return res.status(204).send()
  }
}

module.exports = new ChecklistController()
