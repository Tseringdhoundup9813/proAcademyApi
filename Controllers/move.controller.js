
const movieModel = require("../models/movie.model")

const ApiFeatures = require('../utils/ApiFeatures')


exports.getAllMovies =async(req,res)=>{
    try{
        
        const features = new ApiFeatures(movieModel.find(),req.query).filter();
        let movie = await features.query
         
        res.status(200).json({
            status:'success',
            length:movie.length,
            data:{
                movie
            }
        })

    }catch(err){
  
        res.status(404).json({
            status:'fail',
            message:err.message,
        })
    }
}




exports.getMovie =async(req,res)=>{
   const {id} = req.params;
    try{
        const movie = await movieModel.findById(id);
        res.status(200).json({
            status:'success',
            data:{
                movie
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err.message,
        })
    }
}



// creacte move api -----------------------------------------
exports.createMovie = async (req,res)=>{
    
    const {name,des,duration,rating} = req.body;

    try{
        const movie = await movieModel.create(req.body);
        res.status(201).json({
            status:'success',
            data:{
                movie
            }
        })
    }catch(err){
        
        res.status(400).json({
            status:'fail',
            message:err.message,
        })

    }

}
// -----------------------------------------------------------------




exports.updateMovie = async(req,res)=>{
    const {id} = req.params;
    try{
        const updateMovie = await movieModel.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        res.status(200).json({
            status:'success',
            data:{
                movie:updateMovie
            }

        })


    }catch(err){
           
        res.status(404).json({
            status:'fail',
            message:err.message,
        })

    }
}




exports.deleteMovie = async(req,res)=>{
  const {id} = req.params;
  try{
    const deleteMovie = await movieModel.findByIdAndDelete(id);
    res.status(204).json({
        status:'success',
        data:null
    })

  }catch(err){
    res.status(404).json({
        status:'fail',
        message:err.message,
    })
  }
}