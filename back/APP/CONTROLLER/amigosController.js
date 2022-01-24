const modeloAmigos = require('../MODEL/amigosModel');

module.exports.findFriend = async (amigo) => {
    try {
        let resultado = await modeloAmigos.encontrarAmigo(amigo)
        return resultado
    } catch (error) {
        console.log("Error al encontar amigo en el cotrolador", error)
        throw new Error (error)
        
    }
}