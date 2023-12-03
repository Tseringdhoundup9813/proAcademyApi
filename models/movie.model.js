const mongoose = require("mongoose")



const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required field!'],
        unique:true,
        trim:true,
    },
    description:{
        type:String,
        required:[true,'Description is required field!'],
        trim:true,
    },
    duration:{
        type:Number,
        required:[true,'Duration is required field!']
    },
    rating:{
        type:Number,
        default:1.0,
    },
    totalRating:{
        type:Number,
    },
    releaseYear:{
        type:Number,
        required:[true,'ReleaseYear is required field!']
    },
    releaseDate:{
        type:Date,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    genres:{
        type:[String],
        required:[true,'Genre is required field!']
    },
    directors:{
        type:[String],
        required:[true,'Director is required filed']
    },
    coverImage:{
        type:String,
        required:[true,'Cover image is required'],
    },
    actors:{
        type:[String],
        required:[true,'Actor is required field!']
    },
    price:{
        type:Number,
        required:[true,'Price is required field!']

    }


})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie;
