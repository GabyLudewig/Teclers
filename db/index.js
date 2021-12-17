var express = require('express');
var app = express();
const sequelize= require('./conexion');

async function findAllRows(){

    sequelize.query("select * from usuarios",{type:sequelize.QueryTypes.SELECT})
    .then(function(personas){
        console.log(personas);
      })

}

findAllRows();

app.listen(3001,function(){
    console.log('sistema funcionando en el puerto 3000!');
});