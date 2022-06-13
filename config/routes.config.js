const express = require('express')
const router = express.Router()

// Controllers 
const product = require('../controllers/product.controller')

// Home
router.get('/', (req, res, next) => res.status(200).json({ ok: 'yass!' }))

//Product
router.get('/products', product.listProducts)
router.post('/products', product.createProduct)
router.delete('/products/:id', product.deleteProduct)
router.get('/products/:id', product.getProductDetail)
/* router.put('/products', product.editProduct) */

module.exports = router