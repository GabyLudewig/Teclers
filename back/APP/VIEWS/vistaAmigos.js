const controladorAmigos = require('../CONTROLLER/amigosController')

module.exports = async (app) => {

    app.get('/buscar', async (req, res) => {
        const amigo = req.body
        try {
            const buscaAmigo = await controladorAmigos.findFriend(amigo)
            res.status(200).json({message: 'Amigo encontrado', amigo: buscaAmigo});
        } catch (error) {
            res.status(400)({message: 'Hubo un erro buscando al amigo en la vista'})
            
        }
    })

    app.get('/amigos', async (req, res) => {
        const amigo = req.body     
        try{ 
            const lista = await controladorAmigos.listarAmigos(amigo)
            res.status(200).json({message: 'lista', amigo: lista});
                    }catch (error){
                res.status(400).json({message: 'error en vista'})
            }
    })
}

