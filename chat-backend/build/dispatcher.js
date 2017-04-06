(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "flux"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("flux"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.flux);
    global.dispatcher = mod.exports;
  }
})(this, function (exports, _flux) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = new _flux.Dispatcher();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUVlIiwiZmlsZSI6ImRpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSBcImZsdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpc3BhdGNoZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
