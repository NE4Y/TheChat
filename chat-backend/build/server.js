(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "express", "path", "morgan", "helmet", "compression", "http", "pretty-error", "./route/user", "body-parser", "./websocket", "express-session", "./config", "colors", "./route/contacts", "./db", "connect-sequelize"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("express"), require("path"), require("morgan"), require("helmet"), require("compression"), require("http"), require("pretty-error"), require("./route/user"), require("body-parser"), require("./websocket"), require("express-session"), require("./config"), require("colors"), require("./route/contacts"), require("./db"), require("connect-sequelize"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.path, global.morgan, global.helmet, global.compression, global.http, global.prettyError, global.user, global.bodyParser, global.websocket, global.expressSession, global.config, global.colors, global.contacts, global.db, global.connectSequelize);
        global.server = mod.exports;
    }
})(this, function (exports, _express, _path, _morgan, _helmet, _compression, _http, _prettyError, _user, _bodyParser, _websocket, _expressSession, _config, _colors, _contacts, _db, _connectSequelize) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    var _path2 = _interopRequireDefault(_path);

    var _morgan2 = _interopRequireDefault(_morgan);

    var _helmet2 = _interopRequireDefault(_helmet);

    var _compression2 = _interopRequireDefault(_compression);

    var _http2 = _interopRequireDefault(_http);

    var _prettyError2 = _interopRequireDefault(_prettyError);

    var _user2 = _interopRequireDefault(_user);

    var _bodyParser2 = _interopRequireDefault(_bodyParser);

    var _websocket2 = _interopRequireDefault(_websocket);

    var _expressSession2 = _interopRequireDefault(_expressSession);

    var _config2 = _interopRequireDefault(_config);

    var _colors2 = _interopRequireDefault(_colors);

    var _contacts2 = _interopRequireDefault(_contacts);

    var _db2 = _interopRequireDefault(_db);

    var _connectSequelize2 = _interopRequireDefault(_connectSequelize);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    //nicer error output
    _prettyError2.default.start();

    //main app
    var app = (0, _express2.default)();
    //create a server
    var server = _http2.default.Server(app);

    var router = _express2.default.Router();

    app.use((0, _morgan2.default)(process.env.NODE_ENV === "development" ? "dev" : "combined"));
    app.use((0, _helmet2.default)());
    app.use((0, _compression2.default)());
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    var SequelizeStore = (0, _connectSequelize2.default)(_expressSession2.default);
    app.use((0, _expressSession2.default)({
        secret: _config2.default.secret || "dsjfpsdof",
        store: new SequelizeStore(_db2.default, {}, "Session"),
        proxy: true,
        resave: true,
        saveUninitialized: true
    }));

    app.use("/api/v1", _user2.default);

    //For all other routes please use the Routing framework.
    //This will normally be rest api routes.
    app.use("/api/v1/:id", function (req, res, next) {
        if (req.session.user && req.session.user.username === req.params.id) {
            next();
        } else {
            res.status(403).send({
                success: false
            });
        }
    });

    app.use("/api/v1/:id", _contacts2.default);

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            success: false,
            code: err.status || 500
        });
    });

    app.use(function (req, res) {
        res.status(404);
        res.json({
            success: false,
            code: 404
        });
    });

    exports.default = {
        start: function start() {
            var port = _config2.default.port || 3000;
            server.listen(port, function () {
                var screen = "\n+-----------------------------------------------+\n|                                               |\n|       Chat is Running on Port " + port + "            |\n|                                               |\n|                                               |\n|                      XXXXXXXXX                |\n|                    XXX       XXX              |\n|   +--------->      X  XXX XXX  X  +------>    |\n|                    X  X X X X  X              |\n|              XXXXXXX  XXX XXX  X              |\n|            XX      X           X    +--->     |\n|    +---->  X       XXX       XXX              |\n|           X          XXXXXXXXX                |\n|           X              X                    |\n|           X              X      +------->     |\n|           XXXXXX XXXXXXXXX                    |\n|                                               |\n|                                               |\n+-----------------------------------------------+\n";
                console.log(_colors2.default.green(screen));
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLDBCQUFHLEtBQUg7OztBQUdBLFFBQUksTUFBTSx3QkFBTjs7QUFFSixRQUFJLFNBQVMsZUFBSyxNQUFMLENBQVksR0FBWixDQUFUOztBQUVKLFFBQUksU0FBUyxrQkFBUSxNQUFSLEVBQVQ7O0FBRUosUUFBSSxHQUFKLENBQVEsc0JBQVEsUUFBUSxHQUFSLENBQVksUUFBWixLQUF5QixhQUF6QixHQUF5QyxLQUF6QyxHQUFpRCxVQUFqRCxDQUFoQjtBQUNBLFFBQUksR0FBSixDQUFRLHVCQUFSO0FBQ0EsUUFBSSxHQUFKLENBQVEsNEJBQVI7QUFDQSxRQUFJLEdBQUosQ0FBUSxxQkFBVyxJQUFYLEVBQVI7QUFDQSxRQUFJLEdBQUosQ0FBUSxxQkFBVyxVQUFYLENBQXNCLEVBQUMsVUFBVSxJQUFWLEVBQXZCLENBQVI7QUFDQSxRQUFJLGlCQUFpQix5REFBakI7QUFDSixRQUFJLEdBQUosQ0FBUSw4QkFBUTtBQUNaLGdCQUFRLGlCQUFPLE1BQVAsSUFBaUIsV0FBakI7QUFDUixlQUFPLElBQUksY0FBSixlQUF1QixFQUF2QixFQUEyQixTQUEzQixDQUFQO0FBQ0EsZUFBTyxJQUFQO0FBQ0EsZ0JBQVEsSUFBUjtBQUNBLDJCQUFtQixJQUFuQjtLQUxJLENBQVI7O0FBUUEsUUFBSSxHQUFKLENBQVEsU0FBUjs7OztBQUlBLFFBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBb0I7QUFDdkMsWUFBRyxJQUFJLE9BQUosQ0FBWSxJQUFaLElBQW9CLElBQUksT0FBSixDQUFZLElBQVosQ0FBaUIsUUFBakIsS0FBOEIsSUFBSSxNQUFKLENBQVcsRUFBWCxFQUFlO0FBQ2hFLG1CQURnRTtTQUFwRSxNQUVPO0FBQ0gsZ0JBQUksTUFBSixDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsQ0FBcUI7QUFDakIseUJBQVMsS0FBVDthQURKLEVBREc7U0FGUDtLQURtQixDQUF2Qjs7QUFVQSxRQUFJLEdBQUosQ0FBUSxhQUFSOztBQUVBLFFBQUksR0FBSixDQUFRLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLElBQWhCLEVBQXlCO0FBQzdCLFlBQUksTUFBSixDQUFXLElBQUksTUFBSixJQUFjLEdBQWQsQ0FBWCxDQUQ2QjtBQUU3QixZQUFJLElBQUosQ0FBUztBQUNMLHFCQUFTLEtBQVQ7QUFDQSxrQkFBTSxJQUFJLE1BQUosSUFBYyxHQUFkO1NBRlYsRUFGNkI7S0FBekIsQ0FBUjs7QUFRQSxRQUFJLEdBQUosQ0FBUSxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDbEIsWUFBSSxNQUFKLENBQVcsR0FBWCxFQURrQjtBQUVsQixZQUFJLElBQUosQ0FBUztBQUNMLHFCQUFTLEtBQVQ7QUFDQSxrQkFBTSxHQUFOO1NBRkosRUFGa0I7S0FBZCxDQUFSOztzQkFRZTtBQUNYLGVBQU8saUJBQVc7QUFDZCxnQkFBSSxPQUFPLGlCQUFPLElBQVAsSUFBZSxJQUFmLENBREc7QUFFZCxtQkFBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixZQUFXO0FBQzNCLG9CQUFJLHNKQUdrQix3MEJBSGxCLENBRHVCO0FBc0IzQix3QkFBUSxHQUFSLENBQVksaUJBQU8sS0FBUCxDQUFhLE1BQWIsQ0FBWixFQXRCMkI7YUFBWCxDQUFwQixDQUZjO1NBQVgiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCBoZWxtZXQgZnJvbSBcImhlbG1ldFwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImh0dHBcIjtcbmltcG9ydCBwZSBmcm9tIFwicHJldHR5LWVycm9yXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi9yb3V0ZS91c2VyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB3ZWJzb2NrZXQgZnJvbSBcIi4vd2Vic29ja2V0XCI7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiZXhwcmVzcy1zZXNzaW9uXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiY29sb3JzXCI7XG5pbXBvcnQgY29udGFjdHMgZnJvbSBcIi4vcm91dGUvY29udGFjdHNcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IGNvbm5lY3RTZXF1ZWxpemUgZnJvbSBcImNvbm5lY3Qtc2VxdWVsaXplXCI7XG5cblxuLy9uaWNlciBlcnJvciBvdXRwdXRcbnBlLnN0YXJ0KCk7XG5cbi8vbWFpbiBhcHBcbmxldCBhcHAgPSBleHByZXNzKCk7XG4vL2NyZWF0ZSBhIHNlcnZlclxubGV0IHNlcnZlciA9IGh0dHAuU2VydmVyKGFwcCk7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5hcHAudXNlKGxvZ2dlcigocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiZGV2XCIgOiBcImNvbWJpbmVkXCIpKSk7XG5hcHAudXNlKGhlbG1ldCgpKTtcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcbmxldCBTZXF1ZWxpemVTdG9yZSA9IGNvbm5lY3RTZXF1ZWxpemUoc2Vzc2lvbik7XG5hcHAudXNlKHNlc3Npb24oe1xuICAgIHNlY3JldDogY29uZmlnLnNlY3JldCB8fCBcImRzamZwc2RvZlwiLFxuICAgIHN0b3JlOiBuZXcgU2VxdWVsaXplU3RvcmUoZGIsIHt9LCBcIlNlc3Npb25cIiksXG4gICAgcHJveHk6IHRydWUsXG4gICAgcmVzYXZlOiB0cnVlLFxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlXG59KSk7XG5cbmFwcC51c2UoXCIvYXBpL3YxXCIsIHVzZXIpO1xuXG4vL0ZvciBhbGwgb3RoZXIgcm91dGVzIHBsZWFzZSB1c2UgdGhlIFJvdXRpbmcgZnJhbWV3b3JrLlxuLy9UaGlzIHdpbGwgbm9ybWFsbHkgYmUgcmVzdCBhcGkgcm91dGVzLlxuYXBwLnVzZShcIi9hcGkvdjEvOmlkXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGlmKHJlcS5zZXNzaW9uLnVzZXIgJiYgcmVxLnNlc3Npb24udXNlci51c2VybmFtZSA9PT0gcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICBuZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmFwcC51c2UoXCIvYXBpL3YxLzppZFwiLCBjb250YWN0cyk7XG5cbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcbiAgICByZXMuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBjb2RlOiBlcnIuc3RhdHVzIHx8IDUwMCxcbiAgICB9KTtcbn0pO1xuXG5hcHAudXNlKChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICByZXMuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBjb2RlOiA0MDQsXG4gICAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBvcnQgPSBjb25maWcucG9ydCB8fCAzMDAwO1xuICAgICAgICBzZXJ2ZXIubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHNjcmVlbiA9IGBcbistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgQ2hhdCBpcyBSdW5uaW5nIG9uIFBvcnQgJHtwb3J0fSAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgWFhYWFhYWFhYICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgIFhYWCAgICAgICBYWFggICAgICAgICAgICAgIHxcbnwgICArLS0tLS0tLS0tPiAgICAgIFggIFhYWCBYWFggIFggICstLS0tLS0+ICAgIHxcbnwgICAgICAgICAgICAgICAgICAgIFggIFggWCBYIFggIFggICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgIFhYWFhYWFggIFhYWCBYWFggIFggICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICBYWCAgICAgIFggICAgICAgICAgIFggICAgKy0tLT4gICAgIHxcbnwgICAgKy0tLS0+ICBYICAgICAgIFhYWCAgICAgICBYWFggICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIFggICAgICAgICAgWFhYWFhYWFhYICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIFggICAgICAgICAgICAgIFggICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIFggICAgICAgICAgICAgIFggICAgICArLS0tLS0tLT4gICAgIHxcbnwgICAgICAgICAgIFhYWFhYWCBYWFhYWFhYWFggICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbmA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xvcnMuZ3JlZW4oc2NyZWVuKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
