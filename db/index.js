var express = require('express');
var app = express();
const sequelize= require('./conexion');

async function findAllRows(){

    sequelize.query("select * from usuarios",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log('Tabla Usuarios')
        console.log(personas);
      })

      sequelize.query("select * from cursos",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log('Tabla cursos ')
        console.log(personas);
      })

      sequelize.query("select * from amigos",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log('Tabla amigos ')
        console.log(personas);
      })

      sequelize.query("select * from publicaciones",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log('Tabla Publicaciones ')
        console.log(personas);
      })

      sequelize.query("select * from perfil",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log('Tabla Perfil')
        console.log(personas);
      })





} 


findAllRows();

app.listen(3001,function(){
    console.log('sistema funcionando en el puerto 3000!');
});