function Figure(x, y) {
  this.x = x;
  this.y = y;
}

Figure.prototype.draw = function() {
  return 'draw';  
};

function Carre(x, y, cote) {
    Figure.apply(this, arguments);
    this.cote = cote;
}

/**
 * Calcule l'air du carré
 * @return {number} Aire du carré
 */
Carre.prototype.aire = function() {
  return this.cote * this.cote;  
};

function Cercle(x, y, rayon) {
    Figure.apply(this, arguments);
    this.rayon = rayon;
}


Cercle.prototype.aire = function() {
  return this.rayon * this.rayon * Math.PI;  
};

var carre = new Carre(10, 20, 4);
console.log(carre.aire());

var cercle = new Cercle(10, 20, 4);
console.log(cercle.aire());