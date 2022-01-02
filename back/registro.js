//const validate = require("../middlewares/midd.user")
const sequelize = require('../db/conexion')

module.exports = (app) => {

    app.post('/registro', async (req, res) => {
        let tecler = req.body
        let result = await addTecler(tecler)
        res.json(result)
    })

    addTecler = async (tecler) => {

        add(tecler)
        return tecler
        console.log(req.body)
    }

    add = async (tecler) => {
        await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) 
    VALUES ('${tecler.nombres}','${tecler.apellidos}','${tecler.email}','${tecler.contraseña}',
    '${tecler.fecha_nac}')`)
    }
}


