const pokemon = require('pokemontcgsdk')

exports.getAllSets = (req, res) => {
  pokemon.set.all()
    .then((sets) => {
        res.status(200).json( sets )
    })
  }
  
exports.getSetById = (req, res) => {
  const { id } = req.params
  pokemon.set.find(id)
    .then((set) => {
        res.status(200).json( set )
    })
}

exports.getCardsInSet = (req, res) => {
  const { id } = req.params
  const { pageSize, page } = req.body
  res.json({ id, pageSize, page})
  // pokemon.card.where({ q: `set:${id}`, pageSize: pageSize, page: page })
  //   .then(result => {
  //       console.log(result)
  //   })
}