const express = require('express')
const router = express.Router()

// controllers
const cardControllers = require('../controllers/cardControllers')

router
  .route('/')
    .get(cardControllers.getAllCards)

    router
      .route('/random')
        .get(cardControllers.getRandomCard)

router
  .route('/:id')
    .get(cardControllers.getCardById)


module.exports = router