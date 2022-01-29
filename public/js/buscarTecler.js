async function buscarUnTecler() {
    const tecler = localStorage.getItem('teclerEncontrado')
    console.log(tecler)
    try{
    const busca = await fetch(`http://localhost:3001/buscarUnTecler`, {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
          tecler: tecler
          })
        });

        const parsedBusqueda = await busca.json()
        console.log (parsedBusqueda.busca)
         let teclerEncontrado = parsedBusqueda.busca.res[0]
         
    
    console.log (teclerEncontrado)
    
    teclerEncontrado.forEach(function (tecler) {
        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                        <li class="list-group-item"><img class= "avatar-tecla" src="../img/tecla.jpg"></li>
                            <li class="list-group-item"><h2>Nombre: ${tecler.nombres} ${tecler.apellidos}</h2></li>
                            <input type="button" onclick="location.href= './perfilTecler.html?id=${tecler.id}'" value="Ver Perfil"> 
                            
                            
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

buscarUnTecler()

