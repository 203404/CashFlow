const pool=require('../../db')

const getAllCategorias = async (req,res)=>{
    try {
        

        const response = await pool.query('select * from categorias')
        
        console.log(response.rows)

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
        console.log(req.body)
        const {clasificacion, categoria, sub_categoria}=req.body
        console.log(clasificacion,"\n",categoria,"\n",sub_categoria)
        const response= await pool.query('INSERT INTO categorias (clasificacion, categoria, sub_categoria) VALUES ($1,$2,$3)',[clasificacion,categoria,sub_categoria])

        res.json(response)
    } catch (error) {
        res.json(error)
    }
}


const updateCategoria=async (req,res)=>{
    try {
        const {id, clasificacion, categoria, sub_categoria}=req.body
        const response= await pool.query(' UPDATE categorias SET clasificacion = $1, categoria = $2, sub_categoria = $3 WHERE id=$4;',[clasificacion,categoria,sub_categoria,id])


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