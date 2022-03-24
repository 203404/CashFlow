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
        const response =await pool.query('insert into login (username,password,rol) values ($1,$2,$3)', [ user, password , rol])
        console.log(response)
        if(response.rowCount===0){
            res.status(203).json({
                status:203,
                message:'No se pudo generar el registro '
            })
        }else{
            res.json({
                message: 'Registro exitoso',
                tipo: response.rows[0]
            })
        }
    } catch (error) {
        
    }
}


module.exports={
    checkCredentials,
    createLogin
}