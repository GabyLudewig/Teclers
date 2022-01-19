const Joi = require('joi')

//Exporto el modelo
module.exports = {
    modelologin : Joi.object().keys({
        email: Joi.required(),
         
        contraseña: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required() //utilizo expresiones regulares
    }).with('email', 'contraseña'),// Si existe pass tb debe existir el usuario

    modeloCrearUsuario : Joi.object().keys({
        nombres: Joi.required(), 
        apellidos: Joi.string().min(1).max(50).required(),
        email: Joi.string().email().required(),
        contraseña: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(), //utilizo expresiones regulares
        fecha_nac: Joi.required(),
    })
}