const {Router} = require('express')
const {getAllFlujos,getSingleflujo,createFlujo,updateFlujo}=require('../../controllers/flujoefectivo/flujoefectivo')

const router=Router();

router.get('/flujoEfectivos',getAllFlujos)

router.get('/flujoEfectivo/:id',getSingleflujo)

router.post('/flujoEfectivo',createFlujo)

router.put('/flujoEfectivo',updateFlujo)

module.exports =router;