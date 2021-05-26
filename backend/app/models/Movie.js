


module.exports = (sequelize, Sequelize) => {
    const movies = sequelize.define("movies", {
    
    Name: {
    
    type: Sequelize.STRING
    
    },
    
    ImageUrl: {
    
    type: Sequelize.TEXT
    
    },

    ReleaseYear: {
        type: Sequelize.DECIMAL(4,0)
    },

    Rating: {
        type: Sequelize.DECIMAL(2,1)
    },

    genre: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres', 
          key: 'id'
        }
      }

    });

    return movies;
    
    };