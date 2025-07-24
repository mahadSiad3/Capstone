import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import connectDb from './db.js'
import collection from './modules/User.js'

const app = express()

const port = process.env.PORT

// Middleware setup
app.use(cors()) // Allow requests from different origins
app.use(express.json()) // Parse incoming JSON request bodies

app.get('/', (req, res) => {
    console.log('hello')
    return res.status(200).send('hello world')
})
// Login route: checks if user exists
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
// Signup route: creates new user if username is unique
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
// Add anime to user's collection if it doesn't already exist
app.post('/addcollection', async (req, res) => {
    const { username, anime } = req.body;
    console.log('got to line 65 on collections post request')

    try {
        const user = await collection.findOne({ username })
        console.log(user)
        const alreadyExists = user.animeCollection.find(a => a.mal_id === anime.mal_id)
        if (alreadyExists) {
            console.log('anime already marked in a category')
            return res.status(409).json({
                message: 'anime-already-exists',
                category: alreadyExists.category
            })
        }
        user.animeCollection.push(anime)
        await user.save();
        console.log(user)
        return res.status(200).json({ message: 'anime-added' })
    } catch (error) {
        console.log('error on line 71' + error)
    }
})

// Get a user's anime collection
app.get('/getcollection/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await collection.findOne({ username });
        console.log(user)
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user.animeCollection);
    } catch (error) {
        console.error("Failed to get collection:", error);
        res.status(500).send("failed to get user collection");
    }
});



app.listen(port, () => {
    console.log('listening on port: ' + port)
    connectDb()
})
