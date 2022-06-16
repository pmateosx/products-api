const mongoose = require('mongoose')
const Product = require('../models/Product.model')

module.exports.listProducts = (req, res, next) => {
    Product.find()
        .sort({ createdAt: 'desc' })
        .then((products) => res.status(200).json(products))
        .catch((error) => next(error));
}

module.exports.createProduct = (req, res, next) => {
    const newProduct = req.body

    if (req.file) {
        newProduct.image = req.file.path
    }

    Product.create(newProduct)
        .then(product => res.status(200).json(product))
        .catch(next)
}

module.exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.status(202).json(product))
        .catch(next)
}

module.exports.getProductDetail = (req, res, next) => {
    Product.findById(req.params.id)
        .then(productDetails => res.status(200).json(productDetails))
        .catch(next)
}

module.exports.updateProduct = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(productUpdated => res.status(200).json(productUpdated))
        .catch(next)
}