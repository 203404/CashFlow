const {Router} = require('express')
const pool=require('../../db')

const router=Router();

router.post('/', async (req,res)=>{
    try {
        const { user, password } = req.body
        console.log(req.body)
        const response = await pool.query('select * from login WHERE username=$1 AND PASSWORD=$2 ', [ user, password ])
        console.log(response.rows)
        if(response.rows.length===0){
            res.send('Las credenciales no son correctas')
        }else{
            res.send('login exitoso')
        }
        
        
    } catch (error) {
        console.log(error)
        res.send('todo mal')
    }
    
})

module.exports =router;