'use strict';

import Figure from './Figure';

class Carre extends Figure {
    constructor(x, y, cote) {
        super(x, y);
        this.cote = cote;
    }

    aire() {
        return this.cote * this.coteX;
    }
}

export default Carre;
