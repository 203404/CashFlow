const {Router} = require('express')
const {getAllCategorias, getSingleCategoria,createCategoria, updateCategoria}=require('../../controllers/categorias/categorias')

const router=Router();

router.get('/categorias',getAllCategorias)

router.get('/categoria/:id',getSingleCategoria)

router.post('/categorias',createCategoria)

router.put('/categoria',updateCategoria)

module.exports =router;