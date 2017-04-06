(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "ws", "./stores/UserStore", "./actions/user", "request"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("ws"), require("./stores/UserStore"), require("./actions/user"), require("request"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ws, global.UserStore, global.user, global.request);
        global.websocket = mod.exports;
    }
})(this, function (exports, _ws, _UserStore, _user, _request) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _UserStore2 = _interopRequireDefault(_UserStore);

    var _request2 = _interopRequireDefault(_request);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function verifyAuth(cookie, clientHandler, server) {
        var options = {
            url: 'http://localhost:3001/api/v1/isAuthed',
            headers: {
                'User-Agent': 'request',
                'Cookie': cookie
            }
        };

        _request2.default.post(options, function (error, response, body) {
            var _JSON$parse = JSON.parse(body);

            var user = _JSON$parse.user;
            var success = _JSON$parse.success;

            if (!success) {
                console.log("Close connection to client due to no auth");
                clientHandler.close();
            } else {
                console.log("connect user: " + user);
                (0, _user.connect)({ username: user });
            }

            clientHandler.on('close', function close() {
                console.log("connection closed:" + user);
                (0, _user.disconnect)({ username: user });
            });
        });
    }

    var wss = new _ws.Server({ port: 3434 });
    _UserStore2.default.on("userConnect", function (user) {
        wss.clients.forEach(function (client) {
            client.send(JSON.stringify({
                update: true,
                type: "USER_CONNECTED",
                username: user.username
            }));
        });
    });

    _UserStore2.default.on("userDisconnect", function (user) {
        console.log("disconnect");
        wss.clients.forEach(function (client) {
            client.send(JSON.stringify({
                update: true,
                type: "USER_DISCONNECTED",
                username: user.username
            }));
        });
    });

    wss.broadcast = function (data) {
        for (var i in this.clients) {
            try {
                this.clients[i].send(data);
            } catch (e) {}
        }
    };

    wss.on('connection', function (ws) {
        // Authenticate user
        verifyAuth(ws.upgradeReq.headers.cookie, ws, wss);

        ws.on('message', function (message) {
            console.log('received: %s', message);
            wss.broadcast(message);
        });
    });

    exports.default = wss;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnNvY2tldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLGFBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixhQUE1QixFQUEyQyxNQUEzQyxFQUFtRDtBQUMvQyxZQUFJLFVBQVU7QUFDVixpQkFBSyx1Q0FBTDtBQUNBLHFCQUFTO0FBQ0wsOEJBQWMsU0FBZDtBQUNBLDBCQUFVLE1BQVY7YUFGSjtTQUZBLENBRDJDOztBQVMvQywwQkFBUSxJQUFSLENBQWEsT0FBYixFQUFzQixVQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLElBQWxCLEVBQTJCOzhCQUN2QixLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBRHVCOztnQkFDeEMsd0JBRHdDO2dCQUNsQyw4QkFEa0M7O0FBRTdDLGdCQUFHLENBQUMsT0FBRCxFQUFVO0FBQ1Qsd0JBQVEsR0FBUixDQUFZLDJDQUFaLEVBRFM7QUFFVCw4QkFBYyxLQUFkLEdBRlM7YUFBYixNQUlLO0FBQ0Qsd0JBQVEsR0FBUixDQUFZLG1CQUFtQixJQUFuQixDQUFaLENBREM7QUFFRCxtQ0FBUSxFQUFDLFVBQVUsSUFBVixFQUFULEVBRkM7YUFKTDs7QUFTQSwwQkFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFNBQVMsS0FBVCxHQUFpQjtBQUN2Qyx3QkFBUSxHQUFSLENBQVksdUJBQXVCLElBQXZCLENBQVosQ0FEdUM7QUFFdkMsc0NBQVcsRUFBQyxVQUFVLElBQVYsRUFBWixFQUZ1QzthQUFqQixDQUExQixDQVg2QztTQUEzQixDQUF0QixDQVQrQztLQUFuRDs7QUE0QkEsUUFBSSxNQUFNLGVBQVcsRUFBQyxNQUFNLElBQU4sRUFBWixDQUFOO0FBQ0osd0JBQVUsRUFBVixDQUFhLGFBQWIsRUFBNEIsZ0JBQVE7QUFDaEMsWUFBSSxPQUFKLENBQVksT0FBWixDQUFvQixrQkFBVTtBQUMxQixtQkFBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWU7QUFDdkIsd0JBQVEsSUFBUjtBQUNBLHNCQUFNLGdCQUFOO0FBQ0EsMEJBQVUsS0FBSyxRQUFMO2FBSEYsQ0FBWixFQUQwQjtTQUFWLENBQXBCLENBRGdDO0tBQVIsQ0FBNUI7O0FBVUEsd0JBQVUsRUFBVixDQUFhLGdCQUFiLEVBQStCLGdCQUFRO0FBQ25DLGdCQUFRLEdBQVIsQ0FBWSxZQUFaLEVBRG1DO0FBRW5DLFlBQUksT0FBSixDQUFZLE9BQVosQ0FBb0Isa0JBQVU7QUFDMUIsbUJBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlO0FBQ3ZCLHdCQUFRLElBQVI7QUFDQSxzQkFBTSxtQkFBTjtBQUNBLDBCQUFVLEtBQUssUUFBTDthQUhGLENBQVosRUFEMEI7U0FBVixDQUFwQixDQUZtQztLQUFSLENBQS9COztBQVlBLFFBQUksU0FBSixHQUFnQixVQUFTLElBQVQsRUFBZTtBQUMzQixhQUFJLElBQUksQ0FBSixJQUFTLEtBQUssT0FBTCxFQUFjO0FBQ3hCLGdCQUFJO0FBQ0EscUJBQUssT0FBTCxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsRUFEQTthQUFKLENBR0MsT0FBTSxDQUFOLEVBQVMsRUFBVDtTQUpKO0tBRFk7O0FBWWhCLFFBQUksRUFBSixDQUFPLFlBQVAsRUFBcUIsVUFBUyxFQUFULEVBQWE7O0FBRTlCLG1CQUFXLEdBQUcsVUFBSCxDQUFjLE9BQWQsQ0FBc0IsTUFBdEIsRUFBOEIsRUFBekMsRUFBNkMsR0FBN0MsRUFGOEI7O0FBSTlCLFdBQUcsRUFBSCxDQUFNLFNBQU4sRUFBaUIsVUFBUyxPQUFULEVBQWtCO0FBQy9CLG9CQUFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLE9BQTVCLEVBRCtCO0FBRS9CLGdCQUFJLFNBQUosQ0FBYyxPQUFkLEVBRitCO1NBQWxCLENBQWpCLENBSjhCO0tBQWIsQ0FBckI7O3NCQWNlIiwiZmlsZSI6IndlYnNvY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyfSBmcm9tIFwid3NcIjtcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSBcIi4vc3RvcmVzL1VzZXJTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0LCBkaXNjb25uZWN0fSBmcm9tIFwiLi9hY3Rpb25zL3VzZXJcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCJyZXF1ZXN0XCI7XG5cbmZ1bmN0aW9uIHZlcmlmeUF1dGgoY29va2llLCBjbGllbnRIYW5kbGVyLCBzZXJ2ZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pc0F1dGhlZCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdVc2VyLUFnZW50JzogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgJ0Nvb2tpZSc6IGNvb2tpZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdC5wb3N0KG9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgbGV0IHt1c2VyLCBzdWNjZXNzfSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgIGlmKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsb3NlIGNvbm5lY3Rpb24gdG8gY2xpZW50IGR1ZSB0byBubyBhdXRoXCIpO1xuICAgICAgICAgICAgY2xpZW50SGFuZGxlci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0IHVzZXI6IFwiICsgdXNlcik7XG4gICAgICAgICAgICBjb25uZWN0KHt1c2VybmFtZTogdXNlcn0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpZW50SGFuZGxlci5vbignY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBjbG9zZWQ6XCIgKyB1c2VyKTtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Qoe3VzZXJuYW1lOiB1c2VyfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn1cblxudmFyIHdzcyA9IG5ldyBTZXJ2ZXIoe3BvcnQ6IDM0MzR9KTtcblVzZXJTdG9yZS5vbihcInVzZXJDb25uZWN0XCIsIHVzZXIgPT4ge1xuICAgIHdzcy5jbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcbiAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogXCJVU0VSX0NPTk5FQ1RFRFwiLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWVcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufSk7XG5cblVzZXJTdG9yZS5vbihcInVzZXJEaXNjb25uZWN0XCIsIHVzZXIgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdFwiKTtcbiAgICB3c3MuY2xpZW50cy5mb3JFYWNoKGNsaWVudCA9PiB7XG4gICAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFwiVVNFUl9ESVNDT05ORUNURURcIixcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn0pO1xuXG5cbndzcy5icm9hZGNhc3QgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZm9yKHZhciBpIGluIHRoaXMuY2xpZW50cykge1xuICAgICAgIHRyeSB7XG4gICAgICAgICAgIHRoaXMuY2xpZW50c1tpXS5zZW5kKGRhdGEpO1xuICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbndzcy5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHdzKSB7XG4gICAgLy8gQXV0aGVudGljYXRlIHVzZXJcbiAgICB2ZXJpZnlBdXRoKHdzLnVwZ3JhZGVSZXEuaGVhZGVycy5jb29raWUsIHdzLCB3c3MpO1xuXG4gICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3NzLmJyb2FkY2FzdChtZXNzYWdlKTtcbiAgICB9KTtcblxuXG59KTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHdzcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
