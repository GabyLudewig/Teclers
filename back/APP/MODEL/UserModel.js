//Importamos los modulos requeridos
const sequelize = require('../../../database/conexion')
const { QueryTypes } = require('sequelize');

//Exportamos los modulos

module.exports.buscarUsuario = async (usuario) => {

  let res = await sequelize.query(
    `SELECT * FROM usuarios WHERE email = '${usuario.usuario}' `)
  return { res }
}

module.exports.crearUsuario = async (usuario) => {

  try {
    let validarUsuario = await sequelize.query(
      `SELECT * FROM usuarios WHERE email = '${usuario.email}'`)
    if (!validarUsuario[0][0]) {
      let usuarioNuevo = await sequelize.query(`INSERT INTO usuarios (nombres, apellidos, email, contraseña, fecha_nac) 
        VALUES ('${usuario.nombres}','${usuario.apellidos}','${usuario.email}','${usuario.contraseña}',
        '${usuario.fecha_nac}')`)
      return { result: 'ok' }

    } else {
      return { result: 'error' }
    }
  } catch (error) {
    console.log("Error en modelo")
    throw new Error(error)
  }
}

module.exports.loginUsuario = async (usuario) => {

  try {
    let validarUsuario = await sequelize.query(
      `SELECT * FROM usuarios WHERE email = '${usuario.email}' AND contraseña = '${usuario.contraseña}'`)
    if (validarUsuario[0][0]) {
      return { result: 'ok' }
    } else {
      return { result: 'error' }
    }
  } catch (error) {
    console.log("Error en modelo")
    throw new Error(error)
  }
}


module.exports.tecler = async () => {

  let result = await sequelize.query('SELECT * FROM usuarios')
  return result
}

module.exports.buscarUnTecler = async (tecler) => {


  const words = tecler.tecler.split (" ")
  let res = []

  
  for(let i = 0; i<words.length; i++ ){

      let word = await sequelize.query(`SELECT * FROM usuarios WHERE nombres LIKE '%${words[i]}%' OR apellidos LIKE '%${words[i]}%'`)
      res.push(word)
    }

    
  return {res,words,tecler }
}

module.exports.buscarPerfilUsuario = async (id) => {

  let res = await sequelize.query(
    `SELECT * FROM usuarios WHERE id = '${id.id}' `)
  return { res }
}