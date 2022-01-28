//Importamos los modulos necesarios
const modeloUsuarios = require('../MODEL/UserModel')


module.exports.addUser = async (usuario) => {

  return (await modeloUsuarios.crearUsuario(usuario))
}

module.exports.loginUsuario = async (usuario) => {

  return (await modeloUsuarios.loginUsuario(usuario))
}

module.exports.buscarUsuario = async (usuario) => {

  return await modeloUsuarios.buscarUsuario(usuario)
}

