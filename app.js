const express = require('express')
const router = express.Router()

// routes
const setRouter = require('./routes/setRouter')
const cardRouter = require('./routes/cardRouter')
const featuredRouter = require('./routes/featuredRouter')

const pokemon = require('pokemontcgsdk')
pokemon.configure({apiKey: process.env.POKEMON_API_KEY})

router.use('/sets', setRouter)
router.use('/cards', cardRouter)
router.use('/featured-card', featuredRouter)

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = router