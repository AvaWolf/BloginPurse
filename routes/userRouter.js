const Router = require('express')
const router = Router()
const userControllers = require('../controller/userController')
const authMiddleware = require('../MiddleWare/authMiddleware')

router.post('/login', userControllers.login)
router.post('/register', userControllers.register)
router.get('/auth', authMiddleware, userControllers.auth)


module.exports = router
