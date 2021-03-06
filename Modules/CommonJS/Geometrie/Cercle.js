'use strict';

var Figure = require('./Figure');

    function Cercle(x, y, rayon) {
        Figure.apply(this, arguments);
        this.rayon = rayon;
    }


    Cercle.prototype.aire = function () {
        return this.rayon * this.rayon * Math.PI;
    };

    module.exports = Cercle;
