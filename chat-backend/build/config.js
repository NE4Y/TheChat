(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.config = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        db: {
            host: "localhost",
            dialect: "sqlite",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            storage: "chat.sqlite",
            logging: false
        },
        port: 3001
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBQWU7QUFDWCxZQUFJO0FBQ0Esa0JBQU0sV0FBTjtBQUNBLHFCQUFTLFFBQVQ7QUFDQSxrQkFBTTtBQUNGLHFCQUFLLENBQUw7QUFDQSxxQkFBSyxDQUFMO0FBQ0Esc0JBQU0sS0FBTjthQUhKO0FBS0EscUJBQVMsYUFBVDtBQUNBLHFCQUFTLEtBQVQ7U0FUSjtBQVdBLGNBQU0sSUFBTiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGI6IHtcbiAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgZGlhbGVjdDogXCJzcWxpdGVcIixcbiAgICAgICAgcG9vbDoge1xuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgaWRsZTogMTAwMDBcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZTogXCJjaGF0LnNxbGl0ZVwiLFxuICAgICAgICBsb2dnaW5nOiBmYWxzZVxuICAgIH0sXG4gICAgcG9ydDogMzAwMVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
