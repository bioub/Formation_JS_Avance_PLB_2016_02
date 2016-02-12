

class Convertisseur {
    constructor(taux) {
        this.taux = taux;
    }
    convertir(montant, devise) {
        if (!this.taux[devise]) {
            throw new Error('Taux inexistant');
        }

        let taux = this.taux[devise];

        return montant * taux;
    }
}

export default Convertisseur;