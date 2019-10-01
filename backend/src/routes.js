const express = require('express')

const routes = express.Router()

// GET, POST, PUT, DELETE

// req.query.propriedade  => Acessar Query Params => Para Filtros
// req.params.propriedade => Acessar Route Params => Para Edição, Exclusão
// req.body.propriedade   => Acessar Corpo da Requisição => Para Criação, Edição  

routes.get('/', (req, res) => {
   return res.json({ message: "Hello World!!!"})
})

module.exports = routes