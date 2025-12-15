const express = require('express')
const ChecklistController = require('../controllers/ChecklistController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/checklist', authMiddleware, ChecklistController.list)
router.post('/checklist', authMiddleware, ChecklistController.create)
router.put('/checklist/:id', authMiddleware, ChecklistController.update)
router.delete('/checklist/:id', authMiddleware, ChecklistController.delete)

module.exports = router
