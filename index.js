require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api",router)


const start = async () => {
    try {
      try{
        await prisma.$disconnect()
        console.log('Prisma connect db')
        }
      catch(e){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      }

      app.listen(PORT, () => { console.log(`Server start = ${PORT}`) })
    }
    catch(e){
      console.log(e)
    }
}

start()