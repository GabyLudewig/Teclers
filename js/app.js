const express = require("express")
const dotenv = require("dotenv")
const userRoutes = require("../routes/user")
const cors = require("cors")
const midd = require("./middlewares/midd")
const app = express()
const sequelize = require("../db/conexion")
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(midd.log)


app.listen(process.env.PORT, () => { 
    console.log("Servidor inicializado correctamente en http://" + process.env.HOST + process.env.PORT)
});

userRoutes(app)







