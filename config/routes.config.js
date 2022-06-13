const express = require('express')
const router = express.Router()

// Home
router.get('/', (req, res, next) => res.status(200).json({ ok: 'yass!' }))

module.exports = router