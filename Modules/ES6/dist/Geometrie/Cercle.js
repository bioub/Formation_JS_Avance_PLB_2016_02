function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Figure'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Figure'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Figure);
        global.Cercle = mod.exports;
    }
})(this, function (exports, _Figure2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _Figure3 = _interopRequireDefault(_Figure2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Cercle = (function (_Figure) {
        _inherits(Cercle, _Figure);

        function Cercle(x, y, rayon) {
            _classCallCheck(this, Cercle);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cercle).call(this, x, y));

            _this.rayon = rayon;
            return _this;
        }

        _createClass(Cercle, [{
            key: 'aire',
            value: function aire() {
                return this.rayon * this.rayon * Math.PI;
            }
        }]);

        return Cercle;
    })(_Figure3.default);

    exports.default = Cercle;
});