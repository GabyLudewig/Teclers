let Usuarios = {}

let Id = {
    cont : 0
}

class Usuario{
    constructor(nombre, pass){
        this.nombre = nombre
        this.pass = pass
        this.Id = Id.cont
    }
}

const nuevoUsuario = (nombre,pass)=>{
    Usuarios[Id.cont] = new Usuario (nombre,pass)
    Id.cont++
}
module.exports =  {Usuarios,nuevoUsuario}