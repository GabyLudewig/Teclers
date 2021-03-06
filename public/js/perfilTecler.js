
async function buscarUsuario(id) {


   var queryString = window.location.search;
   var urlParams = new URLSearchParams(queryString);
   var id = urlParams.get('id')
   console.log(id)


    console.log(id)
    try {
        const busca = await fetch(`http://localhost:3001/buscarPerfilUsuario`, {
            method: 'POST',
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify({
                id: id
            })
        });

        const parsedBusqueda = await busca.json()
        console.log(parsedBusqueda.busca.res[0][0])
        let usuarioEncontrado = parsedBusqueda.busca.res[0][0]
        console.log(usuarioEncontrado.nombres)


        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                        <li class="list-group-item"><img class= "avatar-tecla" src="../img/tecla.jpg"></li>
                            <li class="list-group-item"><h2>Name: ${usuarioEncontrado.nombres}</h2></li>
                            <li class="list-group-item"><h2>Apellidos: ${usuarioEncontrado.apellidos}</h2></li>
                            <li class="list-group-item"><h2>Fecha de Nacimiento: ${usuarioEncontrado.fecha_nac}</h2></li>
                            <li class="list-group-item"><h2>Correo electronico: ${usuarioEncontrado.email}</h2></li>
                    
                        </ul>
                    </div>
                </div> `;


        document.getElementById('output').innerHTML = output;
    } catch (err) {
        console.log(err)
        throw new Error("Busqueda no exitosa")
    }

}


buscarUsuario()
