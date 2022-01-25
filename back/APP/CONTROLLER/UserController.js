//Importamos los modulos necesarios
const jwt = require('jsonwebtoken')
const modeloUsuarios = require('../MODEL/UserModel')

module.exports.generaToken = async (data)=> {
  const resultado = jwt.sign({
      data} , process.env.SECRET_KEY 
  ) //Tiempo maximo 15 minutos de validez
  return resultado
}

module.exports.verificarUsuario = async (token)=> {
  const resultado = jwt.verify(token, process.env.SECRET_KEY)

  if(resultado){
      return resultado
  }else {
      throw new Error ('Token no valido!')
  }
}

module.exports.findUser = async (usuario)=> {
  try {
      let result = await modeloUsuarios.encontrarUsuario(usuario)
      return result
  }catch (error) {
      console.log("Error al encontrar usuario en controlador", error)
      throw new Error (error)
  }
}



module.exports.addUser = async (usuario)=> {

  return (await modeloUsuarios.crearUsuario(usuario))  
}

module.exports.loginUsuario = async (usuario)=> {
 
  return (await modeloUsuarios.loginUsuario(usuario))
}