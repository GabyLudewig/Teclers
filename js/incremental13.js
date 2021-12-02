

 
let numAmigos=0;
alert('ingrese su numero de amigos')
    numAmigos=parseInt(prompt('ingrese su numero de amigos'));
    console.log('usted tiene:',numAmigos,'amigos')
function calcular(Callback){
    console.log("Hola Tecler")
    Callback();

}

   calcular(function()
{console.log('Hola callback')});
