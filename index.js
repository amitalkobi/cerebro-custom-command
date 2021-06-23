module.exports =
    /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 2);
    /******/
})
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ (function (module, exports, __webpack_require__) {

            var exec = __webpack_require__(3).exec;

            var commandline = {
                get: getString,
                run: runCommand
            };

            function runCommand(command) {
                //return refrence to the child process
                return exec(
                    command
                );
            }

            function getString(command, callback) {
                //return refrence to the child process
                return exec(
                    command,
                    (
                        function () {
                            return function (err, data, stderr) {
                                if (!callback)
                                    return;

                                callback(err, data, stderr);
                            }
                        }
                    )(callback)
                );
            }

            module.exports = commandline;


            /***/
        }),
        /* 1 */
        /***/ (function (module, exports) {

            module.exports = require("fs");

            /***/
        }),
        /* 2 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
            var fs = __webpack_require__(1);
            var cmd = __webpack_require__(0);
            const homedir = require('os').homedir();
            const path = require('path');

            const fn = ({term, display}) => {
                var search = searchTerm => {
                    const config_file_path = path.join(
                        homedir,
                        `Library`,
                        `Application Support`,
                        `cerebro-plugin-commandmaker`,
                        `config.json`
                    )
                    fs.readFile(config_file_path, 'utf-8', (err, data) => {
                        let obj = JSON.parse(data);
                        if (obj.commands.length > 0) {
                            for (let command of obj.commands) {
                                if (command.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    let icon = command.icon;
                                    display({
                                        icon,
                                        title: command.name,
                                        onSelect: () => cmd.run(command.exec)
                                    });
                                }
                            }
                        }
                    });
                };
                display({
                    title: "amit"
                })
                search(term);
            };
            /* harmony export (immutable) */
            __webpack_exports__["fn"] = fn;


            /***/
        }),
        /* 3 */
        /***/ (function (module, exports) {

            module.exports = require("child_process");

            /***/
        })
        /******/]);