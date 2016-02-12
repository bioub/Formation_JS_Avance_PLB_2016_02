(function (global) {
  'use strict';

  function Figure(x, y) {
    this.x = x;
    this.y = y;
  }

  Figure.prototype.draw = function () {
    return 'draw';
  };

  global.Figure = Figure;
}(this));

(function (global) {
  'use strict';

  function Carre(x, y, cote) {
    Figure.apply(this, arguments);
    this.cote = cote;
  }

  /**
   * Calcule l'air du carré
   * @return {number} Aire du carré
   */
  Carre.prototype.aire = function () {
    return this.cote * this.cote;
  };

  global.Carre = Carre;
}(this));

(function (global) {
  'use strict';

  function Cercle(x, y, rayon) {
    Figure.apply(this, arguments);
    this.rayon = rayon;
  }

  Cercle.prototype.aire = function () {
    return this.rayon * this.rayon * Math.PI;
  };

  global.Cercle = Cercle;
}(this));

// Module
// Immetiatly Invoked Function Expression
(function () {
  'use strict';

  var result = document.querySelector('#resultats');

  document.querySelector('#carre').addEventListener('click', function () {
    var carre = new Carre(10, 20, 4);
    result.innerHTML = 'Aire du carré : ' + carre.aire();
  });

  document.querySelector('#cercle').addEventListener('click', function () {
    var cercle = new Cercle(10, 20, 4);
    result.innerHTML = 'Aire du cercle : ' + cercle.aire();
  });
}());
