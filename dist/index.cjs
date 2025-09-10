"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _chalk = _interopRequireDefault(require("chalk"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _prompt = _interopRequireDefault(require("./prompt.js"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var clear = function clear() {
  console.clear();
};
function readDir(dir) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readdir(dir, function (err, result) {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}
function format(filename, fullpath) {
  try {
    return _fs["default"].statSync(fullpath).isDirectory() ? "".concat(filename) : filename;
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
          name: _chalk["default"].blue.bold("".concat(_path["default"].resolve(folder))),
          value: "--".concat(_path["default"].resolve(folder))
        });
      }
      data.push({
        name: _chalk["default"].blue.bold("Enter custom path"),
        value: "~~custom"
      });
      data.push({
        name: "..",
        value: _path["default"].resolve("".concat(folder, "/.."))
      });
      for (var index in dirs) {
        var file = dirs[index];
        var fullpath = _path["default"].resolve("".concat(folder, "/").concat(file));
        var name = format(file, fullpath);
        if (type === "folder" && !_fs["default"].statSync(fullpath).isDirectory()) {
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
  return new Promise(function (resolve) {
    mountChoices({
      folder: folder,
      type: type
    }).then(/*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(choices) {
        var dir, _t;
        return _regenerator["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return (0, _prompt["default"])({
                type: "autocomplete",
                choices: choices
              }, question);
            case 1:
              dir = _context.sent;
              if (!(type === "folder" && dir.startsWith("--"))) {
                _context.next = 2;
                break;
              }
              resolve(dir.replace("--", ""));
              _context.next = 6;
              break;
            case 2:
              if (!(type !== "folder" && !_fs["default"].statSync(dir).isDirectory())) {
                _context.next = 3;
                break;
              }
              resolve(dir);
              _context.next = 6;
              break;
            case 3:
              if (!dir.startsWith("~~custom")) {
                _context.next = 5;
                break;
              }
              _t = resolve;
              _context.next = 4;
              return (0, _prompt["default"])({
                type: "input"
              }, "Enter custom path");
            case 4:
              _t(_context.sent);
              _context.next = 6;
              break;
            case 5:
              resolve(getFile(_objectSpread(_objectSpread({}, config), {}, {
                folder: dir
              })));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"](function (e) {
      resolve(false);
    });
  });
}
var _default = exports["default"] = getFile;
//# sourceMappingURL=index.cjs.map