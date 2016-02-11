'use strict';


var Carre = require('./Geometrie/Carre');
var Cercle = require('./Geometrie/Cercle');

var carre = new Carre(10, 20, 4);
console.log(carre.aire());

var cercle = new Cercle(10, 20, 4);
console.log(cercle.aire());