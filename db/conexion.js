const Sequelize = require('sequelize');

const sequelize = new Sequelize('red_social_tecla', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;