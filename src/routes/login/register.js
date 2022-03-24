const {Router} = require('express')
const {createLogin} =require('../../controllers/login/login')

const router=Router();

router.post('/register',createLogin)

module.exports=router;