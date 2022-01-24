
const sequelize = require('../../../database/conexion')
const { QueryTypes } = require('sequelize');


module.exports.crearUsuario = async (usuario) => {

  
    let validarUsuario = await sequelize.query(
      `SELECT * FROM usuarios WHERE email = '${usuario.email}'`)
    if (!validarUsuario[0][0]) {
      let usuarioNuevo = await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) 
        VALUES ('${usuario.nombres}','${usuario.apellidos}','${usuario.email}','${usuario.contraseña}',
        '${usuario.fecha_nac}')`)
        return usuarioNuevo
    }else{
      return 'Usuario ya existente'
    }
  
    

}

// module.exports.borrarUsuario = async (idUsuario) => {
//   try {
//     let usuarioBorrado = await Usuarios.destroy({ where: { id: `${idUsuario}` } })
//     return usuarioBorrado
//   } catch (error) {
//     console.log("Error al borrar usuario en modelo")
//     throw new Error(error)
//   }
// }