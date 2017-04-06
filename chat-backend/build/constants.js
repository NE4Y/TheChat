(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var constants = {
        USER_CONNECT: "USER_CONNECT",
        USER_DISCONNECT: "USER_DISCONNECT",
        CREATE_ROOM: "CREATE_ROOM",
        ADD_USER_TO_ROOM: "ADD_USER_TO_ROOM",
        REMOVE_USER_FROM_ROOM: "REMOVE_USER_FROM_ROOM"
    };

    exports.default = constants;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFNLFlBQVk7QUFDZCxzQkFBYyxjQUFkO0FBQ0EseUJBQWlCLGlCQUFqQjtBQUNBLHFCQUFhLGFBQWI7QUFDQSwwQkFBa0Isa0JBQWxCO0FBQ0EsK0JBQXVCLHVCQUF2QjtLQUxFOztzQkFRUyIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSB7XG4gICAgVVNFUl9DT05ORUNUOiBcIlVTRVJfQ09OTkVDVFwiLFxuICAgIFVTRVJfRElTQ09OTkVDVDogXCJVU0VSX0RJU0NPTk5FQ1RcIixcbiAgICBDUkVBVEVfUk9PTTogXCJDUkVBVEVfUk9PTVwiLFxuICAgIEFERF9VU0VSX1RPX1JPT006IFwiQUREX1VTRVJfVE9fUk9PTVwiLFxuICAgIFJFTU9WRV9VU0VSX0ZST01fUk9PTTogXCJSRU1PVkVfVVNFUl9GUk9NX1JPT01cIlxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
