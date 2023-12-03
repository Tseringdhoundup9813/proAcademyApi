
const express = require("express")
const morgan = require('morgan');

const app = express()


// routes
const movieRouter = require('./Routes/movie.route')




// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.static('./public'));

// router middleware ---------------
app.use('/api/v1/movie',movieRouter)


////////////////
module.exports = app;

