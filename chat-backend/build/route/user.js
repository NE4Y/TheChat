(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "express", "../model/User", "../config"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("express"), require("../model/User"), require("../config"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.User, global.config);
        global.user = mod.exports;
    }
})(this, function (exports, _express, _User, _config) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    var _User2 = _interopRequireDefault(_User);

    var _config2 = _interopRequireDefault(_config);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var router = _express2.default.Router();

    router.post("/authenticate", function (req, res) {
        _User2.default.findOne({ where: { username: req.body.username } }).then(function (user) {
            if (user.checkPassword(req.body.password)) {
                req.session.user = user;
                req.session.authenticated = true;
                res.json({
                    success: true,
                    code: 200,
                    message: "successfully authenticated"
                });
            } else {
                throw new Error("Wrong password");
            }
        }).catch(function (e) {
            res.status(403).json({
                success: false,
                code: 403,
                message: "Authentication failed."
            });
        });
    });

    router.authenticate = function (req, res, next) {
        console.log("authentication: " + req.session);
        if (req.session.authenticated) {
            next();
        } else {
            res.status(403).json({
                success: false,
                code: 403,
                message: "Not authenticated"
            });
        }
    };

    router.post("/isAuthed", router.authenticate, function (req, res) {
        res.status(200).json({
            success: true,
            code: 200,
            message: "Authenticated",
            user: req.session.user.username
        });
    });

    router.get("/logout", function (req, res) {
        delete req.session.user;
        req.session.authenticated = false;
        res.json({
            code: 200,
            success: true,
            message: "User successfully logged out."
        });
    });

    router.post("/register", function (req, res) {
        _User2.default.create({ username: req.body.username, password: req.body.password }).then(function (user) {
            res.json({
                code: 200,
                success: true,
                message: "user " + user.username + " created"
            });
        }).catch(function (e) {
            res.json({
                code: 500,
                success: false,
                message: "User could not be registered. Please try a different username."
            });
        });
    });

    exports.default = router;
});
//# sourceMappingURL=data:application/json;base64,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Q0FBUztBQUNMLHNCQUFNLEdBQU47QUFDQSx5QkFBUyxLQUFUO0FBQ0EseUJBQVMsZ0VBQVQ7YUFISixFQURVO1NBQVAsQ0FSWCxDQURtQztLQUFkLENBQXpCOztzQkFtQmUiLCJmaWxlIjoicm91dGUvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWwvVXNlclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdChcIi9hdXRoZW50aWNhdGVcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgVXNlci5maW5kT25lKHt3aGVyZToge3VzZXJuYW1lOiByZXEuYm9keS51c2VybmFtZX19KVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICBpZih1c2VyLmNoZWNrUGFzc3dvcmQocmVxLmJvZHkucGFzc3dvcmQpKXtcbiAgICAgICAgICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgcmVxLnNlc3Npb24uYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIHBhc3N3b3JkXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY29kZTogNDAzLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQuXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxucm91dGVyLmF1dGhlbnRpY2F0ZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRpb246IFwiICsgcmVxLnNlc3Npb24pO1xuICAgIGlmKHJlcS5zZXNzaW9uLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBjb2RlOiA0MDMsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIk5vdCBhdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxucm91dGVyLnBvc3QoXCIvaXNBdXRoZWRcIiwgcm91dGVyLmF1dGhlbnRpY2F0ZSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRlZFwiLFxuICAgICAgICB1c2VyOiByZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lXG4gICAgfSk7XG59KVxuXG5yb3V0ZXIuZ2V0KFwiL2xvZ291dFwiLCAocmVxLCByZXMpID0+IHtcbiAgICBkZWxldGUgcmVxLnNlc3Npb24udXNlcjtcbiAgICByZXEuc2Vzc2lvbi5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiVXNlciBzdWNjZXNzZnVsbHkgbG9nZ2VkIG91dC5cIlxuICAgIH0pO1xufSk7XG5cbnJvdXRlci5wb3N0KFwiL3JlZ2lzdGVyXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIFVzZXIuY3JlYXRlKHt1c2VybmFtZTogcmVxLmJvZHkudXNlcm5hbWUsIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZH0pXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwidXNlciBcIiArIHVzZXIudXNlcm5hbWUgKyBcIiBjcmVhdGVkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBjb2RlOiA1MDAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIGNvdWxkIG5vdCBiZSByZWdpc3RlcmVkLiBQbGVhc2UgdHJ5IGEgZGlmZmVyZW50IHVzZXJuYW1lLlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
