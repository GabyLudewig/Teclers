const { QueryTypes } = require('sequelize');
const sequelize = require('../../../database/conexion');

module.exports.encontrarPerfil = async (id)=> {
    try {
        let perfilEncontrado = await sequelize.query(
          `SELECT * FROM usuarios WHERE id = '${id}'`,
          //{
           // replacements: { contraseña: usuario.contraseña, email: usuario.email},
            //type: QueryTypes.SELECT
          //}
        );
        console.log('perfilEncontrado', perfilEncontrado)
        return perfilEncontrado
    }catch (error){
        console.log("Error al encontrar el perfil en el modelo")
        throw new Error (error)
    }
  }