var moment = require('moment');
var now = moment(new Date());
var utc = moment(new Date()).utc();
const express = require('express');
const server = express();
const coolImages = require("cool-images");
var img = coolImages.one();
var duration = moment(utc.diff(now));
var fecha1 = '1980-06-06';
var fecha2 = '1910-12-02';


server.get('/', (req, res) => {
    img.src = img 
    console.log(img)
    
});

console.log("La hora local es: " + (now.format('DD/MM/YYYY hh:mm:ss')));
console.log("La hora UTC es: " + (utc.format('DD/MM/YYYY hh:mm:ss')));
console.log('La diferencia es de: ' + duration.hours() + " horas");

if (moment(fecha1).isBefore(fecha2)) {
    console.log('La fecha 1 ' + fecha1 + (' es mayor que la fecha 2 ') + fecha2);
    console.log('La fecha mayor es ' + fecha1)
} else {
    console.log('La fecha 2 ' + fecha2 + (' es mayor que la fecha 1 ') + fecha1);
    console.log('La fecha mayor es ' + fecha2)
}
console.log(img);

