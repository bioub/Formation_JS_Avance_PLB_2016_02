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