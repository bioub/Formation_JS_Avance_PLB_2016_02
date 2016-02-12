
// Module
// Immetiatly Invoked Function Expression
(function () {
    'use strict';

    var result = document.querySelector('#resultats');


    document.querySelector('#carre').addEventListener('click', function() {
        var carre = new Carre(10, 20, 4);
        result.innerHTML = 'Aire du carré : ' + carre.aire();
    });

    document.querySelector('#cercle').addEventListener('click', function() {
        var cercle = new Cercle(10, 20, 4);
        result.innerHTML = 'Aire du cercle : ' + cercle.aire();
    });
}());