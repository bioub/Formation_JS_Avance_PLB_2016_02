(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Figure = require('./Figure');

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

    module.exports = Carre;

},{"./Figure":3}],2:[function(require,module,exports){

var Figure = require('./Figure');

    function Cercle(x, y, rayon) {
        Figure.apply(this, arguments);
        this.rayon = rayon;
    }


    Cercle.prototype.aire = function () {
        return this.rayon * this.rayon * Math.PI;
    };

    module.exports = Cercle;

},{"./Figure":3}],3:[function(require,module,exports){

    function Figure(x, y) {
        this.x = x;
        this.y = y;
    }

    Figure.prototype.draw = function () {
        return 'draw';
    };

    module.exports = Figure;

},{}],4:[function(require,module,exports){
var Carre = require('./Geometrie/Carre');
var Cercle = require('./Geometrie/Cercle');

var carre = new Carre(10, 20, 4);
console.log(carre.aire());

var cercle = new Cercle(10, 20, 4);
console.log(cercle.aire());
},{"./Geometrie/Carre":1,"./Geometrie/Cercle":2}]},{},[4]);
