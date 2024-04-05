const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secret} = require('../token/config')

const genereteAccessToken = (id,name) => {
  const payload = {
    id,
    name,
  }
  return jwt.sign(payload, secret, {expiresIn: "24h"})
}


class UserControllers {
  async login(req, res) {
    try {
      const {email, password} = req.body
      const isUser = await prisma.users.findFirst({where: {email: email}})
      if(!email){
        return res.json({msg:`Данный ${email} был не найден в базе`})
      }
      const validPassword = bcrypt.compareSync(password, isUser.passowrd)
      if(!validPassword){
       return res.json({msg: "Пароль введен не верно"})
      }
      const token = genereteAccessToken(isUser.id, isUser.name)
      return res.json({token: `${token}`})
      
    }
    catch(e){
      console.log(e)
      res.status(500).json({msg:`${e}`})
    }
  }

  async register(req,res) {
    try {
      const {name, email, password} = req.body
      const isUser = await prisma.users.findFirst({where: {email: email, name:name}})
      if(isUser){
        return res.status(400).json({msg:"Пользователь уже зарегестрирован"})
      }
      const hashPassword = bcrypt.hashSync(password,10)
      const createAt = new Date()
      await prisma.users.create({data: {
        email:email,
        passowrd: hashPassword,
        name: name,
        createAt: createAt
      }})
      res.json({msg:"Пользователь успешно зарегестировался"})
    }
    catch(e) {
      console.log(e)
      res.status(500).json({msg:"Fail"})
    }
  }

  async auth(req,res) {
    try{
      const isUserAll = await prisma.users.findMany()
      res.json(isUserAll)
    }
    catch(e){
      console.log(e)
      res.status(500).json({msg:"Fail"})
    }
  }
}

module.exports = new UserControllers()