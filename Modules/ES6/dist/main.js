(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./Geometrie/Carre', './Geometrie/Cercle'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./Geometrie/Carre'), require('./Geometrie/Cercle'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Carre, global.Cercle);
    global.main = mod.exports;
  }
})(this, function (_Carre, _Cercle) {
  'use strict';

  var _Carre2 = _interopRequireDefault(_Carre);

  var _Cercle2 = _interopRequireDefault(_Cercle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var carre = new _Carre2.default(10, 20, 4);
  console.log(carre.aire());

  var cercle = new _Cercle2.default(10, 20, 4);
  console.log(cercle.aire());
});