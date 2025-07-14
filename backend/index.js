import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './db.js'

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express())



app.listen(port,()=>{
    console.log('listening on port: '+port)
    connectDb()
})
