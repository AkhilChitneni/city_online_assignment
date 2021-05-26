const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes for movies
const movies = require('./app/routes/movie')
app.use('/api/movie',movies)


//routes for genres
const genres = require('./app/routes/genre')
app.use('/api/genre',genres)



//database connection
const db = require("./app/models");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});


// host application with variable port numberf
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});