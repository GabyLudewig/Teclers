//1-Invocamos express
const express = require("express");
const cors = require("cors");
const app = express()
const sequelize = require("./database/conexion");
const vistaUsuario = require("./back/APP/VIEWS/vistaUsuarios");
const vistaAmigos = require('./back/APP/VIEWS/vistaAmigos');
//2-Seteamos urlencoded para capturar los datos del formulario
app.use(express.json());
app.use(cors());

//3-Invocamos a dotenv
const dotenv = require("dotenv");
dotenv.config();

//4- el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'))



//7-Var. de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}))





async function serverStart (){

    try{
    await sequelize.authenticate();
    console.log('Correct SQL conecction');
    app.listen(3001,(req, res)=>{
       console.log(`System Start in: http://${process.env.HOST}:${process.env.PORT}`)
    })
}catch(error) {
    console.log(error)
    console.error('SQL error conection')
}}
serverStart ();
vistaUsuario(app);
vistaAmigos(app);