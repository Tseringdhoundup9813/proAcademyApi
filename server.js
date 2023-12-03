
const mongoose = require('mongoose')


const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const app = require('./index');


mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log('db connection successful')
   
    })
    .catch((err)=>{
    console.log('error message' + err.message)}
)







const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})