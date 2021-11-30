
let amigos = [];
let orden = [];

function ordenarAmigos(){
    let numAmigos = prompt("¿Cuantas amigos vas a ingresar?")
    
    for (i = 0; i < numAmigos; i++) {
        nombres = prompt("¿Cual es el nombre de tu amigo " + (i+1) + "?")
        amigos.push(nombres)
        orden = amigos.sort(); 
        
               }
               orden.forEach(element => {
                   console.log(element)
               });
        };
