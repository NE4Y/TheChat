(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../dispatcher", "../constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../dispatcher"), require("../constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.dispatcher, global.constants);
        global.user = mod.exports;
    }
})(this, function (exports, _dispatcher, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.connect = connect;
    exports.disconnect = disconnect;

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

    var _constants2 = _interopRequireDefault(_constants);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function connect(user) {
        _dispatcher2.default.dispatch({
            type: _constants2.default.USER_CONNECT,
            user: user
        });
    }

    function disconnect(user) {
        _dispatcher2.default.dispatch({
            type: _constants2.default.USER_DISCONNECT,
            user: user
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHZ0I7WUFPQTs7Ozs7Ozs7Ozs7O0FBUFQsYUFBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzFCLDZCQUFXLFFBQVgsQ0FBb0I7QUFDaEIsa0JBQU0sb0JBQVUsWUFBVjtBQUNOLHNCQUZnQjtTQUFwQixFQUQwQjtLQUF2Qjs7QUFPQSxhQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDN0IsNkJBQVcsUUFBWCxDQUFvQjtBQUNoQixrQkFBTSxvQkFBVSxlQUFWO0FBQ04sc0JBRmdCO1NBQXBCLEVBRDZCO0tBQTFCIiwiZmlsZSI6ImFjdGlvbnMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QodXNlcikge1xuICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBjb25zdGFudHMuVVNFUl9DT05ORUNULFxuICAgICAgICB1c2VyXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb25uZWN0KHVzZXIpIHtcbiAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogY29uc3RhbnRzLlVTRVJfRElTQ09OTkVDVCxcbiAgICAgICAgdXNlclxuICAgIH0pO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
