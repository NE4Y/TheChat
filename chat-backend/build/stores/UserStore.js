(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "events", "../dispatcher", "../constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("events"), require("../dispatcher"), require("../constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.events, global.dispatcher, global.constants);
        global.UserStore = mod.exports;
    }
})(this, function (exports, _events, _dispatcher, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

    var _constants2 = _interopRequireDefault(_constants);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var UserStore = function (_EventEmitter) {
        _inherits(UserStore, _EventEmitter);

        function UserStore() {
            _classCallCheck(this, UserStore);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserStore).call(this));

            _this.connectedUsers = {};
            return _this;
        }

        _createClass(UserStore, [{
            key: "addConnectedUser",
            value: function addConnectedUser(user) {
                console.log("user " + user.username + " came online");
                this.connectedUsers[user.username] = user;
                this.emit("userConnect", user);
            }
        }, {
            key: "removeConnectedUser",
            value: function removeConnectedUser(user) {
                console.log("user " + user.username + " went offline");
                delete this.connectedUsers[user.username];
                this.emit("userDisconnect", user);
            }
        }, {
            key: "handleActions",
            value: function handleActions(action) {
                switch (action.type) {
                    case _constants2.default.USER_CONNECT:
                        {

                            this.addConnectedUser(action.user);
                            break;
                        }
                    case _constants2.default.USER_DISCONNECT:
                        {

                            this.removeConnectedUser(action.user);
                            break;
                        }
                }
            }
        }]);

        return UserStore;
    }(_events.EventEmitter);

    var userStore = new UserStore();
    _dispatcher2.default.register(userStore.handleActions.bind(userStore));

    exports.default = userStore;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9Vc2VyU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFZTTs7O0FBQ0YsaUJBREUsU0FDRixHQUFjO2tDQURaLFdBQ1k7OytFQURaLHVCQUNZOztBQUVWLGtCQUFLLGNBQUwsR0FBc0IsRUFBdEIsQ0FGVTs7U0FBZDs7cUJBREU7OzZDQU1lLE1BQU07QUFDbkIsd0JBQVEsR0FBUixXQUFvQixLQUFLLFFBQUwsaUJBQXBCLEVBRG1CO0FBRW5CLHFCQUFLLGNBQUwsQ0FBb0IsS0FBSyxRQUFMLENBQXBCLEdBQXFDLElBQXJDLENBRm1CO0FBR25CLHFCQUFLLElBQUwsQ0FBVSxhQUFWLEVBQXlCLElBQXpCLEVBSG1COzs7O2dEQU1ILE1BQU07QUFDdEIsd0JBQVEsR0FBUixXQUFvQixLQUFLLFFBQUwsa0JBQXBCLEVBRHNCO0FBRXRCLHVCQUFPLEtBQUssY0FBTCxDQUFvQixLQUFLLFFBQUwsQ0FBM0IsQ0FGc0I7QUFHdEIscUJBQUssSUFBTCxDQUFVLGdCQUFWLEVBQTRCLElBQTVCLEVBSHNCOzs7OzBDQU1aLFFBQVE7QUFDbEIsd0JBQU8sT0FBTyxJQUFQO0FBQ0gseUJBQUssb0JBQVUsWUFBVjtBQUF3Qjs7QUFFekIsaUNBQUssZ0JBQUwsQ0FBc0IsT0FBTyxJQUFQLENBQXRCLENBRnlCO0FBR3pCLGtDQUh5Qjt5QkFBN0I7QUFESix5QkFNUyxvQkFBVSxlQUFWO0FBQTJCOztBQUU1QixpQ0FBSyxtQkFBTCxDQUF5QixPQUFPLElBQVAsQ0FBekIsQ0FGNEI7QUFHNUIsa0NBSDRCO3lCQUFoQztBQU5KLGlCQURrQjs7OztlQWxCcEI7OztBQWlDTixRQUFNLFlBQVksSUFBSSxTQUFKLEVBQVo7QUFDTix5QkFBVyxRQUFYLENBQW9CLFVBQVUsYUFBVixDQUF3QixJQUF4QixDQUE2QixTQUE3QixDQUFwQjs7c0JBRWUiLCJmaWxlIjoic3RvcmVzL1VzZXJTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQSBzdG9yZSB0aGUgY29ubmVjdGVkIHVzZXJzIGFyZSB0cmFja2VkLlxuICpcbiAqIEV2ZW50czpcbiAqIC0gdXNlckNvbm5lY3RcbiAqIC0gdXNlckRpc2Nvbm5lY3RcbiAqXG4gKi9cbmNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkVXNlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRDb25uZWN0ZWRVc2VyKHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHVzZXIgJHt1c2VyLnVzZXJuYW1lfSBjYW1lIG9ubGluZWApO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZFVzZXJzW3VzZXIudXNlcm5hbWVdID0gdXNlcjtcbiAgICAgICAgdGhpcy5lbWl0KFwidXNlckNvbm5lY3RcIiwgdXNlcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ29ubmVjdGVkVXNlcih1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1c2VyICR7dXNlci51c2VybmFtZX0gd2VudCBvZmZsaW5lYCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbm5lY3RlZFVzZXJzW3VzZXIudXNlcm5hbWVdO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1c2VyRGlzY29ubmVjdFwiLCB1c2VyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBY3Rpb25zKGFjdGlvbikge1xuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLlVTRVJfQ09OTkVDVDoge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0ZWRVc2VyKGFjdGlvbi51c2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLlVTRVJfRElTQ09OTkVDVDoge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDb25uZWN0ZWRVc2VyKGFjdGlvbi51c2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHVzZXJTdG9yZSA9IG5ldyBVc2VyU3RvcmU7XG5kaXNwYXRjaGVyLnJlZ2lzdGVyKHVzZXJTdG9yZS5oYW5kbGVBY3Rpb25zLmJpbmQodXNlclN0b3JlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
