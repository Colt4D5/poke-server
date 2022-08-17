const express = require('express')
const router = express.Router()

// controllers
const setControllers = require('../controllers/setControllers')

router
  .route('/')
    .get(setControllers.getAllSets)

router
  .route('/:id')
    .get(setControllers.getSetById)

router
  .route('/:id/cards')
    .get(setControllers.getCardsInSet)

module.exports = router