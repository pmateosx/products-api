const mongoose = require('mongoose')
const Product = require('../models/Product.model')

module.exports.listProducts = (req, res, next) => {
    Product.find()
        .sort({ createdAt: 'desc' })
        .then((products) => res.status(200).json(products))
        .catch((error) => next(error));
}

module.exports.createProduct = (req, res, next) => {
    const product = { name, description, price } = req.body

    if (req.file) {
        req.body.images = req.file.path
    }

    Product.create(product)
        .then(product => res.status(200).json(product))
        .catch(next)
}