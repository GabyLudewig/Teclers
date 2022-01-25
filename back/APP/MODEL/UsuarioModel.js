
const sequelize = require('../../../database/conexion')
const { QueryTypes } = require('sequelize');


module.exports.crearUsuario = async (usuario) => {

  try{  
    let validarUsuario = await sequelize.query(
      `SELECT * FROM usuarios WHERE email = '${usuario.email}'`)
    if (!validarUsuario[0][0]) {
      let usuarioNuevo = await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) 
        VALUES ('${usuario.nombres}','${usuario.apellidos}','${usuario.email}','${usuario.contraseña}',
        '${usuario.fecha_nac}')`)
        return {result: 'ok'}
        
  }else{
    return {result: 'error'}
  }
    }catch (error) {
      console.log("Error en modelo")
      throw new Error (error)
  }
}

module.exports.loginUsuario = async (usuario) => {

    
  let res = await sequelize.query(
    `SELECT * FROM usuarios WHERE email LIKE '${usuario.email}' AND constraseña = '${usuario.contraseña}'`)
    let logRes = await logRes[0][0] ? logRes[0][0] : false        
  return res
  
}

module.exports.borrarUsuario = async (idUsuario) => {
  try {
    let usuarioBorrado = await Usuarios.destroy({ where: { id: `${idUsuario}` } })
    return usuarioBorrado
  } catch (error) {
    console.log("Error al borrar usuario en modelo")
    throw new Error(error)
  }
}

module.exports.encontrarAmigo = async (amigo) => {
  try {
      let amigoEncontrado = await sequelize.query(
          `SELECT * FROM amigos WHERE nombres = '${amigo.nombres}' AND apellidos = '${amigo.apellidos}'`,
      )
      console.log('amigoEncontrado', amigoEncontrado)
      return amigoEncontrado
  } catch (error) {
      console.log("Error al encontar al amigo en el modelo")
      throw new Error (error)
  }
}