#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _require = require("enquirer"),
    prompt = _require.prompt;

var chalk = require("chalk");

var promptQuestion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var extended,
        message,
        _ref2,
        answer,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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

            _context.next = 8;
            return prompt(_objectSpread({
              type: "input",
              message: "".concat(chalk.green.bold.underline(message)),
              name: "answer"
            }, extended));

          case 8:
            _ref2 = _context.sent;
            answer = _ref2.answer;
            return _context.abrupt("return", answer);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function promptQuestion() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = promptQuestion;