
module.exports = (sequelize, Sequelize) => {

    const genres = sequelize.define("genres", {
    
    Name: {
    
    type: Sequelize.STRING
    
    },
    
    ImageUrl: {
    
    type: Sequelize.TEXT
    
    }
    
    });

    return genres;
    
    };