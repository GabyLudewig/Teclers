const url = 'https://randomuser.me/';
let resultado;

function getUsuariosRandom (id){
    id= 'https://randomuser.me/api/'
    fetch(id)
    .then (response => response.json())
    .then (json => {
        console.log(json)
        resultado = json
    })
    .catch (error => {
        console.log('No hay respuesta')
    })
}

getUsuariosRandom();