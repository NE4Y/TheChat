(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../db", "sequelize", "./User"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../db"), require("sequelize"), require("./User"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.db, global.sequelize, global.User);
        global.Room = mod.exports;
    }
})(this, function (exports, _db, _sequelize, _User) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _db2 = _interopRequireDefault(_db);

    var _sequelize2 = _interopRequireDefault(_sequelize);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Room = _db2.default.define("Room", {
        id: {
            type: _sequelize2.default.INTEGER,
            primaryKey: true
        },
        name: {
            type: _sequelize2.default.STRING
        }
    }, {
        instanceMethods: {
            addUser: function addUser(user) {
                var _this = this;

                user.getDb().then(function (u) {
                    _this.addUser(u.username);
                });
            }
        }
    });

    var UserRoom = _db2.default.define("UserRoom", {});
    Room.belongsToMany(_User.user, { through: UserProject });
    _User.user.belongsToMany(Room, { through: UserProject });

    exports.default = Room;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL1Jvb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxRQUFNLE9BQU8sYUFBRyxNQUFILENBQVUsTUFBVixFQUFrQjtBQUMzQixZQUFJO0FBQ0Esa0JBQU0sb0JBQVUsT0FBVjtBQUNOLHdCQUFZLElBQVo7U0FGSjtBQUlBLGNBQU07QUFDRixrQkFBTSxvQkFBVSxNQUFWO1NBRFY7S0FMUyxFQVFWO0FBQ0MseUJBQWlCO0FBQ2IscUJBQVMsaUJBQVMsSUFBVCxFQUFlOzs7QUFDcEIscUJBQUssS0FBTCxHQUFhLElBQWIsQ0FBa0IsYUFBSztBQUNuQiwwQkFBSyxPQUFMLENBQWEsRUFBRSxRQUFGLENBQWIsQ0FEbUI7aUJBQUwsQ0FBbEIsQ0FEb0I7YUFBZjtTQURiO0tBVFMsQ0FBUDs7QUFrQk4sUUFBTSxXQUFXLGFBQUcsTUFBSCxDQUFVLFVBQVYsRUFBc0IsRUFBdEIsQ0FBWDtBQUVOLFNBQUssYUFBTCxhQUF5QixFQUFDLFNBQVMsV0FBVCxFQUExQjtBQUNBLGVBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixFQUFDLFNBQVMsV0FBVCxFQUExQjs7c0JBRWUiLCJmaWxlIjoibW9kZWwvUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiLi4vZGJcIjtcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHt1c2VyfSBmcm9tIFwiLi9Vc2VyXCI7XG5cbmNvbnN0IFJvb20gPSBkYi5kZWZpbmUoXCJSb29tXCIsIHtcbiAgICBpZDoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfVxufSwge1xuICAgIGluc3RhbmNlTWV0aG9kczoge1xuICAgICAgICBhZGRVc2VyOiBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICB1c2VyLmdldERiKCkudGhlbih1ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFVzZXIodS51c2VybmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jb25zdCBVc2VyUm9vbSA9IGRiLmRlZmluZShcIlVzZXJSb29tXCIsIHtcbn0pO1xuUm9vbS5iZWxvbmdzVG9NYW55KHVzZXIsIHt0aHJvdWdoOiBVc2VyUHJvamVjdCB9KTtcbnVzZXIuYmVsb25nc1RvTWFueShSb29tLCB7dGhyb3VnaDogVXNlclByb2plY3QgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvb207XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
