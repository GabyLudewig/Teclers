let valorA=0;
let valorB=0;
let valorC=0;
let ArrayLIkes=[];

function ingresoValor(){
    alert('ingrese 3 valores de "likes"')
    //valorA=parseInt(prompt('ingrese el primer valor '));
    ArrayLIkes[0]=parseInt(prompt('ingrese el primer valor '));

    while(ArrayLIkes[1]=== ArrayLIkes[0]){
        alert('los valores ingresados deben ser distintos');
        ArrayLIkes[1]=parseInt(prompt('ingrese el primer valor '));
        
    }
    ArrayLIkes[2]=parseInt(prompt('ingrese el primer valor '));
    //valorB=parseInt(prompt('ingrese el segundo valor '));
    //valorC=parseInt(prompt('ingrese el tercer valor '));

}
function inicio(){
    ingresoValor();
    let max=0;
    for(let i=0; i<ArrayLIkes.length; i++){
        if(ArrayLIkes[i]>max) max=ArrayLIkes[i];
    } 
 //   console.log('la foto '+ (ArrayLIkes.findIndex(max)+1 )+' tien mas "likes"')
 //   if(valorA===valorB ||valorA===valorC){
 //       alert('los valores ingresados deben ser distintos');
 //       return
//
 //   }
   // if(valorA>valorB && valorA>valorC){
    //    console.log('la primera foto tiene mas "likes"');
      //  return
   // };
    
    //if(valorB>valorA && valorB>valorC){
      //  console.log('la segunda  foto tiene mas "likes"');
        //return
    //}else{
      //  console.log('la tercera foto tiene mas "likes"');
        //return
    //}
    
}

inicio()