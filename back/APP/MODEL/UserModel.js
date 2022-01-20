//Importamos los modulos requeridos
const sequelize = require('../../../database/conexion')
const { QueryTypes } = require('sequelize');

//Exportamos los modulos

module.exports.encontrarUsuario = async (usuario)=> {
  try {
      let usuarioEncontrado = await sequelize.query(
        `SELECT * FROM usuarios WHERE email = '${usuario.email}' AND contraseña = '${usuario.contraseña}'`,
        //{
         // replacements: { contraseña: usuario.contraseña, email: usuario.email},
          //type: QueryTypes.SELECT
        //}
      );
      console.log('usuarioEncontrado', usuarioEncontrado)
      return usuarioEncontrado
  }catch (error){
      console.log("Error al encontrar usuario en modelo")
      throw new Error (error)
  }
}

module.exports.crearUsuario = async (usuario)=> {
  try {
      let usuarioNuevo = await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) 
      VALUES ('${usuario.nombres}','${usuario.apellidos}','${usuario.email}','${usuario.contraseña}',
      '${usuario.fecha_nac}')`)
      console.log(usuarioNuevo)
      return usuarioNuevo
  }catch (error){
      console.log("Error al crear usuario en modelo")
      throw new Error (error)
  }
}

module.exports.borrarUsuario = async (idUsuario)=> {
  try {
      let usuarioBorrado = await Usuarios.destroy({where: {id: `${idUsuario}`}})
      return usuarioBorrado
  }catch (error){
      console.log("Error al borrar usuario en modelo")
      throw new Error (error)
  }
}