import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './db.js'

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express())

app.get('/',(req,res)=>{
    console.log('hello')
   return res.status(200).send('hello world')
})

app.listen(port,()=>{
    console.log('listening on port: '+ port)
    connectDb()
})
