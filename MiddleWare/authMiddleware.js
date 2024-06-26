const jwt = require('jsonwebtoken')
const {secret} = require('../token/config')

module.exports = function(req, res,next) {
  if(req.methon === "OPTIONS"){
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
      return res.status(483).json({msg:"Пользователь не авторизован"})
    }
    const decodeData =jwt.verify(token,secret)
    req.user = decodeData
    next()
  }
  catch(e){
    return res.status(483).json({msg:"Пользователь не авторизован", err: e})
  }
}