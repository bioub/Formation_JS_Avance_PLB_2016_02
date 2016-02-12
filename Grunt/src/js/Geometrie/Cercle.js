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