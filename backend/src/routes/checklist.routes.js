const express = require('express')
const ChecklistController = require('../controllers/ChecklistController')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.get('/', ChecklistController.index)
router.post('/', ChecklistController.store)
router.put('/:id', ChecklistController.update)
router.delete('/:id', ChecklistController.delete)

module.exports = router
