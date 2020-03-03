#! /usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = require("fs");

var path = require("path");

var chalk = require("chalk");

var prompt = require("./prompt");

var clear = function clear() {
  console.clear();
};

function readDir(dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
}

function format(filename, fullpath) {
  try {
    return fs.statSync(fullpath).isDirectory() ? "".concat(filename) : filename;
  } catch (ex) {
    return null;
  }
}

function mountChoices(_ref) {
  var folder = _ref.folder,
      type = _ref.type;
  return new Promise(function (resolve, reject) {
    readDir(folder).then(function (dirs) {
      var data = [];

      if (type === "folder") {
        data.push({
          name: chalk.blue.bold("".concat(path.resolve(folder))),
          value: "--".concat(path.resolve(folder))
        });
      }

      data.push({
        name: chalk.blue.bold("Enter custom path"),
        value: "~~custom"
      });
      data.push({
        name: "..",
        value: path.resolve("".concat(folder, "/.."))
      });

      for (var index in dirs) {
        var file = dirs[index];
        var fullpath = path.resolve("".concat(folder, "/").concat(file));
        var name = format(file, fullpath);

        if (type === "folder" && !fs.statSync(fullpath).isDirectory()) {
          continue;
        }

        data.push({
          name: name,
          value: fullpath,
          "short": fullpath
        });
      }

      return resolve(data);
    });
  });
}

function getFile() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  clear();
  var _config$folder = config.folder,
      folder = _config$folder === void 0 ? "." : _config$folder,
      _config$type = config.type,
      type = _config$type === void 0 ? "folder" : _config$type,
      _config$question = config.question,
      question = _config$question === void 0 ? "Choose a ".concat(config.type === "folder" ? "folder" : "file") : _config$question;
  return new Promise(function (resolve, reject) {
    var data = [];
    mountChoices({
      folder: folder,
      type: type
    }).then( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(choices) {
        var dir;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return prompt({
                  type: "autocomplete",
                  choices: choices
                }, question);

              case 2:
                dir = _context.sent;

                if (!(type === "folder" && dir.startsWith("--"))) {
                  _context.next = 7;
                  break;
                }

                resolve(dir.replace("--", ""));
                _context.next = 20;
                break;

              case 7:
                if (!(type !== "folder" && !fs.statSync(dir).isDirectory())) {
                  _context.next = 11;
                  break;
                }

                resolve(dir);
                _context.next = 20;
                break;

              case 11:
                if (!dir.startsWith("~~custom")) {
                  _context.next = 19;
                  break;
                }

                _context.t0 = resolve;
                _context.next = 15;
                return prompt({
                  type: "input"
                }, "Enter custom path");

              case 15:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);
                _context.next = 20;
                break;

              case 19:
                resolve(getFile(_objectSpread({}, config, {
                  folder: dir
                })));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
}

module.exports = getFile;