module.exports = {

    HOST: "localhost",
    
    USER: "sa",
    
    PASSWORD: "1234",
    
    DB: "city_online",
    
    dialect: "mysql",
    
    pool: {
    
    max: 5,
    
    min: 0,
    
    acquire: 30000,
    
    idle: 10000
    
    }
    
    };