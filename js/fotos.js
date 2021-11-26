
let numLikes  = [];
let likes;
let numFotos = prompt("¿Cuantas fotos vas a ingresar?")

for (i = 0; i < numFotos; i++) {
    likes = prompt("¿Cuantos likes tiene la foto " + (i+1) + "?")
    numLikes.push(likes)
    console.log("Foto " + (i + 1) + " : " + numLikes[i] + " likes")
}

let total = numLikes.reduce((a, b) => Number(a) + Number(b), 0);

console.log("El total de Likes es: " + total)
console.log("Las fotos con menos de 10 likes son: ");

for (i = 0; i < numFotos; i++) 
{

    if (numLikes[i] < 11) {

        console.log("Foto " + (i + 1) + " : " + numLikes[i] + " likes")
    }
}


