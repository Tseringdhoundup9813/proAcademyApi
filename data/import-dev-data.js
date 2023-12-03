
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const fs = require("fs")
const movieModel = require('../models/movie.model')

dotenv.config({path:'../config.env'})


mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log('db connection successful')
        if(process.argv[2] ==='--import'){
          importMovie();
        }
        if(process.argv[2] ==='--delete'){
          deleteMovies();
        }
    })
    .catch((err)=>{
      console.log('error message' + err.message)
    }


)



// READ MOVIE JSON FILE

const movie = JSON.parse(fs.readFileSync('./movie.json','utf-8'));

// delete 
const deleteMovies =async()=>{
    try{
      await movieModel.deleteMany();
      console.log('successfuly daleted all the document')
    }catch(err){
      console.log(err);
    }
    process.exit();
}
const importMovie =async()=>{
    try{
      await movieModel.create(movie);
      console.log('successfully imported data')
    }catch(err){
      console.log(err);
    }
    process.exit();

}


