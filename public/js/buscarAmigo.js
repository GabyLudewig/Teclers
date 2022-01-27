async function buscarUnAmigo() {
    const tecler = document.getElementById("tecler").value
    console.log(tecler)
    try{
    const busca = await fetch(`http://localhost:3001/buscar`, {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
          tecler: tecler
          })
        });

        const parsedBusqueda = await busca.json()
        console.log (parsedBusqueda.busca.res[0][0])
         let amigoEncontrado = parsedBusqueda.busca.res[0]
    console.log (amigoEncontrado)

    
    amigoEncontrado.forEach(function (tecler) {
        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                        <li class="list-group-item"><img class= "avatar-tecla" src="../img/tecla.jpg"></li>
                            <li class="list-group-item"><h2>Name: ${tecler.nombres}</h2></li>
                            <li class="list-group-item"><h2>Apellidos: ${tecler.apellidos}</h2></li>
                            <li class="list-group-item"><h2>Edad: ${tecler.edad}</h2></li>

                        </ul>
                    </div>
                </div> `;
    });

    document.getElementById('output').innerHTML = output;  
}catch(err) {
    console.log(err)
    throw new Error("Busqueda no exitosa")
} 
}
