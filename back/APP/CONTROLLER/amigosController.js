const modeloAmigos = require('../MODEL/amigosModel');

module.exports.buscar = async (tecler) => {
    try {
        let resultado = await modeloAmigos.listAmigo(tecler)
        return resultado
    } catch (error) {
        console.log("Error al encontar amigo en el cotrolador", error)
        throw new Error (error)
        
    }
}

module.exports.listarAmigos = async (amigo) => {
    try{
    let resultado = await modeloAmigos.list()
        return resultado
    }catch (error){
        console.log("error en controlador", error)
        throw new Error (error)
    }
    
}

module.exports.validarAmigo = async (tecler)=> {
 
    return (await modeloAmigos.validarAmigo(tecler))
  }

  