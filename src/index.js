const express = require("express");
const { json } = require("express");
const morgan = require("morgan");
const cors =require('cors')

//Routes imports
const loginRoutes=require('./routes/login/login')


// server
const app = express();

// middlewares
const port=  3001;
app.use(morgan("dev"));
app.use(json());
app.use(cors());

// routes 
app.use('/api/login',loginRoutes)



app.listen(port,()=>{
    console.log('servidor corriendo en el puerto: ', port)
});
