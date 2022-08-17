const pokemon = require('pokemontcgsdk')

exports.getFeaturedCard = (req, res) => {
  pokemon.card.find('swsh9-158')
    .then(card => {
      res.status(200).json({ card })
    })
}

exports.getAllCards = (req, res) => {
  pokemon.card.all({ q: 'name:raichu' })
    .then((cards) => {
        res.status(200).json({
          status: 'success',
          cards
        })
    })
  }
  
exports.getCardById = (req, res) => {
  const { id } = req.params
  pokemon.card.find(id)
    .then((card) => {
        res.status(200).json({
          status: 'success',
          card
        })
    })
}

exports.getRandomCard = async (req, res) => {
  const allSets = await pokemon.set.all()
  const randomSet = allSets[Math.floor(Math.random() * allSets.length)].id
  const cardsInSet = await pokemon.card.where({ q: `set.id:${randomSet}` })
  const randomIndex = Math.floor(Math.random() * cardsInSet.data.length)
  const randomCard = cardsInSet.data[randomIndex]
  res.json({ randomCard })
}