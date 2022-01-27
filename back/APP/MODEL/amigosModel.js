const sequelize = require("../../../database/conexion");
const { QueryTypes } = require('sequelize');

// module.exports.listAmigo = async (tecler) => {  

//     try{
//     let query= `SELECT * FROM amigos WHERE nombres = '%${tecler}%' OR apellidos = '%${tecler}%'`
//     // // if (words[1]){
//     // //     for (let i=1; i<words.length; i++){
//     // //         query+= `AND nombres LIKE '%${words[i]}%' OR apellidos LIKE '%${words[i]}'` 
//     // //     }
//     // }
//    console.log(tecler)
//     return query
// }catch (error) {
//     console.log("Error en modelo")
//     throw new Error (error)
// }
// }
  

module.exports.list = async (amigo) => {
    
    let result = await sequelize.query('SELECT * FROM amigos')
   return result
}

module.exports.validarAmigo = async (tecler) => {
    try{  
      let validarAmigo = await sequelize.query(
        `SELECT * FROM amigos WHERE nombres = '${tecler.tecler}' `) 
        console.log(validarAmigo[0][0])
      if (validarAmigo[0][0]) {
          return {result: 'ok'}
    }else{
      return {result: 'error'}
    }
      }catch (error) {
        console.log("Error en modelo")
        throw new Error (error)
    }
  }

  module.exports.listAmigo = async (tecler) => {
        
      let res = await sequelize.query(
        `SELECT * FROM amigos WHERE nombres = '${tecler.tecler}' `) 
         return {res}
  }