let nombre1='job daniel';
let fecha1= new Date('2021-09-16');
let fecha2= new Date('2021-09-16');
let fecha3= new Date('2021-09-16');
let fecha4= new Date('2021-09-16');
let fecha5= new Date('2021-09-16');

let nombre2='juan';
let nombre3='jose';
let nombre4='jose';
let nombre5='jose';



function muestraEnPantalla(data){
    alert(`sus datos son :${data}`)
};

function desdeCuando(){
do{
    valor=prompt('Ingrese su ID:');
    switch (valor) {
    case '1': 
    id1=(nombre1+" "+fecha1);
     muestraEnPantalla (id1)
     
    break 
    case '5':
    id5=(nombre2+" "+fecha2);
     muestraEnPantalla (id5)
    
    break
    case '6':
    id6=(nombre3+" "+fecha3);
     muestraEnPantalla (id6)
    break
    case '14':
    id14=(nombre4+" "+fecha4);
     muestraEnPantalla (id14)
    break
    case '600':
        id600=(nombre5+" "+fecha5);
         muestraEnPantalla (id600)
        break
    case 'salir':
        alert('Gracias por utilizar nuestra app')
    break
    default:
    alert('Debes ingresar alguno de los valores requeridos o salir para finalizar la aplicacion')
    break
    };
}while (valor!='salir');
};