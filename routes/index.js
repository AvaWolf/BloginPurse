const Router = require('express')
const router = Router()
const userRouter = require('./userRouter')


// router.use('/post')
router.use('/user', userRouter)

module.exports = router
