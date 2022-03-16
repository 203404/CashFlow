const {Router} = require('express')
const {getAllIndic, getSingleIndic, createIndic}=require('../../controllers/indicadores/indicadores')

const router=Router();

router.get('/indicadores',getAllIndic)

router.get('/indicador/:id',getSingleIndic)

router.post('/indicador', createIndic)


module.exports =router;