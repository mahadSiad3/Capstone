import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }, 
    animeCollection: [
        {
            mal_id: Number,
            title: String,
            image_url: String,
            category: String
        }
    ]

})

const Collection = mongoose.model("collection", UserSchema)


export default Collection