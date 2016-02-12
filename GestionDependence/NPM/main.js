
(function() {
    'use strict';

    document.forms.convertisseur.addEventListener('submit', function(e) {
        e.preventDefault();

        let montant = Number(this.montant.value);

        let convertisseur = new Convertisseur(taux);
        let devise = this.dest.value;

        let result = document.querySelector('#resultats');

        result.innerHTML = convertisseur.convertir(montant, devise);
    });
}());
