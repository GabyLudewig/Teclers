let valorA=0;
let valorB=0;
let valorC=0;

function ingresoValor(){
    alert('ingrese 3 valores de "likes"')
    valorA=parseInt(prompt('ingrese el primer valor '));
    valorB=parseInt(prompt('ingrese el segundo valor '));
    valorC=parseInt(prompt('ingrese el tercer valor '));

}
function inicio(){
    ingresoValor();
    if(valorA===valorB ||valorA===valorC){
        alert('los valores ingresados deben ser distintos');
        return

    }
    if(valorA>valorB && valorA>valorC){
        console.log('la primera foto tiene mas "likes"');
        return
    };
    
    if(valorB>valorA && valorB>valorC){
        console.log('la segunda  foto tiene mas "likes"');
        return
    }else{
        console.log('la tercera foto tiene mas "likes"');
        return
    }
    
}

inicio()