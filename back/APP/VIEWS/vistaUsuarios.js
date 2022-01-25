//Importamos los modulos que vamos a utilizar
const midd = require('../../../middlewares/midd.usuarios')
const ControladorUsuarios = require('../CONTROLLER/UserController')
const cors = require('cors')

//Exportar los modulos para ser usados.
module.exports = async (app)=>{
  
  app.post('/usuario', midd.validarDatosDeUsuario, async (req, res) => {
    const usuario = req.body
    try {
      const usuarioNuevo = await ControladorUsuarios.addUser(usuario)
      res.status(200).json({usuarioNuevo})
    } catch (err) {
      res.status(400).json({ message: 'Hubo un error creando el usuario en la vista', error: err})
    }
  })

    app.post('/login', async (req, res) => {
      const usuario = req.body
      try {
        const usuarioExistente = await ControladorUsuarios.loginUsuario(usuario)
          res.status(200).json({usuarioExistente})
      } catch (err) {
        res.status(400).json({ message: 'Usuario no registrado', error: err})
      }
    })

}