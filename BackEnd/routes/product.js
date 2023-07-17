const express = require('express')
const routers = express.Router()
const productController= require('../controllers/product')


routers.get('', productController.getProducts)
routers.delete('/:id', productController.deleteProduct)
routers.post('/', productController.createProduct)




module.exports = routers