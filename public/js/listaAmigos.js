
function getData() {

  fetch('http://localhost:3001/amigos')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let author = data.amigo[0];
      let output = "<h2><center></center></h2>";

      author.forEach(function (amigo) {
        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                        <li class="list-group-item"><img class= "avatar-tecla" src="../img/tecla.jpg"></li>
                            <li class="list-group-item"><h2>Name: ${amigo.nombres}</h2></li>
                            <li class="list-group-item"><h2>Apellidos: ${amigo.apellidos}</h2></li>
                            <li class="list-group-item"><h2>Edad: ${amigo.edad}</h2></li>

                        </ul>
                    </div>
                </div> `;
      });

      //  Show On Our Screen All Data
      document.getElementById('output').innerHTML = output;

    });
};

async function buscarAmigo() {
  const tecler = document.getElementById("tecler").value

  try {
    const busca = await fetch(`http://localhost:3001/buscar`, {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        tecler: tecler
      })
    });
    const parsedBusqueda = await busca.json()
    console.log(parsedBusqueda)
    let amigoEncontrado = parsedBusqueda.busca.res[0][0]
    localStorage.setItem('amigoEncontrado', amigoEncontrado.nombres);
    return window.location.href = './buscarAmigo.html'
  } catch (err) {
    alert("No hay coincidencias")
    console.log(err)
    throw new Error("Busqueda no exitosa")
  }
}

getData()