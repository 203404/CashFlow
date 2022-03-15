const {Router} = require('express')
const {checkCredentials} =require('../../controllers/login/login')

const router=Router();


// Method to login (cheack credentials )
router.post('/login', checkCredentials)

module.exports =router;