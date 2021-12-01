class usuario{
    constructor(nombre,appellidos,edad,profesion,telefono,disponibilidad,direccion){
        this.nombre=nombre;
        this.appellidos=appellidos;
        this.edad=edad;
        this.profesion=profesion;
        this.telefono=telefono;
        this.disponibilidad=disponibilidad ||true;
        this.direccion=direccion;
        
        
    };
        
    jugar(){
        console.log('jugando al futbol')
    }


    status(){
        if (this.disponibilidad){
            console.log('trabajando');
            this.jugar();
            console.log('me encanta mi trabajo')
        }else{
            console.log('echando un break')
        }
    }
}

let jose= new usuario('jose','Hernandez',30,'futbolista',3542534253,disponibilidad=prompt('escribe true oh false'),'Guerrero s/n');