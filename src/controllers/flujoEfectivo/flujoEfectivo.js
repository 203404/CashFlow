const pool=require('../../db')

const getAllFlujos = async (req,res)=>{
    try {
        

        const response = await pool.query('select * from flujo_efectivo')
        
        

        res.json(response.rows)
        
        
    } catch (error) {
        console.log(error)
        res.send('error en el servidor')
    }
    
}
const getSingleflujo = async (req,res)=>{
    try {
        
        const id= req.params.id
        const response = await pool.query('select * from flujo_efectivo WHERE id =  $1', [id])
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

const createFlujo = async (req, res)=>{
    try {
        console.log(req.body)
        const {categoria, sub_categoria,id_categoria, es_ingreso, descripcion,cantidad}=req.body
        console.log(categoria, sub_categoria,id_categoria, es_ingreso, descripcion,cantidad)
        console.log(getDate());
        const response= await pool.query('insert into flujo_efectivo (categoria, sub_categoria,id_categoria,es_ingreso,descripcion, cantidad, fecha) values ($1, $2,$3,$4,$5,$6,$7)',[categoria, sub_categoria,id_categoria, es_ingreso, descripcion,cantidad,getDate()])
        if(response.rowCount===0){
            res.status(400).json({
                'error_Message':"No se pudo crear el flujo de efectivo"
            })
        }else{
            res.status(201).json({
                "message":"Flujo de efectivo agregado correctamente"
            })
        }
        
    } catch (error) {
        res.json(error)
    }
}

const updateFlujo=async (req,res)=>{
    try {
        const {id,id_categoria, es_ingreso, descripcion,cantidad}=req.body
        console.log(req.body)
        const response= await pool.query(' UPDATE flujo_efectivo SET id_categoria = $1, es_ingreso = $2, descripcion = $3, cantidad =$4 WHERE id=$5;',[id_categoria, es_ingreso, descripcion,cantidad,id])
        console.log(response)

        if(response.rowCount===0){
            res.status(403).json({
                "Message":'NO se encontró categoria con id='+id,
                
            })
        }else{
            res.status(200).json({
                "Message":'Se actualizó correctamente la categoria con el id='+id 
            })
    
        }
        
    } catch (error) {
        res.json(error)
    }
}

const getDate =()=>{
    return (new Date().toLocaleDateString())

}


module.exports={
    getDate,
    getAllFlujos,
    getSingleflujo,
    createFlujo,
    updateFlujo
}