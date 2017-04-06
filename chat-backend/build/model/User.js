(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "crypto", "../db", "sequelize", "../config", "colors", "../stores/UserStore"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("crypto"), require("../db"), require("sequelize"), require("../config"), require("colors"), require("../stores/UserStore"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.crypto, global.db, global.sequelize, global.config, global.colors, global.UserStore);
        global.User = mod.exports;
    }
})(this, function (exports, _crypto, _db, _sequelize, _config, _colors, _UserStore) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Contact = undefined;

    var _crypto2 = _interopRequireDefault(_crypto);

    var _db2 = _interopRequireDefault(_db);

    var _sequelize2 = _interopRequireDefault(_sequelize);

    var _config2 = _interopRequireDefault(_config);

    var _colors2 = _interopRequireDefault(_colors);

    var _UserStore2 = _interopRequireDefault(_UserStore);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var standardAdminPassword = _config2.default.adminPassword || "chatchatchat";
    var standardAdminUsername = _config2.default.adminUsername || "admin";
    var minPasswordLength = _config2.default.minPasswordLength || 10;

    //Database connection to the users
    var User = _db2.default.define("users", {
        username: {
            type: _sequelize2.default.STRING,
            primaryKey: true,
            set: function set(val) {
                if (val.trim() === "") throw "incorrect username";
                this.setDataValue("username", val);
            }
        },
        email: {
            type: _sequelize2.default.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: _sequelize2.default.STRING,
            set: function set(val) {
                if (val.length < minPasswordLength) throw "password to short";
                this.setDataValue("password", _crypto2.default.createHash("md5").update(val).digest("hex"));
            }
        },
        admin: {
            type: _sequelize2.default.BOOLEAN,
            defaultValue: false
        }
    }, {
        instanceMethods: {
            checkPassword: function checkPassword(password) {
                return this.password === _crypto2.default.createHash("md5").update(password).digest("hex");
            },
            pushContact: function pushContact(username) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    User.findOne({ where: { username: username } }).then(function (result) {
                        if (!result) {
                            console.log("user doesnt exist");
                            reject({ reason: "user doesnt exist" });
                        } else {
                            Contact.findOne({ where: { userUsername: _this.dataValues.username, contactName: username } }).then(function (result) {
                                if (result) {
                                    reject({ reason: "contact exists" });
                                } else {

                                    Contact.create({ contactName: username }).then(function (contact) {
                                        _this.addContact(contact).then(resolve).catch(reject);
                                    }).catch(reject);
                                }
                            }).catch(reject);
                        }
                    }).catch(reject);
                });
            }
        },
        freezeTableName: true
    });

    var Contact = _db2.default.define("contact", {
        contactName: {
            type: _sequelize2.default.STRING
        }
    }, {
        timestamps: false
    });
    User.hasMany(Contact, { as: "Contacts" });

    Contact.sync();

    //Always update or create the admin user.
    User.sync().then(function () {
        User.upsert({
            username: standardAdminUsername,
            password: standardAdminPassword,
            admin: true
        }).then(function () {
            console.log("updated admin user");
            if (!_config2.default.standardPassword || _config2.default.standardPassword === standardAdminPassword) console.warn(_colors2.default.yellow.bold("Warning: Please reset the standard password of the admin user!!!"));
        });
    });

    exports.default = User;
    exports.Contact = Contact;
});
//# sourceMappingURL=data:application/json;base64,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QjtBQUNqQyxxQkFBYTtBQUNULGtCQUFNLG9CQUFVLE1BQVY7U0FEVjtLQURZLEVBSWI7QUFDQyxvQkFBWSxLQUFaO0tBTFksQ0FBVjtBQU9OLFNBQUssT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBQyxJQUFJLFVBQUosRUFBdkI7O0FBRUEsWUFBUSxJQUFSOzs7QUFHQSxTQUFLLElBQUwsR0FBWSxJQUFaLENBQWlCLFlBQU07QUFDbkIsYUFBSyxNQUFMLENBQVk7QUFDUixzQkFBVSxxQkFBVjtBQUNBLHNCQUFVLHFCQUFWO0FBQ0EsbUJBQU8sSUFBUDtTQUhKLEVBSUcsSUFKSCxDQUlRLFlBQU07QUFDVixvQkFBUSxHQUFSLENBQVksb0JBQVosRUFEVTtBQUVWLGdCQUFJLENBQUMsaUJBQU8sZ0JBQVAsSUFBMkIsaUJBQU8sZ0JBQVAsS0FBNEIscUJBQTVCLEVBQzVCLFFBQVEsSUFBUixDQUFhLGlCQUFPLE1BQVAsQ0FBYyxJQUFkLENBQW1CLGtFQUFuQixDQUFiLEVBREo7U0FGSSxDQUpSLENBRG1CO0tBQU4sQ0FBakI7O3NCQVllO1lBQ1AiLCJmaWxlIjoibW9kZWwvVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi9kYlwiO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcImNvbG9yc1wiO1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL1VzZXJTdG9yZVwiO1xuXG5jb25zdCBzdGFuZGFyZEFkbWluUGFzc3dvcmQgPSBjb25maWcuYWRtaW5QYXNzd29yZCB8fCBcImNoYXRjaGF0Y2hhdFwiO1xuY29uc3Qgc3RhbmRhcmRBZG1pblVzZXJuYW1lID0gY29uZmlnLmFkbWluVXNlcm5hbWUgfHwgXCJhZG1pblwiO1xuY29uc3QgbWluUGFzc3dvcmRMZW5ndGggPSBjb25maWcubWluUGFzc3dvcmRMZW5ndGggfHwgMTA7XG5cbi8vRGF0YWJhc2UgY29ubmVjdGlvbiB0byB0aGUgdXNlcnNcbmNvbnN0IFVzZXIgPSBkYi5kZWZpbmUoXCJ1c2Vyc1wiLCB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsLnRyaW0oKSA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICB0aHJvdyBcImluY29ycmVjdCB1c2VybmFtZVwiO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhVmFsdWUoXCJ1c2VybmFtZVwiLCB2YWwpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoIDwgbWluUGFzc3dvcmRMZW5ndGgpIHRocm93IFwicGFzc3dvcmQgdG8gc2hvcnRcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YVZhbHVlKFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBjcnlwdG8uY3JlYXRlSGFzaChcIm1kNVwiKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHZhbClcbiAgICAgICAgICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICB9XG59LCB7XG4gICAgaW5zdGFuY2VNZXRob2RzOiB7XG4gICAgICAgIGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uIChwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmQgPT09IGNyeXB0by5jcmVhdGVIYXNoKFwibWQ1XCIpLnVwZGF0ZShwYXNzd29yZCkuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICB9LFxuICAgICAgICBwdXNoQ29udGFjdDogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIFVzZXIuZmluZE9uZSh7d2hlcmU6IHt1c2VybmFtZX19KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBkb2VzbnQgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3JlYXNvbjogXCJ1c2VyIGRvZXNudCBleGlzdFwifSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0LmZpbmRPbmUoe3doZXJlOiB7dXNlclVzZXJuYW1lOiB0aGlzLmRhdGFWYWx1ZXMudXNlcm5hbWUsIGNvbnRhY3ROYW1lOiB1c2VybmFtZX19KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3JlYXNvbjogXCJjb250YWN0IGV4aXN0c1wifSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdC5jcmVhdGUoe2NvbnRhY3ROYW1lOiB1c2VybmFtZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb250YWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbnRhY3QoY29udGFjdCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZVxufSk7XG5cbmNvbnN0IENvbnRhY3QgPSBkYi5kZWZpbmUoXCJjb250YWN0XCIsIHtcbiAgICBjb250YWN0TmFtZToge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IGZhbHNlXG59KTtcblVzZXIuaGFzTWFueShDb250YWN0LCB7YXM6IFwiQ29udGFjdHNcIn0pO1xuXG5Db250YWN0LnN5bmMoKTtcblxuLy9BbHdheXMgdXBkYXRlIG9yIGNyZWF0ZSB0aGUgYWRtaW4gdXNlci5cblVzZXIuc3luYygpLnRoZW4oKCkgPT4ge1xuICAgIFVzZXIudXBzZXJ0KHtcbiAgICAgICAgdXNlcm5hbWU6IHN0YW5kYXJkQWRtaW5Vc2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHN0YW5kYXJkQWRtaW5QYXNzd29yZCxcbiAgICAgICAgYWRtaW46IHRydWVcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIGFkbWluIHVzZXJcIik7XG4gICAgICAgIGlmICghY29uZmlnLnN0YW5kYXJkUGFzc3dvcmQgfHwgY29uZmlnLnN0YW5kYXJkUGFzc3dvcmQgPT09IHN0YW5kYXJkQWRtaW5QYXNzd29yZClcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb2xvcnMueWVsbG93LmJvbGQoXCJXYXJuaW5nOiBQbGVhc2UgcmVzZXQgdGhlIHN0YW5kYXJkIHBhc3N3b3JkIG9mIHRoZSBhZG1pbiB1c2VyISEhXCIpKTtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuZXhwb3J0IHtDb250YWN0fVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
