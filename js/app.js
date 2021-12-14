const express = require("express")
const midd = require("./middlewares/midd")
const db = require("../db/db")
const app = express()

app.use(express.json())
app.use(midd.log)


app.listen(3001, () => { 
    console.log("Servidor inicializado correctamente en http://localhost:3001")
});

app.get('/',(req,res) => {
    res.send(db.Usuarios)
})

app.post('/usuario', (req,res) =>{
    db.nuevoUsuario(req.body.nombre,req.body.pass)
    res.send("OK")
})