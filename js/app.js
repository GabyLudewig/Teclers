const app = epress()


server.listen(3001, () => { 
    console.log("Servidor inicializado correctamente en http://localhost:3001")
});

app.get('/',(req,res) => {
    res.send("hola")
})