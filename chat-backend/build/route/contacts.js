(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "express", "../model/User", "../stores/UserStore"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("express"), require("../model/User"), require("../stores/UserStore"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.User, global.UserStore);
        global.contacts = mod.exports;
    }
})(this, function (exports, _express, _User, _UserStore) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _User2 = _interopRequireDefault(_User);

    var _UserStore2 = _interopRequireDefault(_UserStore);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var router = new _express.Router();

    function getUser(username) {
        return _User2.default.findOne({ where: { username: username } });
    }

    router.get("/contacts", function (req, res) {
        getUser(req.session.user.username).then(function (user) {
            user.getContacts().then(function (contacts) {
                res.json({
                    result: contacts.map(function (c) {
                        return {
                            contactName: c.contactName,
                            online: _UserStore2.default.connectedUsers[c.contactName] || false
                        };
                    }),
                    success: true,
                    code: 200
                });
            }).catch(function () {
                res.status(500).json({
                    success: false,
                    code: 500,
                    message: "No users found"
                });
            });
        });
    });

    router.post("/addContact", function (req, res) {
        getUser(req.session.user.username).then(function (user) {
            user.pushContact(req.body.username).then(function () {
                res.json({
                    success: true,
                    message: "added user " + req.body.username + " to contacts"
                });
            }).catch(function (e) {
                res.json({
                    success: false,
                    message: "user " + req.body.username + " could not be added.",
                    reason: e.reason || "unknown",
                    code: 400
                });
            });
        });
    });

    router.post("/deleteContact", function (req, res) {
        _User.Contact.findOne({ where: { userUsername: req.session.user.username, contactName: req.body.username } }).then(function (result) {
            result.destroy();
        }).then(function () {
            console.log("res json");
            res.json({
                success: true,
                message: "delete user " + req.body.username + " from contacts"
            });
        }).catch(function (e) {
            console.log(e);
            res.json({
                success: false,
                message: "user " + req.body.username + " could not be removed",
                code: 400
            });
        });
    });

    exports.default = router;
});
//# sourceMappingURL=data:application/json;base64,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QUNBLHNCQUFNLEdBQU47YUFISixFQUZVO1NBQVAsQ0FUWCxDQUR3QztLQUFkLENBQTlCOztzQkFvQmUiLCJmaWxlIjoicm91dGUvY29udGFjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBVc2VyLCB7Q29udGFjdH0gZnJvbSBcIi4uL21vZGVsL1VzZXJcIjtcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy9Vc2VyU3RvcmVcIjtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcjtcblxuZnVuY3Rpb24gZ2V0VXNlcih1c2VybmFtZSkge1xuICAgIHJldHVybiBVc2VyLmZpbmRPbmUoe3doZXJlOiB7dXNlcm5hbWV9fSk7XG59XG5cbnJvdXRlci5nZXQoXCIvY29udGFjdHNcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgZ2V0VXNlcihyZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lKVxuICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIHVzZXIuZ2V0Q29udGFjdHMoKS50aGVuKGNvbnRhY3RzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBjb250YWN0cy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdE5hbWU6IGMuY29udGFjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubGluZTogVXNlclN0b3JlLmNvbm5lY3RlZFVzZXJzW2MuY29udGFjdE5hbWVdIHx8IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gdXNlcnMgZm91bmRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59KTtcblxucm91dGVyLnBvc3QoXCIvYWRkQ29udGFjdFwiLCAocmVxLCByZXMpID0+IHtcbiAgICBnZXRVc2VyKHJlcS5zZXNzaW9uLnVzZXIudXNlcm5hbWUpXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgdXNlci5wdXNoQ29udGFjdChyZXEuYm9keS51c2VybmFtZSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgYWRkZWQgdXNlciAke3JlcS5ib2R5LnVzZXJuYW1lfSB0byBjb250YWN0c2BcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgdXNlciAke3JlcS5ib2R5LnVzZXJuYW1lfSBjb3VsZCBub3QgYmUgYWRkZWQuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogZS5yZWFzb24gfHwgXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59KTtcblxucm91dGVyLnBvc3QoXCIvZGVsZXRlQ29udGFjdFwiLCAocmVxLCByZXMpID0+IHtcbiAgICBDb250YWN0LmZpbmRPbmUoe3doZXJlOiB7dXNlclVzZXJuYW1lOiByZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lLCBjb250YWN0TmFtZTogcmVxLmJvZHkudXNlcm5hbWV9fSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICByZXN1bHQuZGVzdHJveSgpXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyBqc29uXCIpO1xuICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYGRlbGV0ZSB1c2VyICR7cmVxLmJvZHkudXNlcm5hbWV9IGZyb20gY29udGFjdHNgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgdXNlciAke3JlcS5ib2R5LnVzZXJuYW1lfSBjb3VsZCBub3QgYmUgcmVtb3ZlZGAsXG4gICAgICAgICAgICAgICAgY29kZTogNDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
