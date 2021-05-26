var express = require('express');
var router = express.Router();
const db = require("../models");

router.get('/', async function(req, res){
    const genre = db.genre
    const genres = await genre.findAll()
    res.send(genres)
})

router.post('/', function(req , res){
    const name = req.body.name
    const genre = db.genre
    
    
    const Genre = {
        Name: name
    };

  
  genre.create(Genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
})

module.exports=router