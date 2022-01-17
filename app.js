const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
// const midd = require("../middlewares/midd")
const app = express()
const sequelize = require("./db/conexion")
const vistaUsuario = require("./back/APP/VIEWS/vistaUsuarios")
dotenv.config()
app.use(express.json())
app.use(cors())
// app.use(midd.log)

async function serverStart (){

    try{
    await sequelize.authenticate();
    console.log('Correct SQL conecction');
    app.listen(3001,()=>{
        console.log(`System Start in: http://${process.env.HOST}:${process.env.PORT}`)
    })
}catch(error){
    console.error('SQL error conection')
}}
serverStart ()
vistaUsuario(app)







