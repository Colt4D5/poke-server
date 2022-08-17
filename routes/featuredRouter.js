const express = require('express')
const router = express.Router()

// controllers
const cardControllers = require('../controllers/cardControllers')

router
  .route('/')
    .get(cardControllers.getFeaturedCard)

module.exports = router