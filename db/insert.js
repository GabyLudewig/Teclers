const sequelize = require('./conexion.js');

async function insertrows(){
    
    let array_insert = ['maria','cortes','mar@hotmail.com','****','1995-09-15'];
    console.log(array_insert);

    sequelize.query('INSERT INTO `usuarios`(`nombres`,`apellidos`,`email`,`contraseña`,`fecha_nac`) VALUES(?,?,?,?,?)',
        { replacements: array_insert, type: sequelize.QueryTypes.INSERT}
    ).then(function (projects){
        console.log(projects)
    })

}

insertrows();



