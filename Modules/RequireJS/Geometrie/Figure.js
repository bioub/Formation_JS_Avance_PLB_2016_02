define(function() {
    'use strict';

    function Figure(x, y) {
        this.x = x;
        this.y = y;
    }

    Figure.prototype.draw = function () {
        return 'draw';
    };

    return Figure;
});

