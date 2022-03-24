const pool=require('../../db')


const checkCredentials =async (req,res)=>{
    try {
        const { user, password } = req.body
        console.log(req.body)
        const response = await pool.query('select * from login WHERE username=$1 AND PASSWORD=$2 ', [ user, password ])

        if(response.rows.length===0){
            res.status(203).json({
                status:203,
                message:'Credenciales incorrectas'
            })
        }else{
            res.json({
                message: 'login exitoso',
                tipo: response.rows[0].rol
            })
        }
        
        
    } catch (error) {
        console.log(error)
        res.send('todo mal')
    }
    
}

const createLogin=async(req,res)=>{
    try {
        const { user, password, rol } = req.body
        if(!user || !password || !rol){
            res.status(400).json({
                message:"Recibiendo malos datos para almacenar"
            })
        }
        const response =await pool.query('insert into login (username,password,rol) values ($1,$2,$3)', [ user, password , rol])
        console.log(response)
        if(response.rowCount===0){
            res.status(203).json({
                status:203,
                message:'No se pudo generar el registro '
            })
        }else{
            res.status(201).json({
                message: 'Registro exitoso',
            })
        }
    } catch (error) {
        
    }
}


module.exports={
    checkCredentials,
    createLogin
}