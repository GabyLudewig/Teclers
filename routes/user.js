const validate = require("../js/middlewares/midd.user")
const sequelize = require('../db/conexion');

module.exports = (app) => {
    app.get('/usuario', (req, res) => {
        res.send("usuario")
    })
    app.post('/login', validate.chkLogin, (req, res) => {
        let usuario = req.body
        res.send(usuario)
    })


    listUsuarios = async () => {

        let result = await list()
        return result
    }

    addUsuario = async (usuario) => {

        await add(usuario)
        return 'usuario Added'
    }

    list = async ()=>{
        let result = await sequelize.query('SELECT * FROM usuarios')
        return result
    }
    
    add = async(usuario)=>{
        await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) VALUES ('${usuario.nombres}','${usuario.apellidos}','${usuario.email}','${usuario.constraseña}','${usuario.fecha_nac}')`)
    }

   
        app.get('/usuario', async (req,res) =>{
            let result = await listUsuarios ()
            res.json(result)
        })
    
        app.post('/usuario', async (req,res) =>{
            let usuario= req.body
            let result = await addUsuario(usuario)
            res.json(result)
        })
    }
    

