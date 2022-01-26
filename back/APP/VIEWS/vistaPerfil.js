const controladorPerfil = require('../CONTROLLER/perfilController');

module.exports = async (app) => {
    app.get('/perfil/:id', async (req, res) => {
        const perfilId = req.params.id
        try {
            const buscaPerfil = await controladorPerfil.findPerfil(perfilId)
            res.status(200).json({message: 'Perfil encontrado', perfil: buscaPerfil});
        } catch (error) {
            res.status(400)({message: 'Hubo un erro buscando el perfil en la vista'})
            
        }
    })
}
