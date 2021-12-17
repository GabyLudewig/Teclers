const express = require("express")
const dotenv = require("dotenv")
const userRoutes = require("../routes/user")
const cors = require("cors")
const midd = require("./middlewares/midd")
const app = express()
const db=require("../db/db")
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(midd.log)


app.listen(process.env.PORT, () => { 
    console.log("Servidor inicializado correctamente en http://" + process.env.HOST + process.env.PORT)
});

userRoutes(app)





app.get('/',(req,res) => {
    res.send(db.Usuarios)
})

app.post('/usuario', (req,res) =>{
    db.nuevoUsuario(req.body.nombre,req.body.pass)
    res.send("OK")
})