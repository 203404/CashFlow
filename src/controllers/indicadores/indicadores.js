const pool=require('../../db')

const getAllIndic = async (req,res)=>{
    try {
        

        const response = await pool.query('select * from indicadores')
        
        console.log(response.rows)

        res.json(response.rows)
        
        
    } catch (error) {
        console.log(error)
        res.send('error en el servidor')
    }
    
}
const getSingleIndic = async (req,res)=>{
    try {
        
        const id= req.params.id
        const response = await pool.query('select * from indicadores WHERE id =  $1', [id])
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

const createIndic = async (req, res)=>{
    try {
        console.log(req.body)
        const {num_sem, mes, descrip, monto}=req.body
        const response= await pool.query('insert into indicadores (num_sem, mes, descrip, monto) values ($1, $2,$3,$4)',[num_sem, mes, descrip, monto])
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





module.exports={
    getAllIndic,
    getSingleIndic,
    createIndic
}