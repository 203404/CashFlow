const pool=require('../../db')


const checkCredentials =async (req,res)=>{
    try {
        const { user, password } = req.body
        const response = await pool.query('select * from login WHERE username=$1 AND PASSWORD=$2 ', [ user, password ])
        
        if(response.rows.length===0){
            res.send('Las credenciales no son correctas')
        }else{
            res.send('login exitoso')
        }
        
        
    } catch (error) {
        console.log(error)
        res.send('todo mal')
    }
    
}


module.exports={
    checkCredentials
}