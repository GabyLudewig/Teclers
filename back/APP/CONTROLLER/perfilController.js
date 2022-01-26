const modeloPerfil = require('../MODEL/perfilModel')

module.exports.findPerfil = async (perfil) => {
    try {
        let resultado = await modeloPerfil.encontrarPerfil(perfil)
        return resultado
    } catch (error) {
        console.log("Erroe al encontar usuario en controlador", error)
        throw new Error (error)
    }
}