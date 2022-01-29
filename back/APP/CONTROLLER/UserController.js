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

module.exports.buscarPerfilUsuario = async (id) => {

  return await modeloUsuarios.buscarPerfilUsuario(id)
}

module.exports.tecler = async (tecler) => {

  return await modeloUsuarios.tecler(tecler)
    
}

module.exports.buscarUnTecler = async (tecler) => {

  return await modeloUsuarios.buscarUnTecler(tecler)
    
}