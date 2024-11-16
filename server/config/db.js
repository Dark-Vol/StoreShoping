const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'storeshoping', 
    'root', 
    '', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;