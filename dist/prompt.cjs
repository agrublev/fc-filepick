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
var _enquirer = require("enquirer");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var promptQuestion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var extended,
      message,
      _yield$prompt,
      answer,
      _args = arguments;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          extended = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          message = _args.length > 1 && _args[1] !== undefined ? _args[1] : "name it:";
          if (extended.type === "list") {
            extended.type = "select";
          }
          if (extended.message) {
            message = extended.message;
          }
          if (extended.choices && extended.choices[0].value) {
            extended.choices = extended.choices.map(function (e) {
              return {
                message: e.name,
                value: e.value
              };
            });
          }
          if (extended.pageSize) {
            extended.limit = extended.pageSize;
          }
          _context.next = 1;
          return (0, _enquirer.prompt)(_objectSpread({
            type: "input",
            message: "".concat(_chalk["default"].green.bold.underline(message)),
            name: "answer"
          }, extended));
        case 1:
          _yield$prompt = _context.sent;
          answer = _yield$prompt.answer;
          return _context.abrupt("return", answer);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function promptQuestion() {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = promptQuestion;
//# sourceMappingURL=prompt.cjs.map