'use strict';

import Carre from './Geometrie/Carre';
import Cercle from './Geometrie/Cercle';

var carre = new Carre(10, 20, 4);
console.log(carre.aire());

var cercle = new Cercle(10, 20, 4);
console.log(cercle.aire());