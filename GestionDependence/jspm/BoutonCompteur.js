
import $ from 'jquery';

class BoutonCompteur {
    constructor(selector) {
        this.$elt = $(selector);
    }

    run() {
        this.$elt.on('click', () => this.onClick());
    }

    onClick() {
        this.$elt.html(Number(this.$elt.html())+1);
    }
}

export default BoutonCompteur;