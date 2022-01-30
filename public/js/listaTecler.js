
function getData() {

    fetch('http://localhost:3001/teclers')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let author = data.tecler[0];
        let output = "<h2><center></center></h2>";
  
        author.forEach(function (tecler) {
          output += `
                  <div class="container">
                      <div class="card mt-4 bg-light">
                          <ul class="list-group">
                          <li class="list-group-item"><img class= "avatar-tecla" src="../img/tecla.jpg"></li>
                              <li class="list-group-item"><h2>Nombre: ${tecler.nombres} ${tecler.apellidos}</h2></li>
  
                          </ul>
                      </div>
                  </div> `;
        });
  
        //  Show On Our Screen All Data
        document.getElementById('output').innerHTML = output;
  
      });
  };
  
  async function buscarTecler() {
    const tecler = document.getElementById("tecler").value
  
    try {
      const busca = await fetch(`http://localhost:3001/buscarUnTecler`, {
        method: 'POST',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
          tecler: tecler
        })
        
      });
      console.log (busca)
      const parsedBusqueda = await busca.json()
      console.log(parsedBusqueda)
      let teclerEncontrado = parsedBusqueda.busca.res[0][0]
      localStorage.setItem('teclerEncontrado', tecler);
      console.log (teclerEncontrado)
      return window.location.href = './buscarTecler.html'
    } catch (err) {
      alert("No hay coincidencias")
      console.log(err)
      throw new Error("Busqueda no exitosa")
    }
  }
  
  getData()