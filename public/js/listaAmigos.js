//Get Btn And Create Function
//document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('http://localhost:3001/amigos')
        .then(res => res.json())
        .then(data => {
             console.log(data);

            let author = data.amigo[0];
           //  console.log(author.amigo[0]);

            //Get Data Value
            let output = "<h2><center></center></h2>";

            //Get Data Loop Through
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
    const  tecler = document.getElementById("tecler").value

    try { 
      const busca = await fetch(`http://localhost:3001/buscaAmigo`, {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
            tecler: tecler
        })
      });
      const parsedBusqueda = await busca.json()
      console.log (parsedBusqueda.busca.result)
      if (parsedBusqueda.busca.result == 'ok') {
        return window.location.href = './buscarAmigo.html'
      } else {
        alert("Amigo no encontrado")
      }
    } catch(err) {
      console.log(err)
      throw new Error("Busqueda no exitosa")
    }
  }

getData()