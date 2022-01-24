
const modeloUsuarios = require('../MODEL/UserModel')


module.exports.addUser = async (usuario)=> {
 
  await modeloUsuarios.crearUsuario(usuario)
  return 'Usuario agregado controller'
}