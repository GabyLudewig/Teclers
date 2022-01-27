const controladorAmigos = require('../CONTROLLER/amigosController')

module.exports = async (app) => {

    app.get('/amigos', async (req, res) => {
        const amigo = req.body
        try {
            const lista = await controladorAmigos.listarAmigos(amigo)
            res.status(200).json({ message: 'lista', amigo: lista });
        } catch (error) {
            res.status(400).json({ message: 'error en vista' })
        }
    })

app.post('/buscar', async (req, res) => {
    const tecler = req.body
    try {
        const busca = await controladorAmigos.buscar(tecler)
        res.status(200).json({ message: 'listA vista', busca });
    } catch (error) {
        res.status(400).json({ message: 'Error en la vista', tecler })

    }
})

app.post('/buscaAmigo', async (req, res) => {
    const tecler = req.body
    try {
        const busca = await controladorAmigos.validarAmigo(tecler)
        res.status(200).json({busca });
    } catch (error) {
        res.status(400).json({ message: 'Error en la vista', error: err })

    }
})
}