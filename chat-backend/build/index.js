(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["cluster", "os", "./server"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("cluster"), require("os"), require("./server"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.cluster, global.os, global.server);
        global.index = mod.exports;
    }
})(this, function (_cluster, _os, _server) {
    "use strict";

    /**
     * Create a cluster of the application
     * to improve performance
     */

    var _cluster2 = _interopRequireDefault(_cluster);

    var _os2 = _interopRequireDefault(_os);

    var _server2 = _interopRequireDefault(_server);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var cpus = _os2.default.cpus().length;

    if (_cluster2.default.isMaster && process.env.NODE_ENV === "production") {
        for (var i = 0; i < cpus; i++) {
            _cluster2.default.fork();
        }

        _cluster2.default.on("exit", function () {
            //console.log("worker " + worker.process.pid + " died");
        });
    } else {
            _server2.default.start();
        }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFFBQUksT0FBTyxhQUFHLElBQUgsR0FBVSxNQUFWOztBQUVYLFFBQUcsa0JBQVEsUUFBUixJQUFvQixRQUFRLEdBQVIsQ0FBWSxRQUFaLEtBQXlCLFlBQXpCLEVBQXVDO0FBQzFELGFBQUksSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLElBQUosRUFBVSxHQUF6QixFQUE4QjtBQUMxQiw4QkFBUSxJQUFSLEdBRDBCO1NBQTlCOztBQUlBLDBCQUFRLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFlBQU07O1NBQU4sQ0FBbkIsQ0FMMEQ7S0FBOUQsTUFRTztBQUNILDZCQUFPLEtBQVAsR0FERztTQVJQIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgY2x1c3RlciBvZiB0aGUgYXBwbGljYXRpb25cbiAqIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAqL1xuXG5pbXBvcnQgY2x1c3RlciBmcm9tIFwiY2x1c3RlclwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHNlcnZlciBmcm9tIFwiLi9zZXJ2ZXJcIjtcblxubGV0IGNwdXMgPSBvcy5jcHVzKCkubGVuZ3RoO1xuXG5pZihjbHVzdGVyLmlzTWFzdGVyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjcHVzOyBpKyspIHtcbiAgICAgICAgY2x1c3Rlci5mb3JrKCk7XG4gICAgfVxuXG4gICAgY2x1c3Rlci5vbihcImV4aXRcIiwgKCkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid29ya2VyIFwiICsgd29ya2VyLnByb2Nlc3MucGlkICsgXCIgZGllZFwiKTtcbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgc2VydmVyLnN0YXJ0KCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
