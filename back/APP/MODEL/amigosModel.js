const sequelize = require("../../../database/conexion");
const { QueryTypes } = require('sequelize');

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

module.exports.list = async (amigo) => {
    
    let result = await sequelize.query('SELECT * FROM amigos')
   return result
}


