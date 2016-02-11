'use strict';

import Figure from './Figure';

class Cercle extends Figure {
    constructor(x, y, rayon) {
        super(x, y);
        this.rayon = rayon;
    }

    aire() {
        return this.rayon * this.rayon * Math.PI;
    }
}

export default Cercle;
