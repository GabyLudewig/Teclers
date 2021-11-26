//APP todo lo visto hasta ahora....
var nombre;
var apellido;
var fecha;
var diaNumerica;
var mesNumerica;
var añoNumerica;
var variableNumerica;
nombre=prompt('ingrese su o sus nombres ');
apellido=prompt('ingrese su o sus apellidos');
diaNumerica=parseInt( prompt('ingrese su dia de nacimiento'));
mesNumerica=parseInt( prompt('ingrese su mes de nacimiento'));
añoNumerica=parseInt( prompt('ingrese su año de nacimiento'));
variableNumerica=parseInt( prompt('ingrese cantidad de cursos realizados'));
variableNumerica=variableNumerica +1
console.log("Nombre:"+nombre+'  '+ apellido)
console.log("fecha de nacimiento:"+diaNumerica+'-' +mesNumerica+'-'+ añoNumerica)
console.log("cursos realizados:"+variableNumerica)

if(añoNumerica<2000){
    alert('seguro que eres un programador jr..?')
}else{
    alert('eres un programador jr')
};