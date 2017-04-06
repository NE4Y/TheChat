(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../dispatcher.js", "events", "../constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../dispatcher.js"), require("events"), require("../constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.dispatcher, global.events, global.constants);
        global.RoomStore = mod.exports;
    }
})(this, function (exports, _dispatcher, _events, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

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

    var RoomStore = function (_EventEmitter) {
        _inherits(RoomStore, _EventEmitter);

        function RoomStore() {
            _classCallCheck(this, RoomStore);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(RoomStore).call(this));
        }

        _createClass(RoomStore, [{
            key: "getRooms",
            value: function getRooms(user) {}
        }, {
            key: "createRoom",
            value: function createRoom(owner) {}
        }, {
            key: "addUserToRoom",
            value: function addUserToRoom(user, owner) {}
        }, {
            key: "removeUserFromRoom",
            value: function removeUserFromRoom(user, owner) {}
        }, {
            key: "handleActions",
            value: function handleActions(action) {
                switch (action.type) {
                    case _constants.CREATE_ROOM:
                        {
                            this.createRoom(action.owner);
                            break;
                        };
                    case _constants.ADD_USER_TO_ROOM:
                        {
                            this.addUserToRoom(action.user, action.owner);
                        };
                    case remove_user_from_room:
                        {
                            this.removeuserfromroom(action.user, action.owner);
                            break;
                        }
                }
            }
        }]);

        return RoomStore;
    }({ EventEmitter: _events.EventEmitter });

    var roomStore = new RoomStore();
    _dispatcher2.default.register(roomStore.handleActions.bind(roomStore));

    exports.default = configStore;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9Sb29tU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0JNOzs7QUFDRixpQkFERSxTQUNGLEdBQWM7a0NBRFosV0FDWTs7MEVBRFosdUJBQ1k7U0FBZDs7cUJBREU7O3FDQUtPLE1BQU07Ozt1Q0FJSixPQUFPOzs7MENBSUosTUFBTSxPQUFPOzs7K0NBSVIsTUFBTSxPQUFPOzs7MENBSWxCLFFBQVE7QUFDbEIsd0JBQU8sT0FBTyxJQUFQO0FBQ0g7QUFBa0I7QUFDZCxpQ0FBSyxVQUFMLENBQWdCLE9BQU8sS0FBUCxDQUFoQixDQURjO0FBRWQsa0NBRmM7eUJBQWxCO0FBREosb0RBS0k7QUFBdUI7QUFDbkIsaUNBQUssYUFBTCxDQUFtQixPQUFPLElBQVAsRUFBYSxPQUFPLEtBQVAsQ0FBaEMsQ0FEbUI7eUJBQXZCO0FBTEoseUJBUVMscUJBQUw7QUFBNEI7QUFDeEIsaUNBQUssa0JBQUwsQ0FBd0IsT0FBTyxJQUFQLEVBQWEsT0FBTyxLQUFQLENBQXJDLENBRHdCO0FBRXhCLGtDQUZ3Qjt5QkFBNUI7QUFSSixpQkFEa0I7Ozs7ZUFyQnBCO01BQWtCLEVBQUMsa0NBQUQ7O0FBdUN4QixRQUFNLFlBQVksSUFBSSxTQUFKLEVBQVo7QUFDTix5QkFBVyxRQUFYLENBQW9CLFVBQVUsYUFBVixDQUF3QixJQUF4QixDQUE2QixTQUE3QixDQUFwQjs7c0JBRWUiLCJmaWxlIjoic3RvcmVzL1Jvb21TdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ET1xuICogaW1wbGVtZW50IGEgZGF0YWJhc2UgY29ubmVjdGlvbi5cbiAqIEV2ZXJ5IHJvb20gc2hvdWxkIGJlIHNhdmVkIHBlcnNpc3RlbnRseS5cbiAqL1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXIuanNcIjtcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQge0NSRUFURV9ST09NLCBBRERfVVNFUl9UT19ST09NLCBSRU1PVkVfVVNFUl9GUk9NX1JPT019IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBIHN0b3JlIG9mIGFsbCByb29tcy5cbiAqIEluIGV2ZXJ5IHJvb20gY2FuIGJlIG11bHRpcGxlIHVzZXJzLlxuICogVXNlIHRoaXMgc3RvcmUgdG8gZ3JvdXAgdXNlcnMuXG4gKlxuICogZXZlbnRzOlxuICogLSBjcmVhdGVkXG4gKiAtIGNoYW5nZVxuICovXG5jbGFzcyBSb29tU3RvcmUgZXh0ZW5kcyB7RXZlbnRFbWl0dGVyfSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0Um9vbXModXNlcikge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVSb29tKG93bmVyKSB7XG5cbiAgICB9XG5cbiAgICBhZGRVc2VyVG9Sb29tKHVzZXIsIG93bmVyKSB7XG5cbiAgICB9XG5cbiAgICByZW1vdmVVc2VyRnJvbVJvb20odXNlciwgb3duZXIpIHtcblxuICAgIH1cblxuICAgIGhhbmRsZUFjdGlvbnMoYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDUkVBVEVfUk9PTToge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm9vbShhY3Rpb24ub3duZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgQUREX1VTRVJfVE9fUk9PTToge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVXNlclRvUm9vbShhY3Rpb24udXNlciwgYWN0aW9uLm93bmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIHJlbW92ZV91c2VyX2Zyb21fcm9vbToge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZldXNlcmZyb21yb29tKGFjdGlvbi51c2VyLCBhY3Rpb24ub3duZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0IHJvb21TdG9yZSA9IG5ldyBSb29tU3RvcmU7XG5kaXNwYXRjaGVyLnJlZ2lzdGVyKHJvb21TdG9yZS5oYW5kbGVBY3Rpb25zLmJpbmQocm9vbVN0b3JlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1N0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
