const express = require("express");
const { json } = require("express");
const morgan = require("morgan");
const cors =require('cors')

//Routes imports
const loginRoutes=require('./routes/login/login')
const categoriasRoutes=require('./routes/categorias/categorias')
const flujoEfectivoRoutes=require('./routes/flujoefectivo/flujoefectivo');


// server
const app = express();

// middlewares
const port=  3001;
app.use(morgan("dev"));
app.use(json());
app.use(cors());

// routes 
const rootUrl ='/api/v1';
app.use(rootUrl,loginRoutes)
app.use(rootUrl,categoriasRoutes)
app.use(rootUrl,flujoEfectivoRoutes)



app.listen(port,()=>{
    console.log('servidor corriendo en el puerto: ', port)
});
