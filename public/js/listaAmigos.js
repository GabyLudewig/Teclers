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
                        <li class="list-group-item"><img src="../img/tecla.jpg"></li>
                            <li class="list-group-item"><h2>Name: ${amigo.nombres}</h2></li>
                            <li class="list-group-item"><h2>Apellidos: ${amigo.apellidos}</h2></li>
                            <li class="list-group-item"><h2>Edad: ${amigo.edad}</h2></li>

                        </ul>
                        <button type="button" onclick="agregar()">Agregar Amigo</button>
                    </div>
                </div> `;
            });

          //  Show On Our Screen All Data
           document.getElementById('output').innerHTML = output;

        });
};

getData()