const router = require('express').Router()
const authController = require('./controllers/authController')
const itemController = require('./controllers/itemController')

router.use('/auth', authController);
router.use('/items', itemController)
module.exports = router; 