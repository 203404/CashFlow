const express = require("express");
const { json } = require("express");
const morgan = require("morgan");
const cors =require('cors')

//Routes imports
const loginRoutes=require('./routes/login/login')
const categoriasRoutes=require('./routes/categorias/categorias')


// server
const app = express();

// middlewares
const port=  3001;
app.use(morgan("dev"));
app.use(json());
app.use(cors());

// routes 
app.use('/api/v1',loginRoutes)
app.use('/api/v1',categoriasRoutes)



app.listen(port,()=>{
    console.log('servidor corriendo en el puerto: ', port)
});
