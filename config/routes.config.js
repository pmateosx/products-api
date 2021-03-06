const express = require('express')
const router = express.Router()
const upload = require('./storage.config');

// Controllers 
const product = require('../controllers/product.controller')

// Home
router.get('/', (req, res, next) => res.status(200).json({ ok: 'yass!' }))

//Product
router.get('/products', product.listProducts)
router.post('/products', upload.single('image'), product.createProduct)
router.delete('/products/:id', product.deleteProduct)
router.get('/products/:id', product.getProductDetail)
router.patch('/products/:id', product.updateProduct)

module.exports = router