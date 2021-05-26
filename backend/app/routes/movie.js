var express = require('express');
var router = express.Router();
const db = require("../models");
const movie = db.movie


router.get('/:id',async function(req, res){
    const genre = req.params.id   
    console.log(genre)
    const movies = await movie.findAll({where: {genre: genre}, order: [['Rating', 'DESC']]})
    res.send(movies)
})


router.get('/id/:id', async function(req, res){
  const m = req.params.id
  const mov = await movie.findByPk(m);
  res.send(mov)
})


router.put('/:id', function(req, res){

    const id = req.params.id;
    console.log(req.body)
    movie.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });

})

//api to insert the values from spreadsheet in format(name, year, rating and genre)
router.post('/', function(req,res){
    let XLSX = require('xlsx')
    let workbook = XLSX.readFile('C:\\Users\\achitnen\\Pictures\\city online\\backend\\app\\routes\\Movies.xlsx');
    let sheet_name_list = workbook.SheetNames;
    let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    let y = []
    for (let i=0; i<xlData.length; i++){
        let m = xlData[i]
        movie.create(m)
        .then(data => {
        y.push(data)
        })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
    
    }
    res.send(y)
})



module.exports=router