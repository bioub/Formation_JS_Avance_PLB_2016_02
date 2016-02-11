
var contact = {
    prenom: 'Romain',
    hello: function() {
        //return `Bonjour je suis ${this.prenom}`;
        return 'Bonjour je suis ' + this.prenom;
    }
};

console.log(contact.hello());

function valeursParDefault(largeur, hauteur, couleur, valeur) {
    // Version 1 avec le type
    if (typeof valeur === 'undefined') {
        valeur = 'Valeur par défaut';
    }

    // Version 2 avec la conversion (attention pas de valeur équivalente à false)
    if (!valeur) valeur = 'Valeur par défaut';

    // Version 3 avec conversion + OR
    valeur = valeur || 'Valeur par défaut';
}

valeursParDefault(100, 30, 'blue');

function sansPatternOptions(largeur, hauteur, couleur, valeur) {
    if (typeof largeur === 'undefined') {
        throw new Error('Largeur obligatoire');
    }

    if (typeof largeur !== 'number') {
        throw new Error('Largeur doit être de type number');
    }

    hauteur = hauteur || 30;
    couleur = couleur || 'grey';
    valeur = valeur || 'Valeur par défaut';
}

sansPatternOptions(100, null, null, 'Ma valeur');

function avecPatternOptions(options) {
    options = options || {};
    options.hauteur = options.hauteur || 30;
    options.couleur = options.couleur || 'grey';
    options.valeur = options.valeur || 'Valeur par défaut';
}

avecPatternOptions({valeur: 'Ma valeur'});

var str = JSON.stringify(contact);
var obj = JSON.parse(str);
console.log(obj.prenom);

function Person(_firstName) {
    this.getPrenom = function () {
        return _firstName;
    };

    this.setPrenom  = function(prenom) {
        _firstName = prenom;
    };
}

var romain = new Person('Romain');
console.log(romain.getPrenom());
romain.setPrenom('Jean');
console.log(romain.getPrenom());



function Contact(prenom) {
    this.prenom = prenom;
}

Contact.prototype.hello = function() {
    return 'Bonjour je suis ' + this.prenom;
};

var eric = new Contact('Eric');
console.log(eric.prenom); // prenom dans l'objet eric
console.log(eric.hello()); // hello dans le prototype de Contact
console.log(eric.hasOwnProperty('test')); // hasOwnProperty dans le prototype de Object
console.log(eric.toto); // undefined

function Salarie(prenom, societe)  {
    Contact.apply(this, arguments);
    this.societe = societe;
}

Salarie.prototype = Object.create(Contact.prototype); // IE >= 9

/**
 * Fonction hello
 * @returns string Valeur de retour
 */
Salarie.prototype.hello = function() {
    return Contact.prototype.hello.call(this) + ', je suis salarié';
};

//Salarie.prototype = Contact.prototype;

//for (var method in Contact.prototype) {
//    if (Contact.prototype.hasOwnProperty(method)) {
//        Salarie.prototype[method] = Contact.prototype[method];
//    }
//}

// Salarie.constructor = Contact.constructor;

var hathija = new Salarie('Hathija', 'PriceMinister');
console.log(hathija.prenom);
console.log(hathija.societe);
console.log(hathija.hello());

console.log(hathija instanceof Salarie);
console.log(hathija instanceof Contact);
console.log(hathija instanceof Object);