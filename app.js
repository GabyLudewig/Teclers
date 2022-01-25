const express = require("express");
const cors = require("cors");
const app = express()
const sequelize = require("./database/conexion");
const vistaUsuario = require("./back/APP/VIEWS/vistaUsuario");
const vistaAmigos = require('./back/APP/VIEWS/vistaAmigos');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();


async function serverStart() {

    try {
        await sequelize.authenticate();
        console.log('Correct SQL conecction');
        app.listen(process.env.PORT, (req, res) => {
            console.log(`System Start in: http://${process.env.HOST}:${process.env.PORT}`)
        })
    } catch (error) {
        console.error('SQL error conection')
    }
}

serverStart()
vistaUsuario(app);
vistaAmigos(app);








