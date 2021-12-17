const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/red_social_tecla'; 
const sequelize = new Sequelize (path, {operatorsAliases: false});

sequelize.authenticate().then(()=>{
    console.log('Conectado');
}).catch(err =>{
    console.error('Error de coneccion:', err);
}).finally(()=>{
    sequelize.close();

 });

module.exports = sequelize;