import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import connectDb from './db.js'
import collection from './modules/User.js'

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log('hello')
    return res.status(200).send('hello world')
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    console.log(`got to line 23 on index.js`)
    try {
        const validateuser = await collection.findOne({ username })
        if (validateuser) {

            res.json("user-exists")
        }
        else {

            res.json("user-does-not-exist")
        }

    } catch (error) {
        res.json("errror")
    }
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body

    const newUser = {
        username: username,
        password: password
    }
    try {
        const validateuser = await collection.findOne({ username })
        if (validateuser) {
            res.json("user-exists")
        }
        else {
            await collection.insertMany([{ username, password }])
            res.json("user-created")

        }

    } catch (error) {
        res.json("errror")
    }
})

app.post('/addcollection',async (req,res)=>{
    const {username,anime} = req.body;
    console.log('got to line 65 on collections post request')

    try {
        const user = await collection.findOne({username})
        console.log(user)
        user.animeCollection.push(anime)
        await user.save();
        console.log(user)
    } catch (error) {
        console.log('error on line 71'+error)
    }
})



app.listen(port, () => {
    console.log('listening on port: ' + port)
    connectDb()
})
