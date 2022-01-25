
const modeloUsuarios = require('../MODEL/UsuarioModel')

module.exports.addUser = async (usuario)=> {
 
  return (await modeloUsuarios.crearUsuario(usuario))
  
}

module.exports.loginUsuario = async (usuario)=> {
 
  let res = await modeloUsuarios.loginUsuario(usuario)
  if (res.loginUsuario) {
  return res    
  } 
  return 'Usuario o contraseña incorrectas'
}
