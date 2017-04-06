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
        global.rooms = mod.exports;
    }
})(this, function (exports, _dispatcher, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createRoom = createRoom;
    exports.addUserToRoom = addUserToRoom;
    exports.removeUserFromRoom = removeUserFromRoom;

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function createRoom(owner) {
        _dispatcher2.default.dispatch({
            type: _constants.CREATE_ROOM,
            owner: owner
        });
    }

    function addUserToRoom(user, owner) {
        _dispatcher2.default.dispatch({
            type: _constants.ADD_USER_TO_ROOM,
            roomId: roomId,
            owner: owner
        });
    }

    function removeUserFromRoom(user, owner) {
        _dispatcher2.default.dispatch({
            type: _constants.REMOVE_USER_FROM_ROOM,
            user: user,
            owner: owner
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvcm9vbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR2dCO1lBT0E7WUFRQTs7Ozs7Ozs7OztBQWZULGFBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQjtBQUM5Qiw2QkFBVyxRQUFYLENBQW9CO0FBQ2hCLHdDQURnQjtBQUVoQix3QkFGZ0I7U0FBcEIsRUFEOEI7S0FBM0I7O0FBT0EsYUFBUyxhQUFULENBQXVCLElBQXZCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ3ZDLDZCQUFXLFFBQVgsQ0FBb0I7QUFDaEIsNkNBRGdCO0FBRWhCLDBCQUZnQjtBQUdoQix3QkFIZ0I7U0FBcEIsRUFEdUM7S0FBcEM7O0FBUUEsYUFBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQyxLQUFsQyxFQUF5QztBQUM1Qyw2QkFBVyxRQUFYLENBQW9CO0FBQ2hCLGtEQURnQjtBQUVoQixzQkFGZ0I7QUFHaEIsd0JBSGdCO1NBQXBCLEVBRDRDO0tBQXpDIiwiZmlsZSI6ImFjdGlvbnMvcm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuaW1wb3J0IHtBRERfVVNFUl9UT19ST09NLCBSRU1PVkVfVVNFUl9GUk9NX1JPT00sIENSRUFURV9ST09NfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb29tKG93bmVyKSB7XG4gICAgZGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENSRUFURV9ST09NLFxuICAgICAgICBvd25lclxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlclRvUm9vbSh1c2VyLCBvd25lcikge1xuICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfVVNFUl9UT19ST09NLFxuICAgICAgICByb29tSWQsXG4gICAgICAgIG93bmVyXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyRnJvbVJvb20odXNlciwgb3duZXIpIHtcbiAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX1VTRVJfRlJPTV9ST09NLFxuICAgICAgICB1c2VyLFxuICAgICAgICBvd25lclxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
