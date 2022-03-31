const pool=require('../../db')

const getAllCategorias = async (req,res)=>{
    try {
        

        const response = await pool.query('select * from categorias')
        

        res.json(response.rows)
        
        
    } catch (error) {
        console.log(error)
        res.send('error en el servidor')
    }
    
}

const getSingleCategoria = async (req,res)=>{
    try {
        
        const id= req.params.id
        const response = await pool.query('select * from categorias WHERE id =  $1', [id])
        if(response.rows.length===0){
            res.status(403).json({
                "messages":"Dato no encontrado"
            })
        }else{
            res.status(200).json(response.rows[0])
        }
        
    } catch (error) {
        console.log(error)
        res.send('error en el servidor')
    }
    
}


const createCategoria = async (req, res)=>{
    try {
        
        const {categoria, sub_categoria}=req.body
        console.log(categoria ,"+",sub_categoria);
        const response= await pool.query('INSERT INTO categorias (categoria, sub_categoria) VALUES ($1,$2)',[categoria,sub_categoria])
        if(response.rowCount===0){
            res.status(203).json({
                "message":"No se pudo agregar ningun dato"
            })
        }else{
            res.status(201).json({
                "message":"Dato creado correctamente"
            })
        }

        
    } catch (error) {
        res.json(error)
    }
}


const updateCategoria=async (req,res)=>{
    try {
        const {id,categoria, sub_categoria}=req.body
        const response= await pool.query(' UPDATE categorias SET categoria = $1, sub_categoria = $2 WHERE id=$3;',[categoria,sub_categoria,id])


        if(response.rowCount===0){
            res.status(403).json({
                "Message":'NO se encontró categoria con id='+id,
                
            })
        }else{
            res.status(200).json({
                "Message":`Se actualizó correctamente la categoria con el id=`+id 
            })
    
        }
        
    } catch (error) {
        res.json(error)
    }
}



module.exports={
    getAllCategorias,
    getSingleCategoria,
    createCategoria,
    updateCategoria
}