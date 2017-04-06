(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "sequelize", "./config", "colors"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("sequelize"), require("./config"), require("colors"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.sequelize, global.config, global.colors);
        global.db = mod.exports;
    }
})(this, function (exports, _sequelize, _config, _colors) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _sequelize2 = _interopRequireDefault(_sequelize);

    var _config2 = _interopRequireDefault(_config);

    var _colors2 = _interopRequireDefault(_colors);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var pathToDatabase = _config2.default.pathToDatabase || "chat";
    var standardDBPassword = _config2.default.dbPassword || "chat";
    var standardDBAdmin = _config2.default.dbAdmin || "chat";

    if (!_config2.default.dbPassword) {
        console.warn(_colors2.default.yellow.bold("Warning: Please change the database password."));
    }

    var sequlize = new _sequelize2.default(pathToDatabase, "username", "password", _config2.default.db);

    exports.default = sequlize;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxRQUFNLGlCQUFpQixpQkFBTyxjQUFQLElBQXlCLE1BQXpCO0FBQ3ZCLFFBQU0scUJBQXFCLGlCQUFPLFVBQVAsSUFBcUIsTUFBckI7QUFDM0IsUUFBTSxrQkFBa0IsaUJBQU8sT0FBUCxJQUFrQixNQUFsQjs7QUFFeEIsUUFBRyxDQUFDLGlCQUFPLFVBQVAsRUFBbUI7QUFDbkIsZ0JBQVEsSUFBUixDQUFhLGlCQUFPLE1BQVAsQ0FBYyxJQUFkLENBQW1CLCtDQUFuQixDQUFiLEVBRG1CO0tBQXZCOztBQUlBLFFBQUksV0FBVyx3QkFBYyxjQUFkLEVBQThCLFVBQTlCLEVBQTBDLFVBQTFDLEVBQXNELGlCQUFPLEVBQVAsQ0FBakU7O3NCQUVXIiwiZmlsZSI6ImRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiY29sb3JzXCI7XG5cbmNvbnN0IHBhdGhUb0RhdGFiYXNlID0gY29uZmlnLnBhdGhUb0RhdGFiYXNlIHx8IFwiY2hhdFwiO1xuY29uc3Qgc3RhbmRhcmREQlBhc3N3b3JkID0gY29uZmlnLmRiUGFzc3dvcmQgfHwgXCJjaGF0XCI7XG5jb25zdCBzdGFuZGFyZERCQWRtaW4gPSBjb25maWcuZGJBZG1pbiB8fCBcImNoYXRcIjtcblxuaWYoIWNvbmZpZy5kYlBhc3N3b3JkKSB7XG4gICAgY29uc29sZS53YXJuKGNvbG9ycy55ZWxsb3cuYm9sZChcIldhcm5pbmc6IFBsZWFzZSBjaGFuZ2UgdGhlIGRhdGFiYXNlIHBhc3N3b3JkLlwiKSk7XG59XG5cbmxldCBzZXF1bGl6ZSA9IG5ldyBTZXF1ZWxpemUocGF0aFRvRGF0YWJhc2UsIFwidXNlcm5hbWVcIiwgXCJwYXNzd29yZFwiLCBjb25maWcuZGIpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXF1bGl6ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
