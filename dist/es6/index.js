import * as $4hQOU$events from "events";
import {createInterface as $4hQOU$createInterface, emitKeypressEvents as $4hQOU$emitKeypressEvents} from "readline";
import $4hQOU$fs from "fs";
import $4hQOU$path from "path";
import $4hQOU$nodeprocess from "node:process";
import $4hQOU$nodeos from "node:os";
import $4hQOU$nodetty from "node:tty";
import * as $4hQOU$assert from "assert";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4825"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4825"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("lIsg9", function(module, exports) {
"use strict";
const $fcf3a0cd056b4932$var$isHyper = typeof process !== "undefined" && process.env.TERM_PROGRAM === "Hyper";
const $fcf3a0cd056b4932$var$isWindows = typeof process !== "undefined" && process.platform === "win32";
const $fcf3a0cd056b4932$var$isLinux = typeof process !== "undefined" && process.platform === "linux";
const $fcf3a0cd056b4932$var$common = {
    ballotDisabled: "\u2612",
    ballotOff: "\u2610",
    ballotOn: "\u2611",
    bullet: "\u2022",
    bulletWhite: "\u25E6",
    fullBlock: "\u2588",
    heart: "\u2764",
    identicalTo: "\u2261",
    line: "\u2500",
    mark: "\u203B",
    middot: "\xb7",
    minus: "\uFF0D",
    multiplication: "\xd7",
    obelus: "\xf7",
    pencilDownRight: "\u270E",
    pencilRight: "\u270F",
    pencilUpRight: "\u2710",
    percent: "%",
    pilcrow2: "\u2761",
    pilcrow: "\xb6",
    plusMinus: "\xb1",
    question: "?",
    section: "\xa7",
    starsOff: "\u2606",
    starsOn: "\u2605",
    upDownArrow: "\u2195"
};
const $fcf3a0cd056b4932$var$windows = Object.assign({}, $fcf3a0cd056b4932$var$common, {
    check: "\u221A",
    cross: "\xd7",
    ellipsisLarge: "...",
    ellipsis: "...",
    info: "i",
    questionSmall: "?",
    pointer: ">",
    pointerSmall: "\xbb",
    radioOff: "( )",
    radioOn: "(*)",
    warning: "\u203C"
});
const $fcf3a0cd056b4932$var$other = Object.assign({}, $fcf3a0cd056b4932$var$common, {
    ballotCross: "\u2718",
    check: "\u2714",
    cross: "\u2716",
    ellipsisLarge: "\u22EF",
    ellipsis: "\u2026",
    info: "\u2139",
    questionFull: "\uFF1F",
    questionSmall: "\uFE56",
    pointer: $fcf3a0cd056b4932$var$isLinux ? "\u25B8" : "\u276F",
    pointerSmall: $fcf3a0cd056b4932$var$isLinux ? "\u2023" : "\u203A",
    radioOff: "\u25EF",
    radioOn: "\u25C9",
    warning: "\u26A0"
});
module.exports = $fcf3a0cd056b4932$var$isWindows && !$fcf3a0cd056b4932$var$isHyper ? $fcf3a0cd056b4932$var$windows : $fcf3a0cd056b4932$var$other;
Reflect.defineProperty(module.exports, "common", {
    enumerable: false,
    value: $fcf3a0cd056b4932$var$common
});
Reflect.defineProperty(module.exports, "windows", {
    enumerable: false,
    value: $fcf3a0cd056b4932$var$windows
});
Reflect.defineProperty(module.exports, "other", {
    enumerable: false,
    value: $fcf3a0cd056b4932$var$other
});

});

parcelRegister("3fCUp", function(module, exports) {
"use strict";


var $kCxMd = parcelRequire("kCxMd");

var $iZUzo = parcelRequire("iZUzo");

var $gu3hI = parcelRequire("gu3hI");

var $9GwC6 = parcelRequire("9GwC6");

var $bk3cM = parcelRequire("bk3cM");

var $h91fL = parcelRequire("h91fL");

var $fo01Y = parcelRequire("fo01Y");
/**
 * Base class for creating a new Prompt.
 * @param {Object} `options` Question object.
 */ class $25e0f44ba7e8ffd4$var$Prompt extends $4hQOU$events {
    constructor(options = {}){
        super();
        this.name = options.name;
        this.type = options.type;
        this.options = options;
        $bk3cM(this);
        $gu3hI(this);
        this.state = new $9GwC6(this);
        this.initial = [
            options.initial,
            options.default
        ].find((v)=>v != null);
        this.stdout = options.stdout || process.stdout;
        this.stdin = options.stdin || process.stdin;
        this.scale = options.scale || 1;
        this.term = this.options.term || process.env.TERM_PROGRAM;
        this.margin = $25e0f44ba7e8ffd4$var$margin(this.options.margin);
        this.setMaxListeners(0);
        $25e0f44ba7e8ffd4$var$setOptions(this);
    }
    async keypress(input, event = {}) {
        this.keypressed = true;
        let key = $iZUzo.action(input, $iZUzo(input, event), this.options.actions);
        this.state.keypress = key;
        this.emit("keypress", input, key);
        this.emit("state", this.state.clone());
        const fn = this.options[key.action] || this[key.action] || this.dispatch;
        if (typeof fn === "function") return await fn.call(this, input, key);
        this.alert();
    }
    alert() {
        delete this.state.alert;
        if (this.options.show === false) this.emit("alert");
        else this.stdout.write($fo01Y.code.beep);
    }
    cursorHide() {
        this.stdout.write($fo01Y.cursor.hide());
        const releaseOnExit = $h91fL.onExit(()=>this.cursorShow());
        this.on("close", ()=>{
            this.cursorShow();
            releaseOnExit();
        });
    }
    cursorShow() {
        this.stdout.write($fo01Y.cursor.show());
    }
    write(str) {
        if (!str) return;
        if (this.stdout && this.state.show !== false) this.stdout.write(str);
        this.state.buffer += str;
    }
    clear(lines = 0) {
        let buffer = this.state.buffer;
        this.state.buffer = "";
        if (!buffer && !lines || this.options.show === false) return;
        this.stdout.write($fo01Y.cursor.down(lines) + $fo01Y.clear(buffer, this.width));
    }
    restore() {
        if (this.state.closed || this.options.show === false) return;
        let { prompt: prompt, after: after, rest: rest } = this.sections();
        let { cursor: cursor, initial: initial = "", input: input = "", value: value = "" } = this;
        let size = this.state.size = rest.length;
        let state = {
            after: after,
            cursor: cursor,
            initial: initial,
            input: input,
            prompt: prompt,
            size: size,
            value: value
        };
        let codes = $fo01Y.cursor.restore(state);
        if (codes) this.stdout.write(codes);
    }
    sections() {
        let { buffer: buffer, input: input, prompt: prompt } = this.state;
        prompt = $kCxMd(prompt);
        let buf = $kCxMd(buffer);
        let idx = buf.indexOf(prompt);
        let header = buf.slice(0, idx);
        let rest = buf.slice(idx);
        let lines = rest.split("\n");
        let first = lines[0];
        let last = lines[lines.length - 1];
        let promptLine = prompt + (input ? " " + input : "");
        let len = promptLine.length;
        let after = len < first.length ? first.slice(len + 1) : "";
        return {
            header: header,
            prompt: first,
            after: after,
            rest: lines.slice(1),
            last: last
        };
    }
    async submit() {
        this.state.submitted = true;
        this.state.validating = true;
        // this will only be called when the prompt is directly submitted
        // without initializing, i.e. when the prompt is skipped, etc. Otherwize,
        // "options.onSubmit" is will be handled by the "initialize()" method.
        if (this.options.onSubmit) await this.options.onSubmit.call(this, this.name, this.value, this);
        let result = this.state.error || await this.validate(this.value, this.state);
        if (result !== true) {
            let error = "\n" + this.symbols.pointer + " ";
            if (typeof result === "string") error += result.trim();
            else error += "Invalid input";
            this.state.error = "\n" + this.styles.danger(error);
            this.state.submitted = false;
            await this.render();
            await this.alert();
            this.state.validating = false;
            this.state.error = void 0;
            return;
        }
        this.state.validating = false;
        await this.render();
        await this.close();
        this.value = await this.result(this.value);
        this.emit("submit", this.value);
    }
    async cancel(err) {
        this.state.cancelled = this.state.submitted = true;
        await this.render();
        await this.close();
        if (typeof this.options.onCancel === "function") await this.options.onCancel.call(this, this.name, this.value, this);
        this.emit("cancel", await this.error(err));
    }
    async close() {
        this.state.closed = true;
        try {
            let sections = this.sections();
            let lines = Math.ceil(sections.prompt.length / this.width);
            if (sections.rest) this.write($fo01Y.cursor.down(sections.rest.length));
            this.write("\n".repeat(lines));
        } catch (err) {}
        this.emit("close");
    }
    start() {
        if (!this.stop && this.options.show !== false) {
            this.stop = $iZUzo.listen(this, this.keypress.bind(this));
            this.once("close", this.stop);
            this.emit("start", this);
        }
    }
    async skip() {
        this.skipped = this.options.skip === true;
        if (typeof this.options.skip === "function") this.skipped = await this.options.skip.call(this, this.name, this.value);
        return this.skipped;
    }
    async initialize() {
        let { format: format, options: options, result: result } = this;
        this.format = ()=>format.call(this, this.value);
        this.result = ()=>result.call(this, this.value);
        if (typeof options.initial === "function") this.initial = await options.initial.call(this, this);
        if (typeof options.onRun === "function") await options.onRun.call(this, this);
        // if "options.onSubmit" is defined, we wrap the "submit" method to guarantee
        // that "onSubmit" will always called first thing inside the submit
        // method, regardless of how it's handled in inheriting prompts.
        if (typeof options.onSubmit === "function") {
            let onSubmit = options.onSubmit.bind(this);
            let submit = this.submit.bind(this);
            delete this.options.onSubmit;
            this.submit = async ()=>{
                await onSubmit(this.name, this.value, this);
                return submit();
            };
        }
        await this.start();
        await this.render();
    }
    render() {
        throw new Error("expected prompt to have a custom render method");
    }
    run() {
        return new Promise(async (resolve, reject)=>{
            this.once("submit", resolve);
            this.once("cancel", reject);
            if (await this.skip()) {
                this.render = ()=>{};
                return this.submit();
            }
            await this.initialize();
            this.emit("run");
        });
    }
    async element(name, choice, i) {
        let { options: options, state: state, symbols: symbols, timers: timers } = this;
        let timer = timers && timers[name];
        state.timer = timer;
        let value = options[name] || state[name] || symbols[name];
        let val = choice && choice[name] != null ? choice[name] : await value;
        if (val === "") return val;
        let res = await this.resolve(val, state, choice, i);
        if (!res && choice && choice[name]) return this.resolve(value, state, choice, i);
        return res;
    }
    async prefix() {
        let element = await this.element("prefix") || this.symbols;
        let timer = this.timers && this.timers.prefix;
        let state = this.state;
        state.timer = timer;
        if ($h91fL.isObject(element)) element = element[state.status] || element.pending;
        if (!$h91fL.hasColor(element)) {
            let style = this.styles[state.status] || this.styles.pending;
            return style(element);
        }
        return element;
    }
    async message() {
        let message = await this.element("message");
        if (!$h91fL.hasColor(message)) return this.styles.strong(message);
        return message;
    }
    async separator() {
        let element = await this.element("separator") || this.symbols;
        let timer = this.timers && this.timers.separator;
        let state = this.state;
        state.timer = timer;
        let value = element[state.status] || element.pending || state.separator;
        let ele = await this.resolve(value, state);
        if ($h91fL.isObject(ele)) ele = ele[state.status] || ele.pending;
        if (!$h91fL.hasColor(ele)) return this.styles.muted(ele);
        return ele;
    }
    async pointer(choice, i) {
        let val = await this.element("pointer", choice, i);
        if (typeof val === "string" && $h91fL.hasColor(val)) return val;
        if (val) {
            let styles = this.styles;
            let focused = this.index === i;
            let style = focused ? styles.primary : (val)=>val;
            let ele = await this.resolve(val[focused ? "on" : "off"] || val, this.state);
            let styled = !$h91fL.hasColor(ele) ? style(ele) : ele;
            return focused ? styled : " ".repeat(ele.length);
        }
    }
    async indicator(choice, i) {
        let val = await this.element("indicator", choice, i);
        if (typeof val === "string" && $h91fL.hasColor(val)) return val;
        if (val) {
            let styles = this.styles;
            let enabled = choice.enabled === true;
            let style = enabled ? styles.success : styles.dark;
            let ele = val[enabled ? "on" : "off"] || val;
            return !$h91fL.hasColor(ele) ? style(ele) : ele;
        }
        return "";
    }
    body() {
        return null;
    }
    footer() {
        if (this.state.status === "pending") return this.element("footer");
    }
    header() {
        if (this.state.status === "pending") return this.element("header");
    }
    async hint() {
        if (this.state.status === "pending" && !this.isValue(this.state.input)) {
            let hint = await this.element("hint");
            if (!$h91fL.hasColor(hint)) return this.styles.muted(hint);
            return hint;
        }
    }
    error(err) {
        return !this.state.submitted ? err || this.state.error : "";
    }
    format(value) {
        return value;
    }
    result(value) {
        return value;
    }
    validate(value) {
        if (this.options.required === true) return this.isValue(value);
        return true;
    }
    isValue(value) {
        return value != null && value !== "";
    }
    resolve(value, ...args) {
        return $h91fL.resolve(this, value, ...args);
    }
    get base() {
        return $25e0f44ba7e8ffd4$var$Prompt.prototype;
    }
    get style() {
        return this.styles[this.state.status];
    }
    get height() {
        return this.options.rows || $h91fL.height(this.stdout, 25);
    }
    get width() {
        return this.options.columns || $h91fL.width(this.stdout, 80);
    }
    get size() {
        return {
            width: this.width,
            height: this.height
        };
    }
    set cursor(value) {
        this.state.cursor = value;
    }
    get cursor() {
        return this.state.cursor;
    }
    set input(value) {
        this.state.input = value;
    }
    get input() {
        return this.state.input;
    }
    set value(value) {
        this.state.value = value;
    }
    get value() {
        let { input: input, value: value } = this.state;
        let result = [
            value,
            input
        ].find(this.isValue.bind(this));
        return this.isValue(result) ? result : this.initial;
    }
    static get prompt() {
        return (options)=>new this(options).run();
    }
}
function $25e0f44ba7e8ffd4$var$setOptions(prompt) {
    let isValidKey = (key)=>{
        return prompt[key] === void 0 || typeof prompt[key] === "function";
    };
    let ignore = [
        "actions",
        "choices",
        "initial",
        "margin",
        "roles",
        "styles",
        "symbols",
        "theme",
        "timers",
        "value"
    ];
    let ignoreFn = [
        "body",
        "footer",
        "error",
        "header",
        "hint",
        "indicator",
        "message",
        "prefix",
        "separator",
        "skip"
    ];
    for (let key of Object.keys(prompt.options)){
        if (ignore.includes(key)) continue;
        if (/^on[A-Z]/.test(key)) continue;
        let option = prompt.options[key];
        if (typeof option === "function" && isValidKey(key)) {
            if (!ignoreFn.includes(key)) prompt[key] = option.bind(prompt);
        } else if (typeof prompt[key] !== "function") prompt[key] = option;
    }
}
function $25e0f44ba7e8ffd4$var$margin(value) {
    if (typeof value === "number") value = [
        value,
        value,
        value,
        value
    ];
    let arr = [].concat(value || []);
    let pad = (i)=>i % 2 === 0 ? "\n" : " ";
    let res = [];
    for(let i = 0; i < 4; i++){
        let char = pad(i);
        if (arr[i]) res.push(char.repeat(arr[i]));
        else res.push("");
    }
    return res;
}
module.exports = $25e0f44ba7e8ffd4$var$Prompt;

});
parcelRegister("kCxMd", function(module, exports) {
"use strict";

var $fQdSh = parcelRequire("fQdSh");
module.exports = (string)=>typeof string === "string" ? string.replace($fQdSh(), "") : string;

});
parcelRegister("fQdSh", function(module, exports) {
"use strict";
module.exports = ({ onlyFirst: onlyFirst = false } = {})=>{
    const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(pattern, onlyFirst ? undefined : "g");
};

});


parcelRegister("iZUzo", function(module, exports) {
"use strict";


var $8OcYO = parcelRequire("8OcYO");

var $79wK4 = parcelRequire("79wK4");
/* eslint-disable no-control-regex */ const $dd49ce1c96380f40$var$metaKeyCodeRe = /^(?:\x1b)([a-zA-Z0-9])$/;
const $dd49ce1c96380f40$var$fnKeyRe = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;
const $dd49ce1c96380f40$var$keyName = {
    /* xterm/gnome ESC O letter */ "OP": "f1",
    "OQ": "f2",
    "OR": "f3",
    "OS": "f4",
    /* xterm/rxvt ESC [ number ~ */ "[11~": "f1",
    "[12~": "f2",
    "[13~": "f3",
    "[14~": "f4",
    /* from Cygwin and used in libuv */ "[[A": "f1",
    "[[B": "f2",
    "[[C": "f3",
    "[[D": "f4",
    "[[E": "f5",
    /* common */ "[15~": "f5",
    "[17~": "f6",
    "[18~": "f7",
    "[19~": "f8",
    "[20~": "f9",
    "[21~": "f10",
    "[23~": "f11",
    "[24~": "f12",
    /* xterm ESC [ letter */ "[A": "up",
    "[B": "down",
    "[C": "right",
    "[D": "left",
    "[E": "clear",
    "[F": "end",
    "[H": "home",
    /* xterm/gnome ESC O letter */ "OA": "up",
    "OB": "down",
    "OC": "right",
    "OD": "left",
    "OE": "clear",
    "OF": "end",
    "OH": "home",
    /* xterm/rxvt ESC [ number ~ */ "[1~": "home",
    "[2~": "insert",
    "[3~": "delete",
    "[4~": "end",
    "[5~": "pageup",
    "[6~": "pagedown",
    /* putty */ "[[5~": "pageup",
    "[[6~": "pagedown",
    /* rxvt */ "[7~": "home",
    "[8~": "end",
    /* rxvt keys with modifiers */ "[a": "up",
    "[b": "down",
    "[c": "right",
    "[d": "left",
    "[e": "clear",
    "[2$": "insert",
    "[3$": "delete",
    "[5$": "pageup",
    "[6$": "pagedown",
    "[7$": "home",
    "[8$": "end",
    "Oa": "up",
    "Ob": "down",
    "Oc": "right",
    "Od": "left",
    "Oe": "clear",
    "[2^": "insert",
    "[3^": "delete",
    "[5^": "pageup",
    "[6^": "pagedown",
    "[7^": "home",
    "[8^": "end",
    /* misc. */ "[Z": "tab"
};
function $dd49ce1c96380f40$var$isShiftKey(code) {
    return [
        "[a",
        "[b",
        "[c",
        "[d",
        "[e",
        "[2$",
        "[3$",
        "[5$",
        "[6$",
        "[7$",
        "[8$",
        "[Z"
    ].includes(code);
}
function $dd49ce1c96380f40$var$isCtrlKey(code) {
    return [
        "Oa",
        "Ob",
        "Oc",
        "Od",
        "Oe",
        "[2^",
        "[3^",
        "[5^",
        "[6^",
        "[7^",
        "[8^"
    ].includes(code);
}
const $dd49ce1c96380f40$var$keypress = (s = "", event = {})=>{
    let parts;
    let key = {
        name: event.name,
        ctrl: false,
        meta: false,
        shift: false,
        option: false,
        sequence: s,
        raw: s,
        ...event
    };
    if (Buffer.isBuffer(s)) {
        if (s[0] > 127 && s[1] === void 0) {
            s[0] -= 128;
            s = "\x1b" + String(s);
        } else s = String(s);
    } else if (s !== void 0 && typeof s !== "string") s = String(s);
    else if (!s) s = key.sequence || "";
    key.sequence = key.sequence || s || key.name;
    if (s === "\r") {
        // carriage return
        key.raw = void 0;
        key.name = "return";
    } else if (s === "\n") // enter, should have been called linefeed
    key.name = "enter";
    else if (s === "	") // tab
    key.name = "tab";
    else if (s === "\b" || s === "\x7f" || s === "\x1b\x7f" || s === "\x1b\b") {
        // backspace or ctrl+h
        key.name = "backspace";
        key.meta = s.charAt(0) === "\x1b";
    } else if (s === "\x1b" || s === "\x1b\x1b") {
        // escape key
        key.name = "escape";
        key.meta = s.length === 2;
    } else if (s === " " || s === "\x1b ") {
        key.name = "space";
        key.meta = s.length === 2;
    } else if (s <= "\x1a") {
        // ctrl+letter
        key.name = String.fromCharCode(s.charCodeAt(0) + "a".charCodeAt(0) - 1);
        key.ctrl = true;
    } else if (s.length === 1 && s >= "0" && s <= "9") // number
    key.name = "number";
    else if (s.length === 1 && s >= "a" && s <= "z") // lowercase letter
    key.name = s;
    else if (s.length === 1 && s >= "A" && s <= "Z") {
        // shift+letter
        key.name = s.toLowerCase();
        key.shift = true;
    } else if (parts = $dd49ce1c96380f40$var$metaKeyCodeRe.exec(s)) {
        // meta+character key
        key.meta = true;
        key.shift = /^[A-Z]$/.test(parts[1]);
    } else if (parts = $dd49ce1c96380f40$var$fnKeyRe.exec(s)) {
        let segs = [
            ...s
        ];
        if (segs[0] === "\x1b" && segs[1] === "\x1b") key.option = true;
        // ansi escape sequence
        // reassemble the key code leaving out leading \x1b's,
        // the modifier key bitflag and any meaningless "1;" sequence
        let code = [
            parts[1],
            parts[2],
            parts[4],
            parts[6]
        ].filter(Boolean).join("");
        let modifier = (parts[3] || parts[5] || 1) - 1;
        // Parse the key modifier
        key.ctrl = !!(modifier & 4);
        key.meta = !!(modifier & 10);
        key.shift = !!(modifier & 1);
        key.code = code;
        key.name = $dd49ce1c96380f40$var$keyName[code];
        key.shift = $dd49ce1c96380f40$var$isShiftKey(code) || key.shift;
        key.ctrl = $dd49ce1c96380f40$var$isCtrlKey(code) || key.ctrl;
    }
    return key;
};
$dd49ce1c96380f40$var$keypress.listen = (options = {}, onKeypress)=>{
    let { stdin: stdin } = options;
    if (!stdin || stdin !== process.stdin && !stdin.isTTY) throw new Error("Invalid stream passed");
    let rl = $4hQOU$createInterface({
        terminal: true,
        input: stdin
    });
    $4hQOU$emitKeypressEvents(stdin, rl);
    const queue = new $79wK4((buf, key)=>onKeypress(buf, $dd49ce1c96380f40$var$keypress(buf, key), rl));
    let isRaw = stdin.isRaw;
    if (stdin.isTTY) stdin.setRawMode(true);
    stdin.on("keypress", queue.enqueue);
    rl.resume();
    let off = ()=>{
        if (stdin.isTTY) stdin.setRawMode(isRaw);
        stdin.removeListener("keypress", queue.enqueue);
        queue.destroy();
        rl.pause();
        rl.close();
    };
    return off;
};
$dd49ce1c96380f40$var$keypress.action = (buf, key, customActions)=>{
    let obj = {
        ...$8OcYO,
        ...customActions
    };
    if (key.ctrl) {
        key.action = obj.ctrl[key.name];
        return key;
    }
    if (key.option && obj.option) {
        key.action = obj.option[key.name];
        return key;
    }
    if (key.shift) {
        key.action = obj.shift[key.name];
        return key;
    }
    key.action = obj.keys[key.name];
    return key;
};
module.exports = $dd49ce1c96380f40$var$keypress;

});
parcelRegister("8OcYO", function(module, exports) {

$parcel$export(module.exports, "ctrl", () => $669d0fca10f1359e$export$2d45dbccb79e5305, (v) => $669d0fca10f1359e$export$2d45dbccb79e5305 = v);
$parcel$export(module.exports, "shift", () => $669d0fca10f1359e$export$fba63a578e423eb, (v) => $669d0fca10f1359e$export$fba63a578e423eb = v);
$parcel$export(module.exports, "fn", () => $669d0fca10f1359e$export$edf0a6961c7cffcc, (v) => $669d0fca10f1359e$export$edf0a6961c7cffcc = v);
$parcel$export(module.exports, "option", () => $669d0fca10f1359e$export$a75d1723e6bda2ec, (v) => $669d0fca10f1359e$export$a75d1723e6bda2ec = v);
$parcel$export(module.exports, "keys", () => $669d0fca10f1359e$export$ed97f33186d4b816, (v) => $669d0fca10f1359e$export$ed97f33186d4b816 = v);
/**
 * Actions are mappings from keypress event names to method names
 * in the prompts.
 */ var $669d0fca10f1359e$export$2d45dbccb79e5305;
var $669d0fca10f1359e$export$fba63a578e423eb;
var $669d0fca10f1359e$export$edf0a6961c7cffcc;
// <alt> on Windows
var $669d0fca10f1359e$export$a75d1723e6bda2ec;
var $669d0fca10f1359e$export$ed97f33186d4b816;
"use strict";
$669d0fca10f1359e$export$2d45dbccb79e5305 = {
    a: "first",
    b: "backward",
    c: "cancel",
    d: "deleteForward",
    e: "last",
    f: "forward",
    g: "reset",
    i: "tab",
    k: "cutForward",
    l: "reset",
    n: "newItem",
    m: "cancel",
    j: "submit",
    p: "search",
    r: "remove",
    s: "save",
    u: "undo",
    w: "cutLeft",
    x: "toggleCursor",
    v: "paste"
};
$669d0fca10f1359e$export$fba63a578e423eb = {
    up: "shiftUp",
    down: "shiftDown",
    left: "shiftLeft",
    right: "shiftRight",
    tab: "prev"
};
$669d0fca10f1359e$export$edf0a6961c7cffcc = {
    up: "pageUp",
    down: "pageDown",
    left: "pageLeft",
    right: "pageRight",
    delete: "deleteForward"
};
$669d0fca10f1359e$export$a75d1723e6bda2ec = {
    b: "backward",
    f: "forward",
    d: "cutRight",
    left: "cutLeft",
    up: "altUp",
    down: "altDown"
};
$669d0fca10f1359e$export$ed97f33186d4b816 = {
    pageup: "pageUp",
    pagedown: "pageDown",
    home: "home",
    end: "end",
    cancel: "cancel",
    delete: "deleteForward",
    backspace: "delete",
    down: "down",
    enter: "submit",
    escape: "cancel",
    left: "left",
    space: "space",
    number: "number",
    return: "submit",
    right: "right",
    tab: "next",
    up: "up"
};

});

parcelRegister("79wK4", function(module, exports) {
"use strict";
module.exports = class Queue {
    _queue = [];
    _executing = false;
    _jobRunner = null;
    constructor(jobRunner){
        this._jobRunner = jobRunner;
    }
    enqueue = (...args)=>{
        this._queue.push(args);
        this._dequeue();
    };
    destroy() {
        this._queue.length = 0;
        this._jobRunner = null;
    }
    _dequeue() {
        if (this._executing || !this._queue.length) return;
        this._executing = true;
        this._jobRunner(...this._queue.shift());
        setTimeout(()=>{
            this._executing = false;
            this._dequeue();
        });
    }
};

});


parcelRegister("gu3hI", function(module, exports) {
"use strict";
module.exports = (prompt)=>{
    prompt.timers = prompt.timers || {};
    let timers = prompt.options.timers;
    if (!timers) return;
    for (let key of Object.keys(timers)){
        let opts = timers[key];
        if (typeof opts === "number") opts = {
            interval: opts
        };
        $c001fef884477432$var$create(prompt, key, opts);
    }
};
function $c001fef884477432$var$create(prompt, name, options = {}) {
    let timer = prompt.timers[name] = {
        name: name,
        start: Date.now(),
        ms: 0,
        tick: 0
    };
    let ms = options.interval || 120;
    timer.frames = options.frames || [];
    timer.loading = true;
    let interval = setInterval(()=>{
        timer.ms = Date.now() - timer.start;
        timer.tick++;
        prompt.render();
    }, ms);
    timer.stop = ()=>{
        timer.loading = false;
        clearInterval(interval);
    };
    Reflect.defineProperty(timer, "interval", {
        value: interval
    });
    prompt.once("close", ()=>timer.stop());
    return timer.stop;
}

});

parcelRegister("9GwC6", function(module, exports) {
"use strict";

var $h91fL = parcelRequire("h91fL");
var $70d155acc66ab1dc$require$define = $h91fL.define;
var $70d155acc66ab1dc$require$width = $h91fL.width;
class $70d155acc66ab1dc$var$State {
    constructor(prompt){
        let options = prompt.options;
        $70d155acc66ab1dc$require$define(this, "_prompt", prompt);
        this.type = prompt.type;
        this.name = prompt.name;
        this.message = "";
        this.header = "";
        this.footer = "";
        this.error = "";
        this.hint = "";
        this.input = "";
        this.cursor = 0;
        this.index = 0;
        this.lines = 0;
        this.tick = 0;
        this.prompt = "";
        this.buffer = "";
        this.width = $70d155acc66ab1dc$require$width(options.stdout || process.stdout);
        Object.assign(this, options);
        this.name = this.name || this.message;
        this.message = this.message || this.name;
        this.symbols = prompt.symbols;
        this.styles = prompt.styles;
        this.required = new Set();
        this.cancelled = false;
        this.submitted = false;
    }
    clone() {
        let state = {
            ...this
        };
        state.status = this.status;
        state.buffer = Buffer.from(state.buffer);
        delete state.clone;
        return state;
    }
    set color(val) {
        this._color = val;
    }
    get color() {
        let styles = this.prompt.styles;
        if (this.cancelled) return styles.cancelled;
        if (this.submitted) return styles.submitted;
        let color = this._color || styles[this.status];
        return typeof color === "function" ? color : styles.pending;
    }
    set loading(value) {
        this._loading = value;
    }
    get loading() {
        if (typeof this._loading === "boolean") return this._loading;
        if (this.loadingChoices) return "choices";
        return false;
    }
    get status() {
        if (this.cancelled) return "cancelled";
        if (this.submitted) return "submitted";
        return "pending";
    }
}
module.exports = $70d155acc66ab1dc$var$State;

});
parcelRegister("h91fL", function(module, exports) {

$parcel$export(module.exports, "longest", () => $c7b43fcb785e4aea$export$2cd9c620e2322b11, (v) => $c7b43fcb785e4aea$export$2cd9c620e2322b11 = v);
$parcel$export(module.exports, "hasColor", () => $c7b43fcb785e4aea$export$4f0196bc582f3c34, (v) => $c7b43fcb785e4aea$export$4f0196bc582f3c34 = v);
$parcel$export(module.exports, "isObject", () => $c7b43fcb785e4aea$export$a6cdc56e425d0d0a, (v) => $c7b43fcb785e4aea$export$a6cdc56e425d0d0a = v);
$parcel$export(module.exports, "nativeType", () => $c7b43fcb785e4aea$export$4cfafb42c91880c2, (v) => $c7b43fcb785e4aea$export$4cfafb42c91880c2 = v);
$parcel$export(module.exports, "isAsyncFn", () => $c7b43fcb785e4aea$export$a18515a8376ae56, (v) => $c7b43fcb785e4aea$export$a18515a8376ae56 = v);
$parcel$export(module.exports, "isPrimitive", () => $c7b43fcb785e4aea$export$c3825b437cbdea5c, (v) => $c7b43fcb785e4aea$export$c3825b437cbdea5c = v);
$parcel$export(module.exports, "resolve", () => $c7b43fcb785e4aea$export$f7ad0328861e2f03, (v) => $c7b43fcb785e4aea$export$f7ad0328861e2f03 = v);
$parcel$export(module.exports, "scrollDown", () => $c7b43fcb785e4aea$export$de29947b9a3b69c4, (v) => $c7b43fcb785e4aea$export$de29947b9a3b69c4 = v);
$parcel$export(module.exports, "scrollUp", () => $c7b43fcb785e4aea$export$aae9d402fb2f2acd, (v) => $c7b43fcb785e4aea$export$aae9d402fb2f2acd = v);
$parcel$export(module.exports, "reorder", () => $c7b43fcb785e4aea$export$fc77a6137e3f91c, (v) => $c7b43fcb785e4aea$export$fc77a6137e3f91c = v);
$parcel$export(module.exports, "swap", () => $c7b43fcb785e4aea$export$b0e76d9850c64156, (v) => $c7b43fcb785e4aea$export$b0e76d9850c64156 = v);
$parcel$export(module.exports, "width", () => $c7b43fcb785e4aea$export$7e3df82ee760448c, (v) => $c7b43fcb785e4aea$export$7e3df82ee760448c = v);
$parcel$export(module.exports, "height", () => $c7b43fcb785e4aea$export$ac607276a8fe9f0a, (v) => $c7b43fcb785e4aea$export$ac607276a8fe9f0a = v);
$parcel$export(module.exports, "wordWrap", () => $c7b43fcb785e4aea$export$dca3d8ad656c34d2, (v) => $c7b43fcb785e4aea$export$dca3d8ad656c34d2 = v);
$parcel$export(module.exports, "unmute", () => $c7b43fcb785e4aea$export$980e8f800f2aa0d8, (v) => $c7b43fcb785e4aea$export$980e8f800f2aa0d8 = v);
$parcel$export(module.exports, "pascal", () => $c7b43fcb785e4aea$export$b78eb6578ba92547, (v) => $c7b43fcb785e4aea$export$b78eb6578ba92547 = v);
$parcel$export(module.exports, "inverse", () => $c7b43fcb785e4aea$export$70ae2c07e401031b, (v) => $c7b43fcb785e4aea$export$70ae2c07e401031b = v);
$parcel$export(module.exports, "complement", () => $c7b43fcb785e4aea$export$bd4f6f7e1823bc9e, (v) => $c7b43fcb785e4aea$export$bd4f6f7e1823bc9e = v);
$parcel$export(module.exports, "meridiem", () => $c7b43fcb785e4aea$export$59d9f6a8e797ecde, (v) => $c7b43fcb785e4aea$export$59d9f6a8e797ecde = v);
$parcel$export(module.exports, "set", () => $c7b43fcb785e4aea$export$adaa4cf7ef1b65be, (v) => $c7b43fcb785e4aea$export$adaa4cf7ef1b65be = v);
$parcel$export(module.exports, "get", () => $c7b43fcb785e4aea$export$3988ae62b71be9a3, (v) => $c7b43fcb785e4aea$export$3988ae62b71be9a3 = v);
$parcel$export(module.exports, "mixin", () => $c7b43fcb785e4aea$export$e36fc9d62a853069, (v) => $c7b43fcb785e4aea$export$e36fc9d62a853069 = v);
$parcel$export(module.exports, "merge", () => $c7b43fcb785e4aea$export$4950aa0f605343fb, (v) => $c7b43fcb785e4aea$export$4950aa0f605343fb = v);
$parcel$export(module.exports, "mixinEmitter", () => $c7b43fcb785e4aea$export$792940db1c9e591d, (v) => $c7b43fcb785e4aea$export$792940db1c9e591d = v);
$parcel$export(module.exports, "define", () => $c7b43fcb785e4aea$export$f36d6a7a5c09a23e, (v) => $c7b43fcb785e4aea$export$f36d6a7a5c09a23e = v);
$parcel$export(module.exports, "onExit", () => $c7b43fcb785e4aea$export$47a57ed64c292d4f, (v) => $c7b43fcb785e4aea$export$47a57ed64c292d4f = v);
$parcel$export(module.exports, "defineExport", () => $c7b43fcb785e4aea$export$c04f1882ebfe07d5, (v) => $c7b43fcb785e4aea$export$c04f1882ebfe07d5 = v);
var $c7b43fcb785e4aea$export$2cd9c620e2322b11;
var $c7b43fcb785e4aea$export$4f0196bc582f3c34;
var $c7b43fcb785e4aea$export$a6cdc56e425d0d0a;
var $c7b43fcb785e4aea$export$4cfafb42c91880c2;
var $c7b43fcb785e4aea$export$a18515a8376ae56;
var $c7b43fcb785e4aea$export$c3825b437cbdea5c;
var $c7b43fcb785e4aea$export$f7ad0328861e2f03;
var $c7b43fcb785e4aea$export$de29947b9a3b69c4;
var $c7b43fcb785e4aea$export$aae9d402fb2f2acd;
var $c7b43fcb785e4aea$export$fc77a6137e3f91c;
var $c7b43fcb785e4aea$export$b0e76d9850c64156;
var $c7b43fcb785e4aea$export$7e3df82ee760448c;
var $c7b43fcb785e4aea$export$ac607276a8fe9f0a;
var $c7b43fcb785e4aea$export$dca3d8ad656c34d2;
var $c7b43fcb785e4aea$export$980e8f800f2aa0d8;
var $c7b43fcb785e4aea$export$b78eb6578ba92547;
var $c7b43fcb785e4aea$export$70ae2c07e401031b;
var $c7b43fcb785e4aea$export$bd4f6f7e1823bc9e;
var $c7b43fcb785e4aea$export$59d9f6a8e797ecde;
/**
 * Set a value on the given object.
 * @param {Object} obj
 * @param {String} prop
 * @param {any} value
 */ var $c7b43fcb785e4aea$export$adaa4cf7ef1b65be;
/**
 * Get a value from the given object.
 * @param {Object} obj
 * @param {String} prop
 */ var $c7b43fcb785e4aea$export$3988ae62b71be9a3;
var $c7b43fcb785e4aea$export$e36fc9d62a853069;
var $c7b43fcb785e4aea$export$4950aa0f605343fb;
var $c7b43fcb785e4aea$export$792940db1c9e591d;
var $c7b43fcb785e4aea$export$47a57ed64c292d4f;
var $c7b43fcb785e4aea$export$f36d6a7a5c09a23e;
var $c7b43fcb785e4aea$export$c04f1882ebfe07d5;
"use strict";
const $c7b43fcb785e4aea$var$toString = Object.prototype.toString;

var $6JGMc = parcelRequire("6JGMc");
let $c7b43fcb785e4aea$var$onExitCalled = false;
let $c7b43fcb785e4aea$var$onExitCallbacks = new Set();
const $c7b43fcb785e4aea$var$complements = {
    "yellow": "blue",
    "cyan": "red",
    "green": "magenta",
    "black": "white",
    "blue": "yellow",
    "red": "cyan",
    "magenta": "green",
    "white": "black"
};
$c7b43fcb785e4aea$export$2cd9c620e2322b11 = (arr, prop)=>{
    return arr.reduce((a, v)=>Math.max(a, prop ? v[prop].length : v.length), 0);
};
$c7b43fcb785e4aea$export$4f0196bc582f3c34 = (str)=>!!str && $6JGMc.hasColor(str);
const $c7b43fcb785e4aea$var$isObject = $c7b43fcb785e4aea$export$a6cdc56e425d0d0a = (val)=>{
    return val !== null && typeof val === "object" && !Array.isArray(val);
};
$c7b43fcb785e4aea$export$4cfafb42c91880c2 = (val)=>{
    return $c7b43fcb785e4aea$var$toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
};
$c7b43fcb785e4aea$export$a18515a8376ae56 = (val)=>{
    return $c7b43fcb785e4aea$export$4cfafb42c91880c2(val) === "asyncfunction";
};
$c7b43fcb785e4aea$export$c3825b437cbdea5c = (val)=>{
    return val != null && typeof val !== "object" && typeof val !== "function";
};
$c7b43fcb785e4aea$export$f7ad0328861e2f03 = (context, value, ...rest)=>{
    if (typeof value === "function") return value.call(context, ...rest);
    return value;
};
$c7b43fcb785e4aea$export$de29947b9a3b69c4 = (choices = [])=>[
        ...choices.slice(1),
        choices[0]
    ];
$c7b43fcb785e4aea$export$aae9d402fb2f2acd = (choices = [])=>[
        choices.pop(),
        ...choices
    ];
$c7b43fcb785e4aea$export$fc77a6137e3f91c = (arr = [])=>{
    let res = arr.slice();
    res.sort((a, b)=>{
        if (a.index > b.index) return 1;
        if (a.index < b.index) return -1;
        return 0;
    });
    return res;
};
$c7b43fcb785e4aea$export$b0e76d9850c64156 = (arr, index, pos)=>{
    let len = arr.length;
    let idx = pos === len ? 0 : pos < 0 ? len - 1 : pos;
    let choice = arr[index];
    arr[index] = arr[idx];
    arr[idx] = choice;
};
$c7b43fcb785e4aea$export$7e3df82ee760448c = (stream, fallback = 80)=>{
    let columns = stream && stream.columns ? stream.columns : fallback;
    if (stream && typeof stream.getWindowSize === "function") columns = stream.getWindowSize()[0];
    if (process.platform === "win32") return columns - 1;
    return columns;
};
$c7b43fcb785e4aea$export$ac607276a8fe9f0a = (stream, fallback = 20)=>{
    let rows = stream && stream.rows ? stream.rows : fallback;
    if (stream && typeof stream.getWindowSize === "function") rows = stream.getWindowSize()[1];
    return rows;
};
$c7b43fcb785e4aea$export$dca3d8ad656c34d2 = (str, options = {})=>{
    if (!str) return str;
    if (typeof options === "number") options = {
        width: options
    };
    let { indent: indent = "", newline: newline = "\n" + indent, width: width = 80 } = options;
    let spaces = (newline + indent).match(/[^\S\n]/g) || [];
    width -= spaces.length;
    let source = `.{1,${width}}([\\s\\u200B]+|$)|[^\\s\\u200B]+?([\\s\\u200B]+|$)`;
    let output = str.trim();
    let regex = new RegExp(source, "g");
    let lines = output.match(regex) || [];
    lines = lines.map((line)=>line.replace(/\n$/, ""));
    if (options.padEnd) lines = lines.map((line)=>line.padEnd(width, " "));
    if (options.padStart) lines = lines.map((line)=>line.padStart(width, " "));
    return indent + lines.join(newline);
};
$c7b43fcb785e4aea$export$980e8f800f2aa0d8 = (color)=>{
    let name = color.stack.find((n)=>$6JGMc.keys.color.includes(n));
    if (name) return $6JGMc[name];
    let bg = color.stack.find((n)=>n.slice(2) === "bg");
    if (bg) return $6JGMc[name.slice(2)];
    return (str)=>str;
};
$c7b43fcb785e4aea$export$b78eb6578ba92547 = (str)=>str ? str[0].toUpperCase() + str.slice(1) : "";
$c7b43fcb785e4aea$export$70ae2c07e401031b = (color)=>{
    if (!color || !color.stack) return color;
    let name = color.stack.find((n)=>$6JGMc.keys.color.includes(n));
    if (name) {
        let col = $6JGMc["bg" + $c7b43fcb785e4aea$export$b78eb6578ba92547(name)];
        return col ? col.black : color;
    }
    let bg = color.stack.find((n)=>n.slice(0, 2) === "bg");
    if (bg) return $6JGMc[bg.slice(2).toLowerCase()] || color;
    return $6JGMc.none;
};
$c7b43fcb785e4aea$export$bd4f6f7e1823bc9e = (color)=>{
    if (!color || !color.stack) return color;
    let name = color.stack.find((n)=>$6JGMc.keys.color.includes(n));
    let bg = color.stack.find((n)=>n.slice(0, 2) === "bg");
    if (name && !bg) return $6JGMc[$c7b43fcb785e4aea$var$complements[name] || name];
    if (bg) {
        let lower = bg.slice(2).toLowerCase();
        let comp = $c7b43fcb785e4aea$var$complements[lower];
        if (!comp) return color;
        return $6JGMc["bg" + $c7b43fcb785e4aea$export$b78eb6578ba92547(comp)] || color;
    }
    return $6JGMc.none;
};
$c7b43fcb785e4aea$export$59d9f6a8e797ecde = (date)=>{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    let hrs = hours === 0 ? 12 : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    return hrs + ":" + min + " " + ampm;
};
$c7b43fcb785e4aea$export$adaa4cf7ef1b65be = (obj = {}, prop = "", val)=>{
    return prop.split(".").reduce((acc, k, i, arr)=>{
        let value = arr.length - 1 > i ? acc[k] || {} : val;
        if (!$c7b43fcb785e4aea$export$a6cdc56e425d0d0a(value) && i < arr.length - 1) value = {};
        return acc[k] = value;
    }, obj);
};
$c7b43fcb785e4aea$export$3988ae62b71be9a3 = (obj = {}, prop = "", fallback)=>{
    let value = obj[prop] == null ? prop.split(".").reduce((acc, k)=>acc && acc[k], obj) : obj[prop];
    return value == null ? fallback : value;
};
$c7b43fcb785e4aea$export$e36fc9d62a853069 = (target, b)=>{
    if (!$c7b43fcb785e4aea$var$isObject(target)) return b;
    if (!$c7b43fcb785e4aea$var$isObject(b)) return target;
    for (let key of Object.keys(b)){
        let desc = Object.getOwnPropertyDescriptor(b, key);
        if (hasOwnProperty.call(desc, "value")) {
            if (hasOwnProperty.call(target, key) && $c7b43fcb785e4aea$var$isObject(desc.value)) {
                let existing = Object.getOwnPropertyDescriptor(target, key);
                if ($c7b43fcb785e4aea$var$isObject(existing.value) && existing.value !== desc.value) target[key] = $c7b43fcb785e4aea$export$4950aa0f605343fb({}, target[key], b[key]);
                else Reflect.defineProperty(target, key, desc);
            } else Reflect.defineProperty(target, key, desc);
        } else Reflect.defineProperty(target, key, desc);
    }
    return target;
};
$c7b43fcb785e4aea$export$4950aa0f605343fb = (...args)=>{
    let target = {};
    for (let ele of args)$c7b43fcb785e4aea$export$e36fc9d62a853069(target, ele);
    return target;
};
$c7b43fcb785e4aea$export$792940db1c9e591d = (obj, emitter)=>{
    let proto = emitter.constructor.prototype;
    for (let key of Object.keys(proto)){
        let val = proto[key];
        if (typeof val === "function") $c7b43fcb785e4aea$export$f36d6a7a5c09a23e(obj, key, val.bind(emitter));
        else $c7b43fcb785e4aea$export$f36d6a7a5c09a23e(obj, key, val);
    }
};
const $c7b43fcb785e4aea$var$onExit = (quit, code)=>{
    if ($c7b43fcb785e4aea$var$onExitCalled) return;
    $c7b43fcb785e4aea$var$onExitCalled = true;
    $c7b43fcb785e4aea$var$onExitCallbacks.forEach((fn)=>fn());
    if (quit === true) process.exit(128 + code);
};
const $c7b43fcb785e4aea$var$onSigTerm = $c7b43fcb785e4aea$var$onExit.bind(null, true, 15);
const $c7b43fcb785e4aea$var$onSigInt = $c7b43fcb785e4aea$var$onExit.bind(null, true, 2);
$c7b43fcb785e4aea$export$47a57ed64c292d4f = (callback)=>{
    if ($c7b43fcb785e4aea$var$onExitCallbacks.size === 0) {
        process.once("SIGTERM", $c7b43fcb785e4aea$var$onSigTerm);
        process.once("SIGINT", $c7b43fcb785e4aea$var$onSigInt);
        process.once("exit", $c7b43fcb785e4aea$var$onExit);
    }
    $c7b43fcb785e4aea$var$onExitCallbacks.add(callback);
    return ()=>{
        $c7b43fcb785e4aea$var$onExitCallbacks.delete(callback);
        if ($c7b43fcb785e4aea$var$onExitCallbacks.size === 0) {
            process.off("SIGTERM", $c7b43fcb785e4aea$var$onSigTerm);
            process.off("SIGINT", $c7b43fcb785e4aea$var$onSigInt);
            process.off("exit", $c7b43fcb785e4aea$var$onExit);
        }
    };
};
$c7b43fcb785e4aea$export$f36d6a7a5c09a23e = (obj, key, value)=>{
    Reflect.defineProperty(obj, key, {
        value: value
    });
};
$c7b43fcb785e4aea$export$c04f1882ebfe07d5 = (obj, key, fn)=>{
    let custom;
    Reflect.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        set (val) {
            custom = val;
        },
        get () {
            return custom ? custom() : fn();
        }
    });
};

});
parcelRegister("6JGMc", function(module, exports) {
"use strict";
const $4e782091be214adb$var$isObject = (val)=>val !== null && typeof val === "object" && !Array.isArray(val);
/* eslint-disable no-control-regex */ // this is a modified version of https://github.com/chalk/ansi-regex (MIT License)
const $4e782091be214adb$var$ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
const $4e782091be214adb$var$hasColor = ()=>{
    if (typeof process !== "undefined") return process.env.FORCE_COLOR !== "0";
    return false;
};

const $4e782091be214adb$var$create = ()=>{
    const colors = {
        enabled: $4e782091be214adb$var$hasColor(),
        visible: true,
        styles: {},
        keys: {}
    };
    const ansi = (style)=>{
        let open = style.open = `\u001b[${style.codes[0]}m`;
        let close = style.close = `\u001b[${style.codes[1]}m`;
        let regex = style.regex = new RegExp(`\\u001b\\[${style.codes[1]}m`, "g");
        style.wrap = (input, newline)=>{
            if (input.includes(close)) input = input.replace(regex, close + open);
            let output = open + input + close;
            // see https://github.com/chalk/chalk/pull/92, thanks to the
            // chalk contributors for this fix. However, we've confirmed that
            // this issue is also present in Windows terminals
            return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
        };
        return style;
    };
    const wrap = (style, input, newline)=>{
        return typeof style === "function" ? style(input) : style.wrap(input, newline);
    };
    const style = (input, stack)=>{
        if (input === "" || input == null) return "";
        if (colors.enabled === false) return input;
        if (colors.visible === false) return "";
        let str = "" + input;
        let nl = str.includes("\n");
        let n = stack.length;
        if (n > 0 && stack.includes("unstyle")) stack = [
            ...new Set([
                "unstyle",
                ...stack
            ])
        ].reverse();
        while(n-- > 0)str = wrap(colors.styles[stack[n]], str, nl);
        return str;
    };
    const define = (name, codes, type)=>{
        colors.styles[name] = ansi({
            name: name,
            codes: codes
        });
        let keys = colors.keys[type] || (colors.keys[type] = []);
        keys.push(name);
        Reflect.defineProperty(colors, name, {
            configurable: true,
            enumerable: true,
            set (value) {
                colors.alias(name, value);
            },
            get () {
                let color = (input)=>style(input, color.stack);
                Reflect.setPrototypeOf(color, colors);
                color.stack = this.stack ? this.stack.concat(name) : [
                    name
                ];
                return color;
            }
        });
    };
    define("reset", [
        0,
        0
    ], "modifier");
    define("bold", [
        1,
        22
    ], "modifier");
    define("dim", [
        2,
        22
    ], "modifier");
    define("italic", [
        3,
        23
    ], "modifier");
    define("underline", [
        4,
        24
    ], "modifier");
    define("inverse", [
        7,
        27
    ], "modifier");
    define("hidden", [
        8,
        28
    ], "modifier");
    define("strikethrough", [
        9,
        29
    ], "modifier");
    define("black", [
        30,
        39
    ], "color");
    define("red", [
        31,
        39
    ], "color");
    define("green", [
        32,
        39
    ], "color");
    define("yellow", [
        33,
        39
    ], "color");
    define("blue", [
        34,
        39
    ], "color");
    define("magenta", [
        35,
        39
    ], "color");
    define("cyan", [
        36,
        39
    ], "color");
    define("white", [
        37,
        39
    ], "color");
    define("gray", [
        90,
        39
    ], "color");
    define("grey", [
        90,
        39
    ], "color");
    define("bgBlack", [
        40,
        49
    ], "bg");
    define("bgRed", [
        41,
        49
    ], "bg");
    define("bgGreen", [
        42,
        49
    ], "bg");
    define("bgYellow", [
        43,
        49
    ], "bg");
    define("bgBlue", [
        44,
        49
    ], "bg");
    define("bgMagenta", [
        45,
        49
    ], "bg");
    define("bgCyan", [
        46,
        49
    ], "bg");
    define("bgWhite", [
        47,
        49
    ], "bg");
    define("blackBright", [
        90,
        39
    ], "bright");
    define("redBright", [
        91,
        39
    ], "bright");
    define("greenBright", [
        92,
        39
    ], "bright");
    define("yellowBright", [
        93,
        39
    ], "bright");
    define("blueBright", [
        94,
        39
    ], "bright");
    define("magentaBright", [
        95,
        39
    ], "bright");
    define("cyanBright", [
        96,
        39
    ], "bright");
    define("whiteBright", [
        97,
        39
    ], "bright");
    define("bgBlackBright", [
        100,
        49
    ], "bgBright");
    define("bgRedBright", [
        101,
        49
    ], "bgBright");
    define("bgGreenBright", [
        102,
        49
    ], "bgBright");
    define("bgYellowBright", [
        103,
        49
    ], "bgBright");
    define("bgBlueBright", [
        104,
        49
    ], "bgBright");
    define("bgMagentaBright", [
        105,
        49
    ], "bgBright");
    define("bgCyanBright", [
        106,
        49
    ], "bgBright");
    define("bgWhiteBright", [
        107,
        49
    ], "bgBright");
    colors.ansiRegex = $4e782091be214adb$var$ANSI_REGEX;
    colors.hasColor = colors.hasAnsi = (str)=>{
        colors.ansiRegex.lastIndex = 0;
        return typeof str === "string" && str !== "" && colors.ansiRegex.test(str);
    };
    colors.alias = (name, color)=>{
        let fn = typeof color === "string" ? colors[color] : color;
        if (typeof fn !== "function") throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
        if (!fn.stack) {
            Reflect.defineProperty(fn, "name", {
                value: name
            });
            colors.styles[name] = fn;
            fn.stack = [
                name
            ];
        }
        Reflect.defineProperty(colors, name, {
            configurable: true,
            enumerable: true,
            set (value) {
                colors.alias(name, value);
            },
            get () {
                let color = (input)=>style(input, color.stack);
                Reflect.setPrototypeOf(color, colors);
                color.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
                return color;
            }
        });
    };
    colors.theme = (custom)=>{
        if (!$4e782091be214adb$var$isObject(custom)) throw new TypeError("Expected theme to be an object");
        for (let name of Object.keys(custom))colors.alias(name, custom[name]);
        return colors;
    };
    colors.alias("unstyle", (str)=>{
        if (typeof str === "string" && str !== "") {
            colors.ansiRegex.lastIndex = 0;
            return str.replace(colors.ansiRegex, "");
        }
        return "";
    });
    colors.alias("noop", (str)=>str);
    colors.none = colors.clear = colors.noop;
    colors.stripColor = colors.unstyle;
    colors.symbols = (parcelRequire("lIsg9"));
    colors.define = define;
    return colors;
};
module.exports = $4e782091be214adb$var$create();
module.exports.create = $4e782091be214adb$var$create;

});



parcelRegister("bk3cM", function(module, exports) {
"use strict";

var $a69eW = parcelRequire("a69eW");

var $8Jlwu = parcelRequire("8Jlwu");

var $h91fL = parcelRequire("h91fL");
module.exports = (prompt)=>{
    prompt.options = $h91fL.merge({}, prompt.options.theme, prompt.options);
    prompt.symbols = $8Jlwu.merge(prompt.options);
    prompt.styles = $a69eW.merge(prompt.options);
};

});
parcelRegister("a69eW", function(module, exports) {
"use strict";

var $h91fL = parcelRequire("h91fL");

var $6JGMc = parcelRequire("6JGMc");
const $75a1a1d0cc47810f$var$styles = {
    default: $6JGMc.noop,
    noop: $6JGMc.noop,
    /**
   * Modifiers
   */ set inverse (custom){
        this._inverse = custom;
    },
    get inverse () {
        return this._inverse || $h91fL.inverse(this.primary);
    },
    set complement (custom){
        this._complement = custom;
    },
    get complement () {
        return this._complement || $h91fL.complement(this.primary);
    },
    /**
   * Main color
   */ primary: $6JGMc.cyan,
    /**
   * Main palette
   */ success: $6JGMc.green,
    danger: $6JGMc.magenta,
    strong: $6JGMc.bold,
    warning: $6JGMc.yellow,
    muted: $6JGMc.dim,
    disabled: $6JGMc.gray,
    dark: $6JGMc.dim.gray,
    underline: $6JGMc.underline,
    set info (custom){
        this._info = custom;
    },
    get info () {
        return this._info || this.primary;
    },
    set em (custom){
        this._em = custom;
    },
    get em () {
        return this._em || this.primary.underline;
    },
    set heading (custom){
        this._heading = custom;
    },
    get heading () {
        return this._heading || this.muted.underline;
    },
    /**
   * Statuses
   */ set pending (custom){
        this._pending = custom;
    },
    get pending () {
        return this._pending || this.primary;
    },
    set submitted (custom){
        this._submitted = custom;
    },
    get submitted () {
        return this._submitted || this.success;
    },
    set cancelled (custom){
        this._cancelled = custom;
    },
    get cancelled () {
        return this._cancelled || this.danger;
    },
    /**
   * Special styling
   */ set typing (custom){
        this._typing = custom;
    },
    get typing () {
        return this._typing || this.dim;
    },
    set placeholder (custom){
        this._placeholder = custom;
    },
    get placeholder () {
        return this._placeholder || this.primary.dim;
    },
    set highlight (custom){
        this._highlight = custom;
    },
    get highlight () {
        return this._highlight || this.inverse;
    }
};
$75a1a1d0cc47810f$var$styles.merge = (options = {})=>{
    if (options.styles && typeof options.styles.enabled === "boolean") $6JGMc.enabled = options.styles.enabled;
    if (options.styles && typeof options.styles.visible === "boolean") $6JGMc.visible = options.styles.visible;
    let result = $h91fL.merge({}, $75a1a1d0cc47810f$var$styles, options.styles);
    delete result.merge;
    for (let key of Object.keys($6JGMc))if (!hasOwnProperty.call(result, key)) Reflect.defineProperty(result, key, {
        get: ()=>$6JGMc[key]
    });
    for (let key of Object.keys($6JGMc.styles))if (!hasOwnProperty.call(result, key)) Reflect.defineProperty(result, key, {
        get: ()=>$6JGMc[key]
    });
    return result;
};
module.exports = $75a1a1d0cc47810f$var$styles;

});

parcelRegister("8Jlwu", function(module, exports) {
"use strict";
const $65b338bd52b1393f$var$isWindows = process.platform === "win32";

var $6JGMc = parcelRequire("6JGMc");

var $h91fL = parcelRequire("h91fL");
const $65b338bd52b1393f$var$symbols = {
    ...$6JGMc.symbols,
    upDownDoubleArrow: "\u21D5",
    upDownDoubleArrow2: "\u2B0D",
    upDownArrow: "\u2195",
    asterisk: "*",
    asterism: "\u2042",
    bulletWhite: "\u25E6",
    electricArrow: "\u2301",
    ellipsisLarge: "\u22EF",
    ellipsisSmall: "\u2026",
    fullBlock: "\u2588",
    identicalTo: "\u2261",
    indicator: $6JGMc.symbols.check,
    leftAngle: "\u2039",
    mark: "\u203B",
    minus: "\u2212",
    multiplication: "\xd7",
    obelus: "\xf7",
    percent: "%",
    pilcrow: "\xb6",
    pilcrow2: "\u2761",
    pencilUpRight: "\u2710",
    pencilDownRight: "\u270E",
    pencilRight: "\u270F",
    plus: "+",
    plusMinus: "\xb1",
    pointRight: "\u261E",
    rightAngle: "\u203A",
    section: "\xa7",
    hexagon: {
        off: "\u2B21",
        on: "\u2B22",
        disabled: "\u2B22"
    },
    ballot: {
        on: "\u2611",
        off: "\u2610",
        disabled: "\u2612"
    },
    stars: {
        on: "\u2605",
        off: "\u2606",
        disabled: "\u2606"
    },
    folder: {
        on: "\u25BC",
        off: "\u25B6",
        disabled: "\u25B6"
    },
    prefix: {
        pending: $6JGMc.symbols.question,
        submitted: $6JGMc.symbols.check,
        cancelled: $6JGMc.symbols.cross
    },
    separator: {
        pending: $6JGMc.symbols.pointerSmall,
        submitted: $6JGMc.symbols.middot,
        cancelled: $6JGMc.symbols.middot
    },
    radio: {
        off: $65b338bd52b1393f$var$isWindows ? "( )" : "\u25EF",
        on: $65b338bd52b1393f$var$isWindows ? "(*)" : "\u25C9",
        disabled: $65b338bd52b1393f$var$isWindows ? "(|)" : "\u24BE"
    },
    numbers: [
        "\u24EA",
        "\u2460",
        "\u2461",
        "\u2462",
        "\u2463",
        "\u2464",
        "\u2465",
        "\u2466",
        "\u2467",
        "\u2468",
        "\u2469",
        "\u246A",
        "\u246B",
        "\u246C",
        "\u246D",
        "\u246E",
        "\u246F",
        "\u2470",
        "\u2471",
        "\u2472",
        "\u2473",
        "\u3251",
        "\u3252",
        "\u3253",
        "\u3254",
        "\u3255",
        "\u3256",
        "\u3257",
        "\u3258",
        "\u3259",
        "\u325A",
        "\u325B",
        "\u325C",
        "\u325D",
        "\u325E",
        "\u325F",
        "\u32B1",
        "\u32B2",
        "\u32B3",
        "\u32B4",
        "\u32B5",
        "\u32B6",
        "\u32B7",
        "\u32B8",
        "\u32B9",
        "\u32BA",
        "\u32BB",
        "\u32BC",
        "\u32BD",
        "\u32BE",
        "\u32BF"
    ]
};
$65b338bd52b1393f$var$symbols.merge = (options)=>{
    let result = $h91fL.merge({}, $6JGMc.symbols, $65b338bd52b1393f$var$symbols, options.symbols);
    delete result.merge;
    return result;
};
module.exports = $65b338bd52b1393f$var$symbols;

});


parcelRegister("fo01Y", function(module, exports) {
"use strict";
const $b3391f051817b693$var$isTerm = process.env.TERM_PROGRAM === "Apple_Terminal";

var $kCxMd = parcelRequire("kCxMd");

var $h91fL = parcelRequire("h91fL");
const $b3391f051817b693$var$ansi = module.exports = module.exports;
const $b3391f051817b693$var$ESC = "\x1b[";
const $b3391f051817b693$var$BEL = "\x07";
let $b3391f051817b693$var$hidden = false;
const $b3391f051817b693$var$code = $b3391f051817b693$var$ansi.code = {
    bell: $b3391f051817b693$var$BEL,
    beep: $b3391f051817b693$var$BEL,
    beginning: `${$b3391f051817b693$var$ESC}G`,
    down: `${$b3391f051817b693$var$ESC}J`,
    esc: $b3391f051817b693$var$ESC,
    getPosition: `${$b3391f051817b693$var$ESC}6n`,
    hide: `${$b3391f051817b693$var$ESC}?25l`,
    line: `${$b3391f051817b693$var$ESC}2K`,
    lineEnd: `${$b3391f051817b693$var$ESC}K`,
    lineStart: `${$b3391f051817b693$var$ESC}1K`,
    restorePosition: $b3391f051817b693$var$ESC + ($b3391f051817b693$var$isTerm ? "8" : "u"),
    savePosition: $b3391f051817b693$var$ESC + ($b3391f051817b693$var$isTerm ? "7" : "s"),
    screen: `${$b3391f051817b693$var$ESC}2J`,
    show: `${$b3391f051817b693$var$ESC}?25h`,
    up: `${$b3391f051817b693$var$ESC}1J`
};
const $b3391f051817b693$var$cursor = $b3391f051817b693$var$ansi.cursor = {
    get hidden () {
        return $b3391f051817b693$var$hidden;
    },
    hide () {
        $b3391f051817b693$var$hidden = true;
        return $b3391f051817b693$var$code.hide;
    },
    show () {
        $b3391f051817b693$var$hidden = false;
        return $b3391f051817b693$var$code.show;
    },
    forward: (count = 1)=>`${$b3391f051817b693$var$ESC}${count}C`,
    backward: (count = 1)=>`${$b3391f051817b693$var$ESC}${count}D`,
    nextLine: (count = 1)=>`${$b3391f051817b693$var$ESC}E`.repeat(count),
    prevLine: (count = 1)=>`${$b3391f051817b693$var$ESC}F`.repeat(count),
    up: (count = 1)=>count ? `${$b3391f051817b693$var$ESC}${count}A` : "",
    down: (count = 1)=>count ? `${$b3391f051817b693$var$ESC}${count}B` : "",
    right: (count = 1)=>count ? `${$b3391f051817b693$var$ESC}${count}C` : "",
    left: (count = 1)=>count ? `${$b3391f051817b693$var$ESC}${count}D` : "",
    to (x, y) {
        return y ? `${$b3391f051817b693$var$ESC}${y + 1};${x + 1}H` : `${$b3391f051817b693$var$ESC}${x + 1}G`;
    },
    move (x = 0, y = 0) {
        let res = "";
        res += x < 0 ? $b3391f051817b693$var$cursor.left(-x) : x > 0 ? $b3391f051817b693$var$cursor.right(x) : "";
        res += y < 0 ? $b3391f051817b693$var$cursor.up(-y) : y > 0 ? $b3391f051817b693$var$cursor.down(y) : "";
        return res;
    },
    strLen (str) {
        // to suport chinese
        var realLength = 0, len = str.length, charCode = -1;
        for(var i = 0; i < len; i++){
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    },
    restore (state = {}) {
        let { after: after, cursor: cursor, initial: initial, input: input, prompt: prompt, size: size, value: value } = state;
        initial = $h91fL.isPrimitive(initial) ? String(initial) : "";
        input = $h91fL.isPrimitive(input) ? String(input) : "";
        value = $h91fL.isPrimitive(value) ? String(value) : "";
        if (size) {
            let codes = $b3391f051817b693$var$ansi.cursor.up(size) + $b3391f051817b693$var$ansi.cursor.to(this.strLen(prompt));
            let diff = input.length - cursor;
            if (diff > 0) codes += $b3391f051817b693$var$ansi.cursor.left(diff);
            return codes;
        }
        if (value || after) {
            let pos = !input && !!initial ? -this.strLen(initial) : -this.strLen(input) + cursor;
            if (after) pos -= this.strLen(after);
            if (input === "" && initial && !prompt.includes(initial)) pos += this.strLen(initial);
            return $b3391f051817b693$var$ansi.cursor.move(pos);
        }
    }
};
const $b3391f051817b693$var$erase = $b3391f051817b693$var$ansi.erase = {
    screen: $b3391f051817b693$var$code.screen,
    up: $b3391f051817b693$var$code.up,
    down: $b3391f051817b693$var$code.down,
    line: $b3391f051817b693$var$code.line,
    lineEnd: $b3391f051817b693$var$code.lineEnd,
    lineStart: $b3391f051817b693$var$code.lineStart,
    lines (n) {
        let str = "";
        for(let i = 0; i < n; i++)str += $b3391f051817b693$var$ansi.erase.line + (i < n - 1 ? $b3391f051817b693$var$ansi.cursor.up(1) : "");
        if (n) str += $b3391f051817b693$var$ansi.code.beginning;
        return str;
    }
};
$b3391f051817b693$var$ansi.clear = (input = "", columns = process.stdout.columns)=>{
    if (!columns) return $b3391f051817b693$var$erase.line + $b3391f051817b693$var$cursor.to(0);
    let width = (str)=>[
            ...$kCxMd(str)
        ].length;
    let lines = input.split(/\r?\n/);
    let rows = 0;
    for (let line of lines)rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / columns);
    return ($b3391f051817b693$var$erase.line + $b3391f051817b693$var$cursor.prevLine()).repeat(rows - 1) + $b3391f051817b693$var$erase.line + $b3391f051817b693$var$cursor.to(0);
};

});


parcelRegister("iFfp1", function(module, exports) {
"use strict";

var $h91fL = parcelRequire("h91fL");
const $d96800f5d3e6a7b7$var$define = (key, fn)=>{
    $h91fL.defineExport(module.exports, key, fn);
    $h91fL.defineExport(module.exports, key.toLowerCase(), fn);
};

$d96800f5d3e6a7b7$var$define("AutoComplete", ()=>(parcelRequire("esnV9")));

$d96800f5d3e6a7b7$var$define("BasicAuth", ()=>(parcelRequire("3jJRO")));

$d96800f5d3e6a7b7$var$define("Confirm", ()=>(parcelRequire("cmBmB")));

$d96800f5d3e6a7b7$var$define("Editable", ()=>(parcelRequire("kfDEO")));

$d96800f5d3e6a7b7$var$define("Form", ()=>(parcelRequire("aZCKE")));

$d96800f5d3e6a7b7$var$define("Input", ()=>(parcelRequire("1AbW6")));

$d96800f5d3e6a7b7$var$define("Invisible", ()=>(parcelRequire("hOkSq")));

$d96800f5d3e6a7b7$var$define("List", ()=>(parcelRequire("kQSAh")));

$d96800f5d3e6a7b7$var$define("MultiSelect", ()=>(parcelRequire("lkCXa")));

$d96800f5d3e6a7b7$var$define("Numeral", ()=>(parcelRequire("f3ce0")));

$d96800f5d3e6a7b7$var$define("Password", ()=>(parcelRequire("4NZRQ")));

$d96800f5d3e6a7b7$var$define("Scale", ()=>(parcelRequire("9JggT")));

$d96800f5d3e6a7b7$var$define("Select", ()=>(parcelRequire("81q1B")));

$d96800f5d3e6a7b7$var$define("Snippet", ()=>(parcelRequire("6wCWQ")));

$d96800f5d3e6a7b7$var$define("Sort", ()=>(parcelRequire("3kq2T")));

$d96800f5d3e6a7b7$var$define("Survey", ()=>(parcelRequire("10WNd")));

$d96800f5d3e6a7b7$var$define("Text", ()=>(parcelRequire("4MK8D")));

$d96800f5d3e6a7b7$var$define("Toggle", ()=>(parcelRequire("aeyjP")));

$d96800f5d3e6a7b7$var$define("Quiz", ()=>(parcelRequire("lCQag")));

});
parcelRegister("esnV9", function(module, exports) {
"use strict";

var $81q1B = parcelRequire("81q1B");
const $a8663c63261ec71e$var$highlight = (input, color)=>{
    const regex = input ? new RegExp(input, "ig") : /$^/;
    return (str)=>{
        return input ? str.replace(regex, (match)=>color(match)) : str;
    };
};
class $a8663c63261ec71e$var$AutoComplete extends $81q1B {
    constructor(options){
        super(options);
        this.cursorShow();
    }
    moveCursor(n) {
        this.state.cursor += n;
    }
    dispatch(ch) {
        return this.append(ch);
    }
    space(ch) {
        return this.options.multiple ? super.space(ch) : this.append(ch);
    }
    append(ch) {
        let { cursor: cursor, input: input } = this.state;
        this.input = input.slice(0, cursor) + ch + input.slice(cursor);
        this.moveCursor(1);
        return this.complete();
    }
    delete() {
        let { cursor: cursor, input: input } = this.state;
        if (!input) return this.alert();
        this.input = input.slice(0, cursor - 1) + input.slice(cursor);
        this.moveCursor(-1);
        return this.complete();
    }
    deleteForward() {
        let { cursor: cursor, input: input } = this.state;
        if (input[cursor] === void 0) return this.alert();
        this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
        return this.complete();
    }
    number(ch) {
        return this.append(ch);
    }
    async complete() {
        this.completing = true;
        this.choices = await this.suggest(this.input, this.state._choices);
        this.state.limit = void 0; // allow getter/setter to reset limit
        this.index = Math.min(Math.max(this.visible.length - 1, 0), this.index);
        await this.render();
        this.completing = false;
    }
    suggest(input = this.input, choices = this.state._choices) {
        if (typeof this.options.suggest === "function") return this.options.suggest.call(this, input, choices);
        let str = input.toLowerCase();
        return choices.filter((ch)=>ch.message.toLowerCase().includes(str));
    }
    pointer() {
        return "";
    }
    format() {
        if (!this.focused) return this.input;
        if (this.options.multiple && this.state.submitted) return this.selected.map((ch)=>this.styles.primary(ch.message)).join(", ");
        if (this.state.submitted) {
            let value = this.value = this.input = this.focused.value;
            return this.styles.primary(value);
        }
        return this.input;
    }
    async render() {
        if (this.state.status !== "pending") return super.render();
        const hl = this.options.highlight || this.styles.complement;
        const style = (input, color)=>{
            if (!input) return input;
            if (hl.stack) return hl(input);
            return hl.call(this, input);
        };
        const color = $a8663c63261ec71e$var$highlight(this.input, style);
        const choices = this.choices;
        this.choices = choices.map((ch)=>({
                ...ch,
                message: color(ch.message)
            }));
        await super.render();
        this.choices = choices;
    }
    submit() {
        if (this.options.multiple) this.value = this.selected.map((ch)=>ch.name);
        return super.submit();
    }
}
module.exports = $a8663c63261ec71e$var$AutoComplete;

});
parcelRegister("81q1B", function(module, exports) {
"use strict";

var $i40GR = parcelRequire("i40GR");

var $h91fL = parcelRequire("h91fL");
class $5d729ab48aada7bc$var$SelectPrompt extends $i40GR {
    constructor(options){
        super(options);
        this.emptyError = this.options.emptyError || "No items were selected";
    }
    async dispatch(s, key) {
        if (this.multiple) return this[key.name] ? await this[key.name](s, key) : await super.dispatch(s, key);
        this.alert();
    }
    separator() {
        if (this.options.separator) return super.separator();
        let sep = this.styles.muted(this.symbols.ellipsis);
        return this.state.submitted ? super.separator() : sep;
    }
    pointer(choice, i) {
        return !this.multiple || this.options.pointer ? super.pointer(choice, i) : "";
    }
    indicator(choice, i) {
        return this.multiple ? super.indicator(choice, i) : "";
    }
    choiceMessage(choice, i) {
        let message = this.resolve(choice.message, this.state, choice, i);
        if (choice.role === "heading" && !$h91fL.hasColor(message)) message = this.styles.strong(message);
        return this.resolve(message, this.state, choice, i);
    }
    choiceSeparator() {
        return ":";
    }
    async renderChoice(choice, i) {
        await this.onChoice(choice, i);
        let focused = this.index === i;
        let pointer = await this.pointer(choice, i);
        let check = await this.indicator(choice, i) + (choice.pad || "");
        let hint = await this.resolve(choice.hint, this.state, choice, i);
        if (hint && !$h91fL.hasColor(hint)) hint = this.styles.muted(hint);
        let ind = this.indent(choice);
        let msg = await this.choiceMessage(choice, i);
        let line = ()=>[
                this.margin[3],
                ind + pointer + check,
                msg,
                this.margin[1],
                hint
            ].filter(Boolean).join(" ");
        if (choice.role === "heading") return line();
        if (choice.disabled) {
            if (!$h91fL.hasColor(msg)) msg = this.styles.disabled(msg);
            return line();
        }
        if (focused) msg = this.styles.em(msg);
        return line();
    }
    async renderChoices() {
        if (this.state.loading === "choices") return this.styles.warning("Loading choices");
        if (this.state.submitted) return "";
        let choices = this.visible.map(async (ch, i)=>await this.renderChoice(ch, i));
        let visible = await Promise.all(choices);
        if (!visible.length) visible.push(this.styles.danger("No matching choices"));
        let result = this.margin[0] + visible.join("\n");
        let header;
        if (this.options.choicesHeader) header = await this.resolve(this.options.choicesHeader, this.state);
        return [
            header,
            result
        ].filter(Boolean).join("\n");
    }
    format() {
        if (!this.state.submitted || this.state.cancelled) return "";
        if (Array.isArray(this.selected)) return this.selected.map((choice)=>this.styles.primary(choice.name)).join(", ");
        return this.styles.primary(this.selected.name);
    }
    async render() {
        let { submitted: submitted, size: size } = this.state;
        let prompt = "";
        let header = await this.header();
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        if (this.options.promptLine !== false) {
            prompt = [
                prefix,
                message,
                separator,
                ""
            ].join(" ");
            this.state.prompt = prompt;
        }
        let output = await this.format();
        let help = await this.error() || await this.hint();
        let body = await this.renderChoices();
        let footer = await this.footer();
        if (output) prompt += output;
        if (help && !prompt.includes(help)) prompt += " " + help;
        if (submitted && !output && !body.trim() && this.multiple && this.emptyError != null) prompt += this.styles.danger(this.emptyError);
        this.clear(size);
        this.write([
            header,
            prompt,
            body,
            footer
        ].filter(Boolean).join("\n"));
        this.write(this.margin[2]);
        this.restore();
    }
}
module.exports = $5d729ab48aada7bc$var$SelectPrompt;

});
parcelRegister("i40GR", function(module, exports) {
"use strict";

var $kCxMd = parcelRequire("kCxMd");

var $3fCUp = parcelRequire("3fCUp");

var $4AFHQ = parcelRequire("4AFHQ");

var $h91fL = parcelRequire("h91fL");
const { reorder: $d26922cefce51140$var$reorder, scrollUp: $d26922cefce51140$var$scrollUp, scrollDown: $d26922cefce51140$var$scrollDown, isObject: $d26922cefce51140$var$isObject, swap: $d26922cefce51140$var$swap } = $h91fL;
class $d26922cefce51140$var$ArrayPrompt extends $3fCUp {
    constructor(options){
        super(options);
        this.cursorHide();
        this.maxSelected = options.maxSelected || Infinity;
        this.multiple = options.multiple || false;
        this.initial = options.initial || 0;
        this.delay = options.delay || 0;
        this.longest = 0;
        this.num = "";
    }
    async initialize() {
        if (typeof this.options.initial === "function") this.initial = await this.options.initial.call(this);
        await this.reset(true);
        await super.initialize();
    }
    async reset() {
        let { choices: choices, initial: initial, autofocus: autofocus, suggest: suggest } = this.options;
        this.state._choices = [];
        this.state.choices = [];
        this.choices = await Promise.all(await this.toChoices(choices));
        this.choices.forEach((ch)=>ch.enabled = false);
        if (typeof suggest !== "function" && this.selectable.length === 0) throw new Error("At least one choice must be selectable");
        if ($d26922cefce51140$var$isObject(initial)) initial = Object.keys(initial);
        if (Array.isArray(initial)) {
            if (autofocus != null) this.index = this.findIndex(autofocus);
            initial.forEach((v)=>this.enable(this.find(v)));
            await this.render();
        } else {
            if (autofocus != null) initial = autofocus;
            if (typeof initial === "string") initial = this.findIndex(initial);
            if (typeof initial === "number" && initial > -1) {
                this.index = Math.max(0, Math.min(initial, this.choices.length));
                this.enable(this.find(this.index));
            }
        }
        if (this.isDisabled(this.focused)) await this.down();
    }
    async toChoices(value, parent) {
        this.state.loadingChoices = true;
        let choices = [];
        let index = 0;
        let toChoices = async (items, parent)=>{
            if (typeof items === "function") items = await items.call(this);
            if (items instanceof Promise) items = await items;
            for(let i = 0; i < items.length; i++){
                let choice = items[i] = await this.toChoice(items[i], index++, parent);
                choices.push(choice);
                if (choice.choices) await toChoices(choice.choices, choice);
            }
            return choices;
        };
        return toChoices(value, parent).then((choices)=>{
            this.state.loadingChoices = false;
            return choices;
        });
    }
    async toChoice(ele, i, parent) {
        if (typeof ele === "function") ele = await ele.call(this, this);
        if (ele instanceof Promise) ele = await ele;
        if (typeof ele === "string") ele = {
            name: ele
        };
        if (ele.normalized) return ele;
        ele.normalized = true;
        let origVal = ele.value;
        let role = $4AFHQ(ele.role, this.options);
        ele = role(this, ele);
        if (typeof ele.disabled === "string" && !ele.hint) {
            ele.hint = ele.disabled;
            ele.disabled = true;
        }
        if (ele.disabled === true && ele.hint == null) ele.hint = "(disabled)";
        // if the choice was already normalized, return it
        if (ele.index != null) return ele;
        ele.name = ele.name || ele.key || ele.title || ele.value || ele.message;
        ele.message = ele.message || ele.name || "";
        ele.value = [
            ele.value,
            ele.name
        ].find(this.isValue.bind(this));
        ele.input = "";
        ele.index = i;
        ele.cursor = 0;
        $h91fL.define(ele, "parent", parent);
        ele.level = parent ? parent.level + 1 : 1;
        if (ele.indent == null) ele.indent = parent ? parent.indent + "  " : ele.indent || "";
        ele.path = parent ? parent.path + "." + ele.name : ele.name;
        ele.enabled = !!(this.multiple && !this.isDisabled(ele) && (ele.enabled || this.isSelected(ele)));
        if (!this.isDisabled(ele)) this.longest = Math.max(this.longest, $kCxMd(ele.message).length);
        // shallow clone the choice first
        let choice = {
            ...ele
        };
        // then allow the choice to be reset using the "original" values
        ele.reset = (input = choice.input, value = choice.value)=>{
            for (let key of Object.keys(choice))ele[key] = choice[key];
            ele.input = input;
            ele.value = value;
        };
        if (origVal == null && typeof ele.initial === "function") ele.input = await ele.initial.call(this, this.state, ele, i);
        return ele;
    }
    async onChoice(choice, i) {
        this.emit("choice", choice, i, this);
        if (typeof choice.onChoice === "function") await choice.onChoice.call(this, this.state, choice, i);
    }
    async addChoice(ele, i, parent) {
        let choice = await this.toChoice(ele, i, parent);
        this.choices.push(choice);
        this.index = this.choices.length - 1;
        this.limit = this.choices.length;
        return choice;
    }
    async newItem(item, i, parent) {
        let ele = {
            name: "New choice name?",
            editable: true,
            newChoice: true,
            ...item
        };
        let choice = await this.addChoice(ele, i, parent);
        choice.updateChoice = ()=>{
            delete choice.newChoice;
            choice.name = choice.message = choice.input;
            choice.input = "";
            choice.cursor = 0;
        };
        return this.render();
    }
    indent(choice) {
        if (choice.indent == null) return choice.level > 1 ? "  ".repeat(choice.level - 1) : "";
        return choice.indent;
    }
    dispatch(s, key) {
        if (this.multiple && this[key.name]) return this[key.name]();
        this.alert();
    }
    focus(choice, enabled) {
        if (typeof enabled !== "boolean") enabled = choice.enabled;
        if (enabled && !choice.enabled && this.selected.length >= this.maxSelected) return this.alert();
        this.index = choice.index;
        choice.enabled = enabled && !this.isDisabled(choice);
        return choice;
    }
    space() {
        if (!this.multiple) return this.alert();
        if (!this.focused) return;
        this.toggle(this.focused);
        return this.render();
    }
    a() {
        if (this.maxSelected < this.choices.length) return this.alert();
        let enabled = this.selectable.every((ch)=>ch.enabled);
        this.choices.forEach((ch)=>ch.enabled = !enabled);
        return this.render();
    }
    i() {
        // don't allow choices to be inverted if it will result in
        // more than the maximum number of allowed selected items.
        if (this.choices.length - this.selected.length > this.maxSelected) return this.alert();
        this.choices.forEach((ch)=>ch.enabled = !ch.enabled);
        return this.render();
    }
    g() {
        if (!this.choices.some((ch)=>!!ch.parent)) return this.a();
        const focused = this.focused;
        this.toggle(focused.parent && !focused.choices ? focused.parent : focused);
        return this.render();
    }
    toggle(choice, enabled) {
        if (!choice.enabled && this.selected.length >= this.maxSelected) return this.alert();
        if (typeof enabled !== "boolean") enabled = !choice.enabled;
        choice.enabled = enabled;
        if (choice.choices) choice.choices.forEach((ch)=>this.toggle(ch, enabled));
        let parent = choice.parent;
        while(parent){
            let choices = parent.choices.filter((ch)=>this.isDisabled(ch));
            parent.enabled = choices.every((ch)=>ch.enabled === true);
            parent = parent.parent;
        }
        $d26922cefce51140$var$reset(this, this.choices);
        this.emit("toggle", choice, this);
        return choice;
    }
    enable(choice) {
        if (this.selected.length >= this.maxSelected) return this.alert();
        choice.enabled = !this.isDisabled(choice);
        choice.choices && choice.choices.forEach(this.enable.bind(this));
        return choice;
    }
    disable(choice) {
        choice.enabled = false;
        choice.choices && choice.choices.forEach(this.disable.bind(this));
        return choice;
    }
    number(n) {
        this.num += n;
        let number = (num)=>{
            let i = Number(num);
            if (i > this.choices.length - 1) return this.alert();
            let focused = this.focused;
            let choice = this.choices.find((ch)=>i === ch.index);
            if (!choice.enabled && this.selected.length >= this.maxSelected) return this.alert();
            if (this.visible.indexOf(choice) === -1) {
                let choices = $d26922cefce51140$var$reorder(this.choices);
                let actualIdx = choices.indexOf(choice);
                if (focused.index > actualIdx) {
                    let start = choices.slice(actualIdx, actualIdx + this.limit);
                    let end = choices.filter((ch)=>!start.includes(ch));
                    this.choices = start.concat(end);
                } else {
                    let pos = actualIdx - this.limit + 1;
                    this.choices = choices.slice(pos).concat(choices.slice(0, pos));
                }
            }
            this.index = this.choices.indexOf(choice);
            this.toggle(this.focused);
            return this.render();
        };
        clearTimeout(this.numberTimeout);
        return new Promise((resolve)=>{
            let len = this.choices.length;
            let num = this.num;
            let handle = (val = false, res)=>{
                clearTimeout(this.numberTimeout);
                if (val) res = number(num);
                this.num = "";
                resolve(res);
            };
            if (num === "0" || num.length === 1 && Number(num + "0") > len) return handle(true);
            if (Number(num) > len) return handle(false, this.alert());
            this.numberTimeout = setTimeout(()=>handle(true), this.delay);
        });
    }
    home() {
        this.choices = $d26922cefce51140$var$reorder(this.choices);
        this.index = 0;
        return this.render();
    }
    end() {
        let pos = this.choices.length - this.limit;
        let choices = $d26922cefce51140$var$reorder(this.choices);
        this.choices = choices.slice(pos).concat(choices.slice(0, pos));
        this.index = this.limit - 1;
        return this.render();
    }
    first() {
        this.index = 0;
        return this.render();
    }
    last() {
        this.index = this.visible.length - 1;
        return this.render();
    }
    prev() {
        if (this.visible.length <= 1) return this.alert();
        return this.up();
    }
    next() {
        if (this.visible.length <= 1) return this.alert();
        return this.down();
    }
    right() {
        if (this.cursor >= this.input.length) return this.alert();
        this.cursor++;
        return this.render();
    }
    left() {
        if (this.cursor <= 0) return this.alert();
        this.cursor--;
        return this.render();
    }
    up() {
        let len = this.choices.length;
        let vis = this.visible.length;
        let idx = this.index;
        if (this.options.scroll === false && idx === 0) return this.alert();
        if (len > vis && idx === 0) return this.scrollUp();
        this.index = (idx - 1 % len + len) % len;
        if (this.isDisabled() && !this.allChoicesAreDisabled()) return this.up();
        return this.render();
    }
    down() {
        let len = this.choices.length;
        let vis = this.visible.length;
        let idx = this.index;
        if (this.options.scroll === false && idx === vis - 1) return this.alert();
        if (len > vis && idx === vis - 1) return this.scrollDown();
        this.index = (idx + 1) % len;
        if (this.isDisabled() && !this.allChoicesAreDisabled()) return this.down();
        return this.render();
    }
    scrollUp(i = 0) {
        this.choices = $d26922cefce51140$var$scrollUp(this.choices);
        this.index = i;
        if (this.isDisabled()) return this.up();
        return this.render();
    }
    scrollDown(i = this.visible.length - 1) {
        this.choices = $d26922cefce51140$var$scrollDown(this.choices);
        this.index = i;
        if (this.isDisabled()) return this.down();
        return this.render();
    }
    async shiftUp() {
        if (this.options.sort === true) {
            this.sorting = true;
            this.swap(this.index - 1);
            await this.up();
            this.sorting = false;
            return;
        }
        return this.scrollUp(this.index);
    }
    async shiftDown() {
        if (this.options.sort === true) {
            this.sorting = true;
            this.swap(this.index + 1);
            await this.down();
            this.sorting = false;
            return;
        }
        return this.scrollDown(this.index);
    }
    pageUp() {
        if (this.visible.length <= 1) return this.alert();
        this.limit = Math.max(this.limit - 1, 0);
        this.index = Math.min(this.limit - 1, this.index);
        this._limit = this.limit;
        if (this.isDisabled()) return this.up();
        return this.render();
    }
    pageDown() {
        if (this.visible.length >= this.choices.length) return this.alert();
        this.index = Math.max(0, this.index);
        this.limit = Math.min(this.limit + 1, this.choices.length);
        this._limit = this.limit;
        if (this.isDisabled()) return this.down();
        return this.render();
    }
    swap(pos) {
        $d26922cefce51140$var$swap(this.choices, this.index, pos);
    }
    allChoicesAreDisabled(choices = this.choices) {
        return choices.every((choice)=>this.isDisabled(choice));
    }
    isDisabled(choice = this.focused) {
        let keys = [
            "disabled",
            "collapsed",
            "hidden",
            "completing",
            "readonly"
        ];
        if (choice && keys.some((key)=>choice[key] === true)) return true;
        return choice && choice.role === "heading";
    }
    isEnabled(choice = this.focused) {
        if (Array.isArray(choice)) return choice.every((ch)=>this.isEnabled(ch));
        if (choice.choices) {
            let choices = choice.choices.filter((ch)=>!this.isDisabled(ch));
            return choice.enabled && choices.every((ch)=>this.isEnabled(ch));
        }
        return choice.enabled && !this.isDisabled(choice);
    }
    isChoice(choice, value) {
        return choice.name === value || choice.index === Number(value);
    }
    isSelected(choice) {
        if (Array.isArray(this.initial)) return this.initial.some((value)=>this.isChoice(choice, value));
        return this.isChoice(choice, this.initial);
    }
    map(names = [], prop = "value") {
        return [].concat(names || []).reduce((acc, name)=>{
            acc[name] = this.find(name, prop);
            return acc;
        }, {});
    }
    filter(value, prop) {
        let isChoice = (ele, i)=>[
                ele.name,
                i
            ].includes(value);
        let fn = typeof value === "function" ? value : isChoice;
        let choices = this.options.multiple ? this.state._choices : this.choices;
        let result = choices.filter(fn);
        if (prop) return result.map((ch)=>ch[prop]);
        return result;
    }
    find(value, prop) {
        if ($d26922cefce51140$var$isObject(value)) return prop ? value[prop] : value;
        let isChoice = (ele, i)=>[
                ele.name,
                i
            ].includes(value);
        let fn = typeof value === "function" ? value : isChoice;
        let choice = this.choices.find(fn);
        if (choice) return prop ? choice[prop] : choice;
    }
    findIndex(value) {
        return this.choices.indexOf(this.find(value));
    }
    async submit() {
        let choice = this.focused;
        if (!choice) return this.alert();
        if (choice.newChoice) {
            if (!choice.input) return this.alert();
            choice.updateChoice();
            return this.render();
        }
        if (this.choices.some((ch)=>ch.newChoice)) return this.alert();
        let { reorder: reorder, sort: sort } = this.options;
        let multi = this.multiple === true;
        let value = this.selected;
        if (value === void 0) return this.alert();
        // re-sort choices to original order
        if (Array.isArray(value) && reorder !== false && sort !== true) value = $h91fL.reorder(value);
        this.value = multi ? value.map((ch)=>ch.name) : value.name;
        return super.submit();
    }
    set choices(choices = []) {
        this.state._choices = this.state._choices || [];
        this.state.choices = choices;
        for (let choice of choices)if (!this.state._choices.some((ch)=>ch.name === choice.name)) this.state._choices.push(choice);
        if (!this._initial && this.options.initial) {
            this._initial = true;
            let init = this.initial;
            if (typeof init === "string" || typeof init === "number") {
                let choice = this.find(init);
                if (choice) {
                    this.initial = choice.index;
                    this.focus(choice, true);
                }
            }
        }
    }
    get choices() {
        return $d26922cefce51140$var$reset(this, this.state.choices || []);
    }
    set visible(visible) {
        this.state.visible = visible;
    }
    get visible() {
        return (this.state.visible || this.choices).slice(0, this.limit);
    }
    set limit(num) {
        this.state.limit = num;
    }
    get limit() {
        let { state: state, options: options, choices: choices } = this;
        let limit = state.limit || this._limit || options.limit || choices.length;
        return Math.min(limit, this.height);
    }
    set value(value) {
        super.value = value;
    }
    get value() {
        if (typeof super.value !== "string" && super.value === this.initial) return this.input;
        return super.value;
    }
    set index(i) {
        this.state.index = i;
    }
    get index() {
        return Math.max(0, this.state ? this.state.index : 0);
    }
    get enabled() {
        return this.filter(this.isEnabled.bind(this));
    }
    get focused() {
        let choice = this.choices[this.index];
        if (choice && this.state.submitted && this.multiple !== true) choice.enabled = true;
        return choice;
    }
    get selectable() {
        return this.choices.filter((choice)=>!this.isDisabled(choice));
    }
    get selected() {
        return this.multiple ? this.enabled : this.focused;
    }
}
function $d26922cefce51140$var$reset(prompt, choices) {
    if (choices instanceof Promise) return choices;
    if (typeof choices === "function") {
        if ($h91fL.isAsyncFn(choices)) return choices;
        choices = choices.call(prompt, prompt);
    }
    for (let choice of choices){
        if (Array.isArray(choice.choices)) {
            let items = choice.choices.filter((ch)=>!prompt.isDisabled(ch));
            choice.enabled = items.every((ch)=>ch.enabled === true);
        }
        if (prompt.isDisabled(choice) === true) delete choice.enabled;
    }
    return choices;
}
module.exports = $d26922cefce51140$var$ArrayPrompt;

});
parcelRegister("4AFHQ", function(module, exports) {
"use strict";

var $h91fL = parcelRequire("h91fL");
const $357ae03643361800$var$roles = {
    default (prompt, choice) {
        return choice;
    },
    checkbox (prompt, choice) {
        throw new Error("checkbox role is not implemented yet");
    },
    editable (prompt, choice) {
        throw new Error("editable role is not implemented yet");
    },
    expandable (prompt, choice) {
        throw new Error("expandable role is not implemented yet");
    },
    heading (prompt, choice) {
        choice.disabled = "";
        choice.indicator = [
            choice.indicator,
            " "
        ].find((v)=>v != null);
        choice.message = choice.message || "";
        return choice;
    },
    input (prompt, choice) {
        throw new Error("input role is not implemented yet");
    },
    option (prompt, choice) {
        return $357ae03643361800$var$roles.default(prompt, choice);
    },
    radio (prompt, choice) {
        throw new Error("radio role is not implemented yet");
    },
    separator (prompt, choice) {
        choice.disabled = "";
        choice.indicator = [
            choice.indicator,
            " "
        ].find((v)=>v != null);
        choice.message = choice.message || prompt.symbols.line.repeat(5);
        return choice;
    },
    spacer (prompt, choice) {
        return choice;
    }
};
module.exports = (name, options = {})=>{
    let role = $h91fL.merge({}, $357ae03643361800$var$roles, options.roles);
    return role[name] || role.default;
};

});




parcelRegister("3jJRO", function(module, exports) {
"use strict";

var $1xU82 = parcelRequire("1xU82");
function $26a6b9af5f96865f$var$defaultAuthenticate(value, state) {
    if (value.username === this.options.username && value.password === this.options.password) return true;
    return false;
}
const $26a6b9af5f96865f$var$factory = (authenticate = $26a6b9af5f96865f$var$defaultAuthenticate)=>{
    const choices = [
        {
            name: "username",
            message: "username"
        },
        {
            name: "password",
            message: "password",
            format (input) {
                if (this.options.showPassword) return input;
                let color = this.state.submitted ? this.styles.primary : this.styles.muted;
                return color(this.symbols.asterisk.repeat(input.length));
            }
        }
    ];
    class BasicAuthPrompt extends $1xU82.create(authenticate) {
        constructor(options){
            super({
                ...options,
                choices: choices
            });
        }
        static create(authenticate) {
            return $26a6b9af5f96865f$var$factory(authenticate);
        }
    }
    return BasicAuthPrompt;
};
module.exports = $26a6b9af5f96865f$var$factory();

});
parcelRegister("1xU82", function(module, exports) {
"use strict";

var $aZCKE = parcelRequire("aZCKE");
const $1204697d98bdc354$var$defaultAuthenticate = ()=>{
    throw new Error("expected prompt to have a custom authenticate method");
};
const $1204697d98bdc354$var$factory = (authenticate = $1204697d98bdc354$var$defaultAuthenticate)=>{
    class AuthPrompt extends $aZCKE {
        constructor(options){
            super(options);
        }
        async submit() {
            this.value = await authenticate.call(this, this.values, this.state);
            super.base.submit.call(this);
        }
        static create(authenticate) {
            return $1204697d98bdc354$var$factory(authenticate);
        }
    }
    return AuthPrompt;
};
module.exports = $1204697d98bdc354$var$factory();

});
parcelRegister("aZCKE", function(module, exports) {
"use strict";

var $kCxMd = parcelRequire("kCxMd");

var $81q1B = parcelRequire("81q1B");

var $fFJEH = parcelRequire("fFJEH");
class $800da922f841166b$var$FormPrompt extends $81q1B {
    constructor(options){
        super({
            ...options,
            multiple: true
        });
        this.type = "form";
        this.initial = this.options.initial;
        this.align = [
            this.options.align,
            "right"
        ].find((v)=>v != null);
        this.emptyError = "";
        this.values = {};
    }
    async reset(first) {
        await super.reset();
        if (first === true) this._index = this.index;
        this.index = this._index;
        this.values = {};
        this.choices.forEach((choice)=>choice.reset && choice.reset());
        return this.render();
    }
    dispatch(char) {
        return !!char && this.append(char);
    }
    append(char) {
        let choice = this.focused;
        if (!choice) return this.alert();
        let { cursor: cursor, input: input } = choice;
        choice.value = choice.input = input.slice(0, cursor) + char + input.slice(cursor);
        choice.cursor++;
        return this.render();
    }
    delete() {
        let choice = this.focused;
        if (!choice || choice.cursor <= 0) return this.alert();
        let { cursor: cursor, input: input } = choice;
        choice.value = choice.input = input.slice(0, cursor - 1) + input.slice(cursor);
        choice.cursor--;
        return this.render();
    }
    deleteForward() {
        let choice = this.focused;
        if (!choice) return this.alert();
        let { cursor: cursor, input: input } = choice;
        if (input[cursor] === void 0) return this.alert();
        let str = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
        choice.value = choice.input = str;
        return this.render();
    }
    right() {
        let choice = this.focused;
        if (!choice) return this.alert();
        if (choice.cursor >= choice.input.length) return this.alert();
        choice.cursor++;
        return this.render();
    }
    left() {
        let choice = this.focused;
        if (!choice) return this.alert();
        if (choice.cursor <= 0) return this.alert();
        choice.cursor--;
        return this.render();
    }
    space(ch, key) {
        return this.dispatch(ch, key);
    }
    number(ch, key) {
        return this.dispatch(ch, key);
    }
    next() {
        let ch = this.focused;
        if (!ch) return this.alert();
        let { initial: initial, input: input } = ch;
        if (initial && initial.startsWith(input) && input !== initial) {
            ch.value = ch.input = initial;
            ch.cursor = ch.value.length;
            return this.render();
        }
        return super.next();
    }
    prev() {
        let ch = this.focused;
        if (!ch) return this.alert();
        if (ch.cursor === 0) return super.prev();
        ch.value = ch.input = "";
        ch.cursor = 0;
        return this.render();
    }
    separator() {
        return "";
    }
    format(value) {
        return !this.state.submitted ? super.format(value) : "";
    }
    pointer() {
        return "";
    }
    indicator(choice) {
        return choice.input ? "\u29BF" : "\u2299";
    }
    async choiceSeparator(choice, i) {
        let sep = await this.resolve(choice.separator, this.state, choice, i) || ":";
        return sep ? " " + this.styles.disabled(sep) : "";
    }
    async renderChoice(choice, i) {
        await this.onChoice(choice, i);
        let { state: state, styles: styles } = this;
        let { cursor: cursor, initial: initial = "", name: name, input: input = "" } = choice;
        let { muted: muted, submitted: submitted, primary: primary, danger: danger } = styles;
        let focused = this.index === i;
        let validate = choice.validate || (()=>true);
        let sep = await this.choiceSeparator(choice, i);
        let msg = choice.message;
        if (this.align === "right") msg = msg.padStart(this.longest + 1, " ");
        if (this.align === "left") msg = msg.padEnd(this.longest + 1, " ");
        // re-populate the form values (answers) object
        let value = this.values[name] = input || initial;
        let color = input ? "success" : "dark";
        if (await validate.call(choice, value, this.state) !== true) color = "danger";
        let style = styles[color];
        let indicator = style(await this.indicator(choice, i)) + (choice.pad || "");
        let indent = this.indent(choice);
        let line = ()=>[
                indent,
                indicator,
                msg + sep,
                input
            ].filter(Boolean).join(" ");
        if (state.submitted) {
            msg = $kCxMd(msg);
            input = submitted(input);
            return line();
        }
        if (choice.format) input = await choice.format.call(this, input, choice, i);
        else {
            let color = this.styles.muted;
            let options = {
                input: input,
                initial: initial,
                pos: cursor,
                showCursor: focused,
                color: color
            };
            input = $fFJEH(this, options);
        }
        if (!this.isValue(input)) input = this.styles.muted(this.symbols.ellipsis);
        if (choice.result) this.values[name] = await choice.result.call(this, value, choice, i);
        if (focused) msg = primary(msg);
        if (choice.error) input += (input ? " " : "") + danger(choice.error.trim());
        else if (choice.hint) input += (input ? " " : "") + muted(choice.hint.trim());
        return line();
    }
    async submit() {
        this.value = this.values;
        return super.base.submit.call(this);
    }
}
module.exports = $800da922f841166b$var$FormPrompt;

});
parcelRegister("fFJEH", function(module, exports) {
"use strict";

var $h91fL = parcelRequire("h91fL");
/**
 * Render a placeholder value with cursor and styling based on the
 * position of the cursor.
 *
 * @param {Object} `prompt` Prompt instance.
 * @param {String} `input` Input string.
 * @param {String} `initial` The initial user-provided value.
 * @param {Number} `pos` Current cursor position.
 * @param {Boolean} `showCursor` Render a simulated cursor using the inverse primary style.
 * @return {String} Returns the styled placeholder string.
 * @api public
 */ module.exports = (prompt, options = {})=>{
    prompt.cursorHide();
    let { input: input = "", initial: initial = "", pos: pos, showCursor: showCursor = true, color: color } = options;
    let style = color || prompt.styles.placeholder;
    let inverse = $h91fL.inverse(prompt.styles.primary);
    let blinker = (str)=>inverse(prompt.styles.black(str));
    let output = input;
    let char = " ";
    let reverse = blinker(char);
    if (prompt.blink && prompt.blink.off === true) {
        blinker = (str)=>str;
        reverse = "";
    }
    if (showCursor && pos === 0 && initial === "" && input === "") return blinker(char);
    if (showCursor && pos === 0 && (input === initial || input === "")) return blinker(initial[0]) + style(initial.slice(1));
    initial = $h91fL.isPrimitive(initial) ? `${initial}` : "";
    input = $h91fL.isPrimitive(input) ? `${input}` : "";
    let placeholder = initial && initial.startsWith(input) && initial !== input;
    let cursor = placeholder ? blinker(initial[input.length]) : reverse;
    if (pos !== input.length && showCursor === true) {
        output = input.slice(0, pos) + blinker(input[pos]) + input.slice(pos + 1);
        cursor = "";
    }
    if (showCursor === false) cursor = "";
    if (placeholder) {
        let raw = prompt.styles.unstyle(output + cursor);
        return output + cursor + style(initial.slice(raw.length));
    }
    return output + cursor;
};

});




parcelRegister("cmBmB", function(module, exports) {
"use strict";

var $6gAgM = parcelRequire("6gAgM");
class $900485b76de23eab$var$ConfirmPrompt extends $6gAgM {
    constructor(options){
        super(options);
        this.default = this.options.default || (this.initial ? "(Y/n)" : "(y/N)");
    }
}
module.exports = $900485b76de23eab$var$ConfirmPrompt;

});
parcelRegister("6gAgM", function(module, exports) {
"use strict";

var $3fCUp = parcelRequire("3fCUp");

var $h91fL = parcelRequire("h91fL");
var $49005f1891a57d3a$require$isPrimitive = $h91fL.isPrimitive;
var $49005f1891a57d3a$require$hasColor = $h91fL.hasColor;
class $49005f1891a57d3a$var$BooleanPrompt extends $3fCUp {
    constructor(options){
        super(options);
        this.cursorHide();
    }
    async initialize() {
        let initial = await this.resolve(this.initial, this.state);
        this.input = await this.cast(initial);
        await super.initialize();
    }
    dispatch(ch) {
        if (!this.isValue(ch)) return this.alert();
        this.input = ch;
        return this.submit();
    }
    format(value) {
        let { styles: styles, state: state } = this;
        return !state.submitted ? styles.primary(value) : styles.success(value);
    }
    cast(input) {
        return this.isTrue(input);
    }
    isTrue(input) {
        return /^[ty1]/i.test(input);
    }
    isFalse(input) {
        return /^[fn0]/i.test(input);
    }
    isValue(value) {
        return $49005f1891a57d3a$require$isPrimitive(value) && (this.isTrue(value) || this.isFalse(value));
    }
    async hint() {
        if (this.state.status === "pending") {
            let hint = await this.element("hint");
            if (!$49005f1891a57d3a$require$hasColor(hint)) return this.styles.muted(hint);
            return hint;
        }
    }
    async render() {
        let { input: input, size: size } = this.state;
        let prefix = await this.prefix();
        let sep = await this.separator();
        let msg = await this.message();
        let hint = this.styles.muted(this.default);
        let promptLine = [
            prefix,
            msg,
            hint,
            sep
        ].filter(Boolean).join(" ");
        this.state.prompt = promptLine;
        let header = await this.header();
        let value = this.value = this.cast(input);
        let output = await this.format(value);
        let help = await this.error() || await this.hint();
        let footer = await this.footer();
        if (help && !promptLine.includes(help)) output += " " + help;
        promptLine += " " + output;
        this.clear(size);
        this.write([
            header,
            promptLine,
            footer
        ].filter(Boolean).join("\n"));
        this.restore();
    }
    set value(value) {
        super.value = value;
    }
    get value() {
        return this.cast(super.value);
    }
}
module.exports = $49005f1891a57d3a$var$BooleanPrompt;

});


parcelRegister("kfDEO", function(module, exports) {
"use strict";

var $81q1B = parcelRequire("81q1B");

var $aZCKE = parcelRequire("aZCKE");
const $ebe3f87624834f99$var$form = $aZCKE.prototype;
class $ebe3f87624834f99$var$Editable extends $81q1B {
    constructor(options){
        super({
            ...options,
            multiple: true
        });
        this.align = [
            this.options.align,
            "left"
        ].find((v)=>v != null);
        this.emptyError = "";
        this.values = {};
    }
    dispatch(char, key) {
        let choice = this.focused;
        let parent = choice.parent || {};
        if (!choice.editable && !parent.editable) {
            if (char === "a" || char === "i") return super[char]();
        }
        return $ebe3f87624834f99$var$form.dispatch.call(this, char, key);
    }
    append(char, key) {
        return $ebe3f87624834f99$var$form.append.call(this, char, key);
    }
    delete(char, key) {
        return $ebe3f87624834f99$var$form.delete.call(this, char, key);
    }
    space(char) {
        return this.focused.editable ? this.append(char) : super.space();
    }
    number(char) {
        return this.focused.editable ? this.append(char) : super.number(char);
    }
    next() {
        return this.focused.editable ? $ebe3f87624834f99$var$form.next.call(this) : super.next();
    }
    prev() {
        return this.focused.editable ? $ebe3f87624834f99$var$form.prev.call(this) : super.prev();
    }
    async indicator(choice, i) {
        let symbol = choice.indicator || "";
        let value = choice.editable ? symbol : super.indicator(choice, i);
        return await this.resolve(value, this.state, choice, i) || "";
    }
    indent(choice) {
        return choice.role === "heading" ? "" : choice.editable ? " " : "  ";
    }
    async renderChoice(choice, i) {
        choice.indent = "";
        if (choice.editable) return $ebe3f87624834f99$var$form.renderChoice.call(this, choice, i);
        return super.renderChoice(choice, i);
    }
    error() {
        return "";
    }
    footer() {
        return this.state.error;
    }
    async validate() {
        let result = true;
        for (let choice of this.choices){
            if (typeof choice.validate !== "function") continue;
            if (choice.role === "heading") continue;
            let val = choice.parent ? this.value[choice.parent.name] : this.value;
            if (choice.editable) val = choice.value === choice.name ? choice.initial || "" : choice.value;
            else if (!this.isDisabled(choice)) val = choice.enabled === true;
            result = await choice.validate(val, this.state);
            if (result !== true) break;
        }
        if (result !== true) this.state.error = typeof result === "string" ? result : "Invalid Input";
        return result;
    }
    submit() {
        if (this.focused.newChoice === true) return super.submit();
        if (this.choices.some((ch)=>ch.newChoice)) return this.alert();
        this.value = {};
        for (let choice of this.choices){
            let val = choice.parent ? this.value[choice.parent.name] : this.value;
            if (choice.role === "heading") {
                this.value[choice.name] = {};
                continue;
            }
            if (choice.editable) val[choice.name] = choice.value === choice.name ? choice.initial || "" : choice.value;
            else if (!this.isDisabled(choice)) val[choice.name] = choice.enabled === true;
        }
        return this.base.submit.call(this);
    }
}
module.exports = $ebe3f87624834f99$var$Editable;

});

parcelRegister("1AbW6", function(module, exports) {
"use strict";

var $gK2ng = parcelRequire("gK2ng");

var $3Xb1j = parcelRequire("3Xb1j");
class $12726984dfe721c2$var$Input extends $gK2ng {
    constructor(options){
        super(options);
        let history = this.options.history;
        if (history && history.store) {
            let initial = history.values || this.initial;
            this.autosave = !!history.autosave;
            this.store = history.store;
            this.data = this.store.get("values") || {
                past: [],
                present: initial
            };
            this.initial = this.data.present || this.data.past[this.data.past.length - 1];
        }
    }
    completion(action) {
        if (!this.store) return this.alert();
        this.data = $3Xb1j(action, this.data, this.input);
        if (!this.data.present) return this.alert();
        this.input = this.data.present;
        this.cursor = this.input.length;
        return this.render();
    }
    altUp() {
        return this.completion("prev");
    }
    altDown() {
        return this.completion("next");
    }
    prev() {
        this.save();
        return super.prev();
    }
    save() {
        if (!this.store) return;
        this.data = $3Xb1j("save", this.data, this.input);
        this.store.set("values", this.data);
    }
    submit() {
        if (this.store && this.autosave === true) this.save();
        return super.submit();
    }
}
module.exports = $12726984dfe721c2$var$Input;

});
parcelRegister("gK2ng", function(module, exports) {
"use strict";

var $3fCUp = parcelRequire("3fCUp");

var $iZUzo = parcelRequire("iZUzo");

var $fFJEH = parcelRequire("fFJEH");

var $h91fL = parcelRequire("h91fL");
var $c302c8adfb78b4ff$require$isPrimitive = $h91fL.isPrimitive;
class $c302c8adfb78b4ff$var$StringPrompt extends $3fCUp {
    constructor(options){
        super(options);
        this.initial = $c302c8adfb78b4ff$require$isPrimitive(this.initial) ? String(this.initial) : "";
        if (this.initial) this.cursorHide();
        this.state.prevCursor = 0;
        this.state.clipboard = [];
        this.keypressTimeout = this.options.keypressTimeout !== undefined ? this.options.keypressTimeout : null;
    }
    async keypress(input, key = input ? $iZUzo(input, {}) : {}) {
        const now = Date.now();
        const elapsed = now - this.lastKeypress;
        this.lastKeypress = now;
        const isEnterKey = key.name === "return" || key.name === "enter";
        let prev = this.state.prevKeypress;
        let append;
        this.state.prevKeypress = key;
        if (this.keypressTimeout != null && isEnterKey) {
            if (elapsed < this.keypressTimeout) return this.submit();
            this.state.multilineBuffer = this.state.multilineBuffer || "";
            this.state.multilineBuffer += input;
            append = true;
            prev = null;
        }
        if (append || this.options.multiline && isEnterKey) {
            if (!prev || prev.name !== "return") return this.append("\n", key);
        }
        return super.keypress(input, key);
    }
    moveCursor(n) {
        this.cursor += n;
    }
    reset() {
        this.input = this.value = "";
        this.cursor = 0;
        return this.render();
    }
    dispatch(ch, key) {
        if (!ch || key.ctrl || key.code) return this.alert();
        this.append(ch);
    }
    append(ch) {
        let { cursor: cursor, input: input } = this.state;
        this.input = `${input}`.slice(0, cursor) + ch + `${input}`.slice(cursor);
        this.moveCursor(String(ch).length);
        this.render();
    }
    insert(str) {
        this.append(str);
    }
    delete() {
        let { cursor: cursor, input: input } = this.state;
        if (cursor <= 0) return this.alert();
        this.input = `${input}`.slice(0, cursor - 1) + `${input}`.slice(cursor);
        this.moveCursor(-1);
        this.render();
    }
    deleteForward() {
        let { cursor: cursor, input: input } = this.state;
        if (input[cursor] === void 0) return this.alert();
        this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
        this.render();
    }
    cutForward() {
        let pos = this.cursor;
        if (this.input.length <= pos) return this.alert();
        this.state.clipboard.push(this.input.slice(pos));
        this.input = this.input.slice(0, pos);
        this.render();
    }
    cutLeft() {
        let pos = this.cursor;
        if (pos === 0) return this.alert();
        let before = this.input.slice(0, pos);
        let after = this.input.slice(pos);
        let words = before.split(" ");
        this.state.clipboard.push(words.pop());
        this.input = words.join(" ");
        this.cursor = this.input.length;
        this.input += after;
        this.render();
    }
    paste() {
        if (!this.state.clipboard.length) return this.alert();
        this.insert(this.state.clipboard.pop());
        this.render();
    }
    toggleCursor() {
        if (this.state.prevCursor) {
            this.cursor = this.state.prevCursor;
            this.state.prevCursor = 0;
        } else {
            this.state.prevCursor = this.cursor;
            this.cursor = 0;
        }
        this.render();
    }
    first() {
        this.cursor = 0;
        this.render();
    }
    last() {
        this.cursor = this.input.length - 1;
        this.render();
    }
    next() {
        let init = this.initial != null ? String(this.initial) : "";
        if (!init || !init.startsWith(this.input)) return this.alert();
        this.input = this.initial;
        this.cursor = this.initial.length;
        this.render();
    }
    prev() {
        if (!this.input) return this.alert();
        this.reset();
    }
    backward() {
        return this.left();
    }
    forward() {
        return this.right();
    }
    right() {
        if (this.cursor >= this.input.length) return this.alert();
        this.moveCursor(1);
        return this.render();
    }
    left() {
        if (this.cursor <= 0) return this.alert();
        this.moveCursor(-1);
        return this.render();
    }
    isValue(value) {
        return !!value;
    }
    async format(input = this.value) {
        let initial = await this.resolve(this.initial, this.state);
        if (!this.state.submitted) return $fFJEH(this, {
            input: input,
            initial: initial,
            pos: this.cursor
        });
        return this.styles.submitted(input || initial);
    }
    async render() {
        let size = this.state.size;
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        let prompt = [
            prefix,
            message,
            separator
        ].filter(Boolean).join(" ");
        this.state.prompt = prompt;
        let header = await this.header();
        let output = await this.format();
        let help = await this.error() || await this.hint();
        let footer = await this.footer();
        if (help && !output.includes(help)) output += " " + help;
        prompt += " " + output;
        this.clear(size);
        this.write([
            header,
            prompt,
            footer
        ].filter(Boolean).join("\n"));
        this.restore();
    }
}
module.exports = $c302c8adfb78b4ff$var$StringPrompt;

});

parcelRegister("3Xb1j", function(module, exports) {
"use strict";
const $2e0f6e25380183ec$var$unique = (arr)=>arr.filter((v, i)=>arr.lastIndexOf(v) === i);
const $2e0f6e25380183ec$var$compact = (arr)=>$2e0f6e25380183ec$var$unique(arr).filter(Boolean);
module.exports = (action, data = {}, value = "")=>{
    let { past: past = [], present: present = "" } = data;
    let rest, prev;
    switch(action){
        case "prev":
        case "undo":
            rest = past.slice(0, past.length - 1);
            prev = past[past.length - 1] || "";
            return {
                past: $2e0f6e25380183ec$var$compact([
                    value,
                    ...rest
                ]),
                present: prev
            };
        case "next":
        case "redo":
            rest = past.slice(1);
            prev = past[0] || "";
            return {
                past: $2e0f6e25380183ec$var$compact([
                    ...rest,
                    value
                ]),
                present: prev
            };
        case "save":
            return {
                past: $2e0f6e25380183ec$var$compact([
                    ...past,
                    value
                ]),
                present: ""
            };
        case "remove":
            prev = $2e0f6e25380183ec$var$compact(past.filter((v)=>v !== value));
            present = "";
            if (prev.length) present = prev.pop();
            return {
                past: prev,
                present: present
            };
        default:
            throw new Error(`Invalid action: "${action}"`);
    }
};

});


parcelRegister("hOkSq", function(module, exports) {
"use strict";

var $gK2ng = parcelRequire("gK2ng");
class $cf774cdc38196eeb$var$InvisiblePrompt extends $gK2ng {
    format() {
        return "";
    }
}
module.exports = $cf774cdc38196eeb$var$InvisiblePrompt;

});

parcelRegister("kQSAh", function(module, exports) {
"use strict";

var $gK2ng = parcelRequire("gK2ng");
class $f2e3013e33b751ea$var$ListPrompt extends $gK2ng {
    constructor(options = {}){
        super(options);
        this.sep = this.options.separator || /, */;
        this.initial = options.initial || "";
    }
    split(input = this.value) {
        return input ? String(input).split(this.sep) : [];
    }
    format() {
        let style = this.state.submitted ? this.styles.primary : (val)=>val;
        return this.list.map(style).join(", ");
    }
    async submit(value) {
        let result = this.state.error || await this.validate(this.list, this.state);
        if (result !== true) {
            this.state.error = result;
            return super.submit();
        }
        this.value = this.list;
        return super.submit();
    }
    get list() {
        return this.split();
    }
}
module.exports = $f2e3013e33b751ea$var$ListPrompt;

});

parcelRegister("lkCXa", function(module, exports) {
"use strict";

var $81q1B = parcelRequire("81q1B");
class $f879ae8dd7aab4e5$var$MultiSelect extends $81q1B {
    constructor(options){
        super({
            ...options,
            multiple: true
        });
    }
}
module.exports = $f879ae8dd7aab4e5$var$MultiSelect;

});

parcelRegister("f3ce0", function(module, exports) {

module.exports = (parcelRequire("hei2V"));

});
parcelRegister("hei2V", function(module, exports) {
"use strict";

var $gK2ng = parcelRequire("gK2ng");
class $c8b1be16642d0a06$var$NumberPrompt extends $gK2ng {
    constructor(options = {}){
        super({
            style: "number",
            ...options
        });
        this.min = this.isValue(options.min) ? this.toNumber(options.min) : -Infinity;
        this.max = this.isValue(options.max) ? this.toNumber(options.max) : Infinity;
        this.delay = options.delay != null ? options.delay : 1000;
        this.float = options.float !== false;
        this.round = options.round === true || options.float === false;
        this.major = options.major || 10;
        this.minor = options.minor || 1;
        this.initial = options.initial != null ? options.initial : "";
        this.input = String(this.initial);
        this.cursor = this.input.length;
        this.cursorShow();
    }
    append(ch) {
        if (!/[-+.]/.test(ch) || ch === "." && this.input.includes(".")) return this.alert("invalid number");
        return super.append(ch);
    }
    number(ch) {
        return super.append(ch);
    }
    next() {
        if (this.input && this.input !== this.initial) return this.alert();
        if (!this.isValue(this.initial)) return this.alert();
        this.input = this.initial;
        this.cursor = String(this.initial).length;
        return this.render();
    }
    up(number) {
        let step = number || this.minor;
        let num = this.toNumber(this.input);
        if (num > this.max + step) return this.alert();
        this.input = `${num + step}`;
        return this.render();
    }
    down(number) {
        let step = number || this.minor;
        let num = this.toNumber(this.input);
        if (num < this.min - step) return this.alert();
        this.input = `${num - step}`;
        return this.render();
    }
    shiftDown() {
        return this.down(this.major);
    }
    shiftUp() {
        return this.up(this.major);
    }
    format(input = this.input) {
        if (typeof this.options.format === "function") return this.options.format.call(this, input);
        return this.styles.info(input);
    }
    toNumber(value = "") {
        return this.float ? +value : Math.round(+value);
    }
    isValue(value) {
        return /^[-+]?[0-9]+((\.)|(\.[0-9]+))?$/.test(value);
    }
    submit() {
        let value = [
            this.input,
            this.initial
        ].find((v)=>this.isValue(v));
        this.value = this.toNumber(value || 0);
        return super.submit();
    }
}
module.exports = $c8b1be16642d0a06$var$NumberPrompt;

});


parcelRegister("4NZRQ", function(module, exports) {
"use strict";

var $gK2ng = parcelRequire("gK2ng");
class $37fbba9ea39ac2ea$var$PasswordPrompt extends $gK2ng {
    constructor(options){
        super(options);
        this.cursorShow();
    }
    format(input = this.input) {
        if (!this.keypressed) return "";
        let color = this.state.submitted ? this.styles.primary : this.styles.muted;
        return color(this.symbols.asterisk.repeat(input.length));
    }
}
module.exports = $37fbba9ea39ac2ea$var$PasswordPrompt;

});

parcelRegister("9JggT", function(module, exports) {
"use strict";

var $kCxMd = parcelRequire("kCxMd");

var $i40GR = parcelRequire("i40GR");

var $h91fL = parcelRequire("h91fL");
class $7154f02cdc93b450$var$LikertScale extends $i40GR {
    constructor(options = {}){
        super(options);
        this.widths = [].concat(options.messageWidth || 50);
        this.align = [].concat(options.align || "left");
        this.linebreak = options.linebreak || false;
        this.edgeLength = options.edgeLength || 3;
        this.newline = options.newline || "\n   ";
        let start = options.startNumber || 1;
        if (typeof this.scale === "number") {
            this.scaleKey = false;
            this.scale = Array(this.scale).fill(0).map((v, i)=>({
                    name: i + start
                }));
        }
    }
    async reset() {
        this.tableized = false;
        await super.reset();
        return this.render();
    }
    tableize() {
        if (this.tableized === true) return;
        this.tableized = true;
        let longest = 0;
        for (let ch of this.choices){
            longest = Math.max(longest, ch.message.length);
            ch.scaleIndex = ch.initial || 2;
            ch.scale = [];
            for(let i = 0; i < this.scale.length; i++)ch.scale.push({
                index: i
            });
        }
        this.widths[0] = Math.min(this.widths[0], longest + 3);
    }
    async dispatch(s, key) {
        if (this.multiple) return this[key.name] ? await this[key.name](s, key) : await super.dispatch(s, key);
        this.alert();
    }
    heading(msg, item, i) {
        return this.styles.strong(msg);
    }
    separator() {
        return this.styles.muted(this.symbols.ellipsis);
    }
    right() {
        let choice = this.focused;
        if (choice.scaleIndex >= this.scale.length - 1) return this.alert();
        choice.scaleIndex++;
        return this.render();
    }
    left() {
        let choice = this.focused;
        if (choice.scaleIndex <= 0) return this.alert();
        choice.scaleIndex--;
        return this.render();
    }
    indent() {
        return "";
    }
    format() {
        if (this.state.submitted) {
            let values = this.choices.map((ch)=>this.styles.info(ch.index));
            return values.join(", ");
        }
        return "";
    }
    pointer() {
        return "";
    }
    /**
   * Render the scale "Key". Something like:
   * @return {String}
   */ renderScaleKey() {
        if (this.scaleKey === false) return "";
        if (this.state.submitted) return "";
        let scale = this.scale.map((item)=>`   ${item.name} - ${item.message}`);
        let key = [
            "",
            ...scale
        ].map((item)=>this.styles.muted(item));
        return key.join("\n");
    }
    /**
   * Render the heading row for the scale.
   * @return {String}
   */ renderScaleHeading(max) {
        let keys = this.scale.map((ele)=>ele.name);
        if (typeof this.options.renderScaleHeading === "function") keys = this.options.renderScaleHeading.call(this, max);
        let diff = this.scaleLength - keys.join("").length;
        let spacing = Math.round(diff / (keys.length - 1));
        let names = keys.map((key)=>this.styles.strong(key));
        let headings = names.join(" ".repeat(spacing));
        let padding = " ".repeat(this.widths[0]);
        return this.margin[3] + padding + this.margin[1] + headings;
    }
    /**
   * Render a scale indicator => ◯ or ◉ by default
   */ scaleIndicator(choice, item, i) {
        if (typeof this.options.scaleIndicator === "function") return this.options.scaleIndicator.call(this, choice, item, i);
        let enabled = choice.scaleIndex === item.index;
        if (item.disabled) return this.styles.hint(this.symbols.radio.disabled);
        if (enabled) return this.styles.success(this.symbols.radio.on);
        return this.symbols.radio.off;
    }
    /**
   * Render the actual scale => ◯────◯────◉────◯────◯
   */ renderScale(choice, i) {
        let scale = choice.scale.map((item)=>this.scaleIndicator(choice, item, i));
        let padding = this.term === "Hyper" ? "" : " ";
        return scale.join(padding + this.symbols.line.repeat(this.edgeLength));
    }
    /**
   * Render a choice, including scale =>
   *   "The website is easy to navigate. ◯───◯───◉───◯───◯"
   */ async renderChoice(choice, i) {
        await this.onChoice(choice, i);
        let focused = this.index === i;
        let pointer = await this.pointer(choice, i);
        let hint = await choice.hint;
        if (hint && !$h91fL.hasColor(hint)) hint = this.styles.muted(hint);
        let pad = (str)=>this.margin[3] + str.replace(/\s+$/, "").padEnd(this.widths[0], " ");
        let newline = this.newline;
        let ind = this.indent(choice);
        let message = await this.resolve(choice.message, this.state, choice, i);
        let scale = await this.renderScale(choice, i);
        let margin = this.margin[1] + this.margin[3];
        this.scaleLength = $kCxMd(scale).length;
        this.widths[0] = Math.min(this.widths[0], this.width - this.scaleLength - margin.length);
        let msg = $h91fL.wordWrap(message, {
            width: this.widths[0],
            newline: newline
        });
        let lines = msg.split("\n").map((line)=>pad(line) + this.margin[1]);
        if (focused) {
            scale = this.styles.info(scale);
            lines = lines.map((line)=>this.styles.info(line));
        }
        lines[0] += scale;
        if (this.linebreak) lines.push("");
        return [
            ind + pointer,
            lines.join("\n")
        ].filter(Boolean);
    }
    async renderChoices() {
        if (this.state.submitted) return "";
        this.tableize();
        let choices = this.visible.map(async (ch, i)=>await this.renderChoice(ch, i));
        let visible = await Promise.all(choices);
        let heading = await this.renderScaleHeading();
        return this.margin[0] + [
            heading,
            ...visible.map((v)=>v.join(" "))
        ].join("\n");
    }
    async render() {
        let { submitted: submitted, size: size } = this.state;
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        let prompt = "";
        if (this.options.promptLine !== false) {
            prompt = [
                prefix,
                message,
                separator,
                ""
            ].join(" ");
            this.state.prompt = prompt;
        }
        let header = await this.header();
        let output = await this.format();
        let key = await this.renderScaleKey();
        let help = await this.error() || await this.hint();
        let body = await this.renderChoices();
        let footer = await this.footer();
        let err = this.emptyError;
        if (output) prompt += output;
        if (help && !prompt.includes(help)) prompt += " " + help;
        if (submitted && !output && !body.trim() && this.multiple && err != null) prompt += this.styles.danger(err);
        this.clear(size);
        this.write([
            header,
            prompt,
            key,
            body,
            footer
        ].filter(Boolean).join("\n"));
        if (!this.state.submitted) this.write(this.margin[2]);
        this.restore();
    }
    submit() {
        this.value = {};
        for (let choice of this.choices)this.value[choice.name] = choice.scaleIndex;
        return this.base.submit.call(this);
    }
}
module.exports = $7154f02cdc93b450$var$LikertScale;

});

parcelRegister("6wCWQ", function(module, exports) {
"use strict";

var $kCxMd = parcelRequire("kCxMd");

var $5hLWN = parcelRequire("5hLWN");

var $3fCUp = parcelRequire("3fCUp");
class $4c03f18665bb24b3$var$SnippetPrompt extends $3fCUp {
    constructor(options){
        super(options);
        this.cursorHide();
        this.reset(true);
    }
    async initialize() {
        this.interpolate = await $5hLWN(this);
        await super.initialize();
    }
    async reset(first) {
        this.state.keys = [];
        this.state.invalid = new Map();
        this.state.missing = new Set();
        this.state.completed = 0;
        this.state.values = {};
        if (first !== true) {
            await this.initialize();
            await this.render();
        }
    }
    moveCursor(n) {
        let item = this.getItem();
        this.cursor += n;
        item.cursor += n;
    }
    dispatch(ch, key) {
        if (!key.code && !key.ctrl && ch != null && this.getItem()) {
            this.append(ch, key);
            return;
        }
        this.alert();
    }
    append(ch, key) {
        let item = this.getItem();
        let prefix = item.input.slice(0, this.cursor);
        let suffix = item.input.slice(this.cursor);
        this.input = item.input = `${prefix}${ch}${suffix}`;
        this.moveCursor(1);
        this.render();
    }
    delete() {
        let item = this.getItem();
        if (this.cursor <= 0 || !item.input) return this.alert();
        let suffix = item.input.slice(this.cursor);
        let prefix = item.input.slice(0, this.cursor - 1);
        this.input = item.input = `${prefix}${suffix}`;
        this.moveCursor(-1);
        this.render();
    }
    increment(i) {
        return i >= this.state.keys.length - 1 ? 0 : i + 1;
    }
    decrement(i) {
        return i <= 0 ? this.state.keys.length - 1 : i - 1;
    }
    first() {
        this.state.index = 0;
        this.render();
    }
    last() {
        this.state.index = this.state.keys.length - 1;
        this.render();
    }
    right() {
        if (this.cursor >= this.input.length) return this.alert();
        this.moveCursor(1);
        this.render();
    }
    left() {
        if (this.cursor <= 0) return this.alert();
        this.moveCursor(-1);
        this.render();
    }
    prev() {
        this.state.index = this.decrement(this.state.index);
        this.getItem();
        this.render();
    }
    next() {
        this.state.index = this.increment(this.state.index);
        this.getItem();
        this.render();
    }
    up() {
        this.prev();
    }
    down() {
        this.next();
    }
    format(value) {
        let color = this.state.completed < 100 ? this.styles.warning : this.styles.success;
        if (this.state.submitted === true && this.state.completed !== 100) color = this.styles.danger;
        return color(`${this.state.completed}% completed`);
    }
    async render() {
        let { index: index, keys: keys = [], submitted: submitted, size: size } = this.state;
        let newline = [
            this.options.newline,
            "\n"
        ].find((v)=>v != null);
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        let prompt = [
            prefix,
            message,
            separator
        ].filter(Boolean).join(" ");
        this.state.prompt = prompt;
        let header = await this.header();
        let error = await this.error() || "";
        let hint = await this.hint() || "";
        let body = submitted ? "" : await this.interpolate(this.state);
        let key = this.state.key = keys[index] || "";
        let input = await this.format(key);
        let footer = await this.footer();
        if (input) prompt += " " + input;
        if (hint && !input && this.state.completed === 0) prompt += " " + hint;
        this.clear(size);
        let lines = [
            header,
            prompt,
            body,
            footer,
            error.trim()
        ];
        this.write(lines.filter(Boolean).join(newline));
        this.restore();
    }
    getItem(name) {
        let { items: items, keys: keys, index: index } = this.state;
        let item = items.find((ch)=>ch.name === keys[index]);
        if (item && item.input != null) {
            this.input = item.input;
            this.cursor = item.cursor;
        }
        return item;
    }
    async submit() {
        if (typeof this.interpolate !== "function") await this.initialize();
        await this.interpolate(this.state, true);
        let { invalid: invalid, missing: missing, output: output, values: values } = this.state;
        if (invalid.size) {
            let err = "";
            for (let [key, value] of invalid)err += `Invalid ${key}: ${value}\n`;
            this.state.error = err;
            return super.submit();
        }
        if (missing.size) {
            this.state.error = "Required: " + [
                ...missing.keys()
            ].join(", ");
            return super.submit();
        }
        let lines = $kCxMd(output).split("\n");
        let result = lines.map((v)=>v.slice(1)).join("\n");
        this.value = {
            values: values,
            result: result
        };
        return super.submit();
    }
}
module.exports = $4c03f18665bb24b3$var$SnippetPrompt;

});
parcelRegister("5hLWN", function(module, exports) {
"use strict";

var $kCxMd = parcelRequire("kCxMd");
const $3d93bb9faf6097df$var$clean = (str = "")=>{
    return typeof str === "string" ? str.replace(/^['"]|['"]$/g, "") : "";
};
/**
 * This file contains the interpolation and rendering logic for
 * the Snippet prompt.
 */ class $3d93bb9faf6097df$var$Item {
    constructor(token){
        this.name = token.key;
        this.field = token.field || {};
        this.value = $3d93bb9faf6097df$var$clean(token.initial || this.field.initial || "");
        this.message = token.message || this.name;
        this.cursor = 0;
        this.input = "";
        this.lines = [];
    }
}
const $3d93bb9faf6097df$var$tokenize = async (options = {}, defaults = {}, fn = (token)=>token)=>{
    let unique = new Set();
    let fields = options.fields || [];
    let input = options.template;
    let tabstops = [];
    let items = [];
    let keys = [];
    let line = 1;
    if (typeof input === "function") input = await input();
    let i = -1;
    let next = ()=>input[++i];
    let peek = ()=>input[i + 1];
    let push = (token)=>{
        token.line = line;
        tabstops.push(token);
    };
    push({
        type: "bos",
        value: ""
    });
    while(i < input.length - 1){
        let value = next();
        if (/^[^\S\n ]$/.test(value)) {
            push({
                type: "text",
                value: value
            });
            continue;
        }
        if (value === "\n") {
            push({
                type: "newline",
                value: value
            });
            line++;
            continue;
        }
        if (value === "\\") {
            value += next();
            push({
                type: "text",
                value: value
            });
            continue;
        }
        if ((value === "$" || value === "#" || value === "{") && peek() === "{") {
            let n = next();
            value += n;
            let token = {
                type: "template",
                open: value,
                inner: "",
                close: "",
                value: value
            };
            let ch;
            while(ch = next()){
                if (ch === "}") {
                    if (peek() === "}") ch += next();
                    token.value += ch;
                    token.close = ch;
                    break;
                }
                if (ch === ":") {
                    token.initial = "";
                    token.key = token.inner;
                } else if (token.initial !== void 0) token.initial += ch;
                token.value += ch;
                token.inner += ch;
            }
            token.template = token.open + (token.initial || token.inner) + token.close;
            token.key = token.key || token.inner;
            if (hasOwnProperty.call(defaults, token.key)) token.initial = defaults[token.key];
            token = fn(token);
            push(token);
            keys.push(token.key);
            unique.add(token.key);
            let item = items.find((item)=>item.name === token.key);
            token.field = fields.find((ch)=>ch.name === token.key);
            if (!item) {
                item = new $3d93bb9faf6097df$var$Item(token);
                items.push(item);
            }
            item.lines.push(token.line - 1);
            continue;
        }
        let last = tabstops[tabstops.length - 1];
        if (last.type === "text" && last.line === line) last.value += value;
        else push({
            type: "text",
            value: value
        });
    }
    push({
        type: "eos",
        value: ""
    });
    return {
        input: input,
        tabstops: tabstops,
        unique: unique,
        keys: keys,
        items: items
    };
};
module.exports = async (prompt)=>{
    let options = prompt.options;
    let required = new Set(options.required === true ? [] : options.required || []);
    let defaults = {
        ...options.values,
        ...options.initial
    };
    let { tabstops: tabstops, items: items, keys: keys } = await $3d93bb9faf6097df$var$tokenize(options, defaults);
    let result = $3d93bb9faf6097df$var$createFn("result", prompt, options);
    let format = $3d93bb9faf6097df$var$createFn("format", prompt, options);
    let isValid = $3d93bb9faf6097df$var$createFn("validate", prompt, options, true);
    let isVal = prompt.isValue.bind(prompt);
    return async (state = {}, submitted = false)=>{
        let index = 0;
        state.required = required;
        state.items = items;
        state.keys = keys;
        state.output = "";
        let validate = async (value, state, item, index)=>{
            let error = await isValid(value, state, item, index);
            if (error === false) return "Invalid field " + item.name;
            return error;
        };
        for (let token of tabstops){
            let value = token.value;
            let key = token.key;
            if (token.type !== "template") {
                if (value) state.output += value;
                continue;
            }
            if (token.type === "template") {
                let item = items.find((ch)=>ch.name === key);
                if (options.required === true) state.required.add(item.name);
                let val = [
                    item.input,
                    state.values[item.value],
                    item.value,
                    value
                ].find(isVal);
                let field = item.field || {};
                let message = field.message || token.inner;
                if (submitted) {
                    let error = await validate(state.values[key], state, item, index);
                    if (error && typeof error === "string" || error === false) {
                        state.invalid.set(key, error);
                        continue;
                    }
                    state.invalid.delete(key);
                    let res = await result(state.values[key], state, item, index);
                    state.output += $kCxMd(res);
                    continue;
                }
                item.placeholder = false;
                let before = value;
                value = await format(value, state, item, index);
                if (val !== value) {
                    state.values[key] = val;
                    value = prompt.styles.typing(val);
                    state.missing.delete(message);
                } else {
                    state.values[key] = void 0;
                    val = `<${message}>`;
                    value = prompt.styles.primary(val);
                    item.placeholder = true;
                    if (state.required.has(key)) state.missing.add(message);
                }
                if (state.missing.has(message) && state.validating) value = prompt.styles.warning(val);
                if (state.invalid.has(key) && state.validating) value = prompt.styles.danger(val);
                if (index === state.index) {
                    if (before !== value) value = prompt.styles.underline(value);
                    else value = prompt.styles.heading($kCxMd(value));
                }
                index++;
            }
            if (value) state.output += value;
        }
        let lines = state.output.split("\n").map((l)=>" " + l);
        let len = items.length;
        let done = 0;
        for (let item of items){
            if (state.invalid.has(item.name)) item.lines.forEach((i)=>{
                if (lines[i][0] !== " ") return;
                lines[i] = state.styles.danger(state.symbols.bullet) + lines[i].slice(1);
            });
            if (prompt.isValue(state.values[item.name])) done++;
        }
        state.completed = (done / len * 100).toFixed(0);
        state.output = lines.join("\n");
        return state.output;
    };
};
function $3d93bb9faf6097df$var$createFn(prop, prompt, options, fallback) {
    return (value, state, item, index)=>{
        if (typeof item.field[prop] === "function") return item.field[prop].call(prompt, value, state, item, index);
        return [
            fallback,
            value
        ].find((v)=>prompt.isValue(v));
    };
}

});


parcelRegister("3kq2T", function(module, exports) {
"use strict";
const $26c771766291aca6$var$hint = "(Use <shift>+<up/down> to sort)";

var $81q1B = parcelRequire("81q1B");
class $26c771766291aca6$var$Sort extends $81q1B {
    constructor(options){
        super({
            ...options,
            reorder: false,
            sort: true,
            multiple: true
        });
        this.state.hint = [
            this.options.hint,
            $26c771766291aca6$var$hint
        ].find(this.isValue.bind(this));
    }
    indicator() {
        return "";
    }
    async renderChoice(choice, i) {
        let str = await super.renderChoice(choice, i);
        let sym = this.symbols.identicalTo + " ";
        let pre = this.index === i && this.sorting ? this.styles.muted(sym) : "  ";
        if (this.options.drag === false) pre = "";
        if (this.options.numbered === true) return pre + `${i + 1} - ` + str;
        return pre + str;
    }
    get selected() {
        return this.choices;
    }
    submit() {
        this.value = this.choices.map((choice)=>choice.value);
        return super.submit();
    }
}
module.exports = $26c771766291aca6$var$Sort;

});

parcelRegister("10WNd", function(module, exports) {
"use strict";

var $i40GR = parcelRequire("i40GR");
class $0bd3658d0bae2b04$var$Survey extends $i40GR {
    constructor(options = {}){
        super(options);
        this.emptyError = options.emptyError || "No items were selected";
        this.term = process.env.TERM_PROGRAM;
        if (!this.options.header) {
            let header = [
                "",
                "4 - Strongly Agree",
                "3 - Agree",
                "2 - Neutral",
                "1 - Disagree",
                "0 - Strongly Disagree",
                ""
            ];
            header = header.map((ele)=>this.styles.muted(ele));
            this.state.header = header.join("\n   ");
        }
    }
    async toChoices(...args) {
        if (this.createdScales) return false;
        this.createdScales = true;
        let choices = await super.toChoices(...args);
        for (let choice of choices){
            choice.scale = $0bd3658d0bae2b04$var$createScale(5, this.options);
            choice.scaleIdx = 2;
        }
        return choices;
    }
    dispatch() {
        this.alert();
    }
    space() {
        let choice = this.focused;
        let ele = choice.scale[choice.scaleIdx];
        let selected = ele.selected;
        choice.scale.forEach((e)=>e.selected = false);
        ele.selected = !selected;
        return this.render();
    }
    indicator() {
        return "";
    }
    pointer() {
        return "";
    }
    separator() {
        return this.styles.muted(this.symbols.ellipsis);
    }
    right() {
        let choice = this.focused;
        if (choice.scaleIdx >= choice.scale.length - 1) return this.alert();
        choice.scaleIdx++;
        return this.render();
    }
    left() {
        let choice = this.focused;
        if (choice.scaleIdx <= 0) return this.alert();
        choice.scaleIdx--;
        return this.render();
    }
    indent() {
        return "   ";
    }
    async renderChoice(item, i) {
        await this.onChoice(item, i);
        let focused = this.index === i;
        let isHyper = this.term === "Hyper";
        let n = !isHyper ? 8 : 9;
        let s = !isHyper ? " " : "";
        let ln = this.symbols.line.repeat(n);
        let sp = " ".repeat(n + (isHyper ? 0 : 1));
        let dot = (enabled)=>(enabled ? this.styles.success("\u25C9") : "\u25EF") + s;
        let num = i + 1 + ".";
        let color = focused ? this.styles.heading : this.styles.noop;
        let msg = await this.resolve(item.message, this.state, item, i);
        let indent = this.indent(item);
        let scale = indent + item.scale.map((e, i)=>dot(i === item.scaleIdx)).join(ln);
        let val = (i)=>i === item.scaleIdx ? color(i) : i;
        let next = indent + item.scale.map((e, i)=>val(i)).join(sp);
        let line = ()=>[
                num,
                msg
            ].filter(Boolean).join(" ");
        let lines = ()=>[
                line(),
                scale,
                next,
                " "
            ].filter(Boolean).join("\n");
        if (focused) {
            scale = this.styles.cyan(scale);
            next = this.styles.cyan(next);
        }
        return lines();
    }
    async renderChoices() {
        if (this.state.submitted) return "";
        let choices = this.visible.map(async (ch, i)=>await this.renderChoice(ch, i));
        let visible = await Promise.all(choices);
        if (!visible.length) visible.push(this.styles.danger("No matching choices"));
        return visible.join("\n");
    }
    format() {
        if (this.state.submitted) {
            let values = this.choices.map((ch)=>this.styles.info(ch.scaleIdx));
            return values.join(", ");
        }
        return "";
    }
    async render() {
        let { submitted: submitted, size: size } = this.state;
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        let prompt = [
            prefix,
            message,
            separator
        ].filter(Boolean).join(" ");
        this.state.prompt = prompt;
        let header = await this.header();
        let output = await this.format();
        let help = await this.error() || await this.hint();
        let body = await this.renderChoices();
        let footer = await this.footer();
        if (output || !help) prompt += " " + output;
        if (help && !prompt.includes(help)) prompt += " " + help;
        if (submitted && !output && !body && this.multiple && this.type !== "form") prompt += this.styles.danger(this.emptyError);
        this.clear(size);
        this.write([
            prompt,
            header,
            body,
            footer
        ].filter(Boolean).join("\n"));
        this.restore();
    }
    submit() {
        this.value = {};
        for (let choice of this.choices)this.value[choice.name] = choice.scaleIdx;
        return this.base.submit.call(this);
    }
}
function $0bd3658d0bae2b04$var$createScale(n, options = {}) {
    if (Array.isArray(options.scale)) return options.scale.map((ele)=>({
            ...ele
        }));
    let scale = [];
    for(let i = 1; i < n + 1; i++)scale.push({
        i: i,
        selected: false
    });
    return scale;
}
module.exports = $0bd3658d0bae2b04$var$Survey;

});

parcelRegister("4MK8D", function(module, exports) {

module.exports = (parcelRequire("1AbW6"));

});

parcelRegister("aeyjP", function(module, exports) {
"use strict";

var $6gAgM = parcelRequire("6gAgM");
class $7735d52a86cabd3c$var$TogglePrompt extends $6gAgM {
    async initialize() {
        await super.initialize();
        this.value = this.initial = this.resolve(this.options.initial);
        this.disabled = this.options.disabled || "no";
        this.enabled = this.options.enabled || "yes";
        await this.render();
    }
    reset() {
        this.value = this.initial;
        this.render();
    }
    delete() {
        this.alert();
    }
    toggle() {
        this.value = !this.value;
        this.render();
    }
    enable() {
        if (this.value === true) return this.alert();
        this.value = true;
        this.render();
    }
    disable() {
        if (this.value === false) return this.alert();
        this.value = false;
        this.render();
    }
    up() {
        this.toggle();
    }
    down() {
        this.toggle();
    }
    right() {
        this.toggle();
    }
    left() {
        this.toggle();
    }
    next() {
        this.toggle();
    }
    prev() {
        this.toggle();
    }
    dispatch(ch = "", key) {
        switch(ch.toLowerCase()){
            case " ":
                return this.toggle();
            case "1":
            case "y":
            case "t":
                return this.enable();
            case "0":
            case "n":
            case "f":
                return this.disable();
            default:
                return this.alert();
        }
    }
    format() {
        let active = (str)=>this.styles.primary.underline(str);
        let value = [
            this.value ? this.disabled : active(this.disabled),
            this.value ? active(this.enabled) : this.enabled
        ];
        return value.join(this.styles.muted(" / "));
    }
    async render() {
        let { size: size } = this.state;
        let header = await this.header();
        let prefix = await this.prefix();
        let separator = await this.separator();
        let message = await this.message();
        let output = await this.format();
        let help = await this.error() || await this.hint();
        let footer = await this.footer();
        let prompt = [
            prefix,
            message,
            separator,
            output
        ].join(" ");
        this.state.prompt = prompt;
        if (help && !prompt.includes(help)) prompt += " " + help;
        this.clear(size);
        this.write([
            header,
            prompt,
            footer
        ].filter(Boolean).join("\n"));
        this.write(this.margin[2]);
        this.restore();
    }
}
module.exports = $7735d52a86cabd3c$var$TogglePrompt;

});

parcelRegister("lCQag", function(module, exports) {
"use strict";

var $81q1B = parcelRequire("81q1B");
class $fbe59c5b1acd45b8$var$Quiz extends $81q1B {
    constructor(options){
        super(options);
        if (typeof this.options.correctChoice !== "number" || this.options.correctChoice < 0) throw new Error("Please specify the index of the correct answer from the list of choices");
    }
    async toChoices(value, parent) {
        let choices = await super.toChoices(value, parent);
        if (choices.length < 2) throw new Error("Please give at least two choices to the user");
        if (this.options.correctChoice > choices.length) throw new Error("Please specify the index of the correct answer from the list of choices");
        return choices;
    }
    check(state) {
        return state.index === this.options.correctChoice;
    }
    async result(selected) {
        return {
            selectedAnswer: selected,
            correctAnswer: this.options.choices[this.options.correctChoice].value,
            correct: await this.check(this.state)
        };
    }
}
module.exports = $fbe59c5b1acd45b8$var$Quiz;

});


parcelRegister("hZrYo", function(module, exports) {





module.exports = {
    ArrayPrompt: (parcelRequire("i40GR")),
    AuthPrompt: (parcelRequire("1xU82")),
    BooleanPrompt: (parcelRequire("6gAgM")),
    NumberPrompt: (parcelRequire("hei2V")),
    StringPrompt: (parcelRequire("gK2ng"))
};

});



const $9c3e7af7d824669d$var$ANSI_BACKGROUND_OFFSET = 10;
const $9c3e7af7d824669d$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`;
const $9c3e7af7d824669d$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`;
const $9c3e7af7d824669d$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`;
const $9c3e7af7d824669d$var$styles = {
    modifier: {
        reset: [
            0,
            0
        ],
        // 21 isn't widely supported and 22 does the same thing
        bold: [
            1,
            22
        ],
        dim: [
            2,
            22
        ],
        italic: [
            3,
            23
        ],
        underline: [
            4,
            24
        ],
        overline: [
            53,
            55
        ],
        inverse: [
            7,
            27
        ],
        hidden: [
            8,
            28
        ],
        strikethrough: [
            9,
            29
        ]
    },
    color: {
        black: [
            30,
            39
        ],
        red: [
            31,
            39
        ],
        green: [
            32,
            39
        ],
        yellow: [
            33,
            39
        ],
        blue: [
            34,
            39
        ],
        magenta: [
            35,
            39
        ],
        cyan: [
            36,
            39
        ],
        white: [
            37,
            39
        ],
        // Bright color
        blackBright: [
            90,
            39
        ],
        gray: [
            90,
            39
        ],
        grey: [
            90,
            39
        ],
        redBright: [
            91,
            39
        ],
        greenBright: [
            92,
            39
        ],
        yellowBright: [
            93,
            39
        ],
        blueBright: [
            94,
            39
        ],
        magentaBright: [
            95,
            39
        ],
        cyanBright: [
            96,
            39
        ],
        whiteBright: [
            97,
            39
        ]
    },
    bgColor: {
        bgBlack: [
            40,
            49
        ],
        bgRed: [
            41,
            49
        ],
        bgGreen: [
            42,
            49
        ],
        bgYellow: [
            43,
            49
        ],
        bgBlue: [
            44,
            49
        ],
        bgMagenta: [
            45,
            49
        ],
        bgCyan: [
            46,
            49
        ],
        bgWhite: [
            47,
            49
        ],
        // Bright color
        bgBlackBright: [
            100,
            49
        ],
        bgGray: [
            100,
            49
        ],
        bgGrey: [
            100,
            49
        ],
        bgRedBright: [
            101,
            49
        ],
        bgGreenBright: [
            102,
            49
        ],
        bgYellowBright: [
            103,
            49
        ],
        bgBlueBright: [
            104,
            49
        ],
        bgMagentaBright: [
            105,
            49
        ],
        bgCyanBright: [
            106,
            49
        ],
        bgWhiteBright: [
            107,
            49
        ]
    }
};
const $9c3e7af7d824669d$export$3348c8f862b779ea = Object.keys($9c3e7af7d824669d$var$styles.modifier);
const $9c3e7af7d824669d$export$b42573f554ad2328 = Object.keys($9c3e7af7d824669d$var$styles.color);
const $9c3e7af7d824669d$export$e9149c7dc90ec5a1 = Object.keys($9c3e7af7d824669d$var$styles.bgColor);
const $9c3e7af7d824669d$export$88bbe6beac980300 = [
    ...$9c3e7af7d824669d$export$b42573f554ad2328,
    ...$9c3e7af7d824669d$export$e9149c7dc90ec5a1
];
function $9c3e7af7d824669d$var$assembleStyles() {
    const codes = new Map();
    for (const [groupName, group] of Object.entries($9c3e7af7d824669d$var$styles)){
        for (const [styleName, style] of Object.entries(group)){
            $9c3e7af7d824669d$var$styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = $9c3e7af7d824669d$var$styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty($9c3e7af7d824669d$var$styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty($9c3e7af7d824669d$var$styles, "codes", {
        value: codes,
        enumerable: false
    });
    $9c3e7af7d824669d$var$styles.color.close = "\x1b[39m";
    $9c3e7af7d824669d$var$styles.bgColor.close = "\x1b[49m";
    $9c3e7af7d824669d$var$styles.color.ansi = $9c3e7af7d824669d$var$wrapAnsi16();
    $9c3e7af7d824669d$var$styles.color.ansi256 = $9c3e7af7d824669d$var$wrapAnsi256();
    $9c3e7af7d824669d$var$styles.color.ansi16m = $9c3e7af7d824669d$var$wrapAnsi16m();
    $9c3e7af7d824669d$var$styles.bgColor.ansi = $9c3e7af7d824669d$var$wrapAnsi16($9c3e7af7d824669d$var$ANSI_BACKGROUND_OFFSET);
    $9c3e7af7d824669d$var$styles.bgColor.ansi256 = $9c3e7af7d824669d$var$wrapAnsi256($9c3e7af7d824669d$var$ANSI_BACKGROUND_OFFSET);
    $9c3e7af7d824669d$var$styles.bgColor.ansi16m = $9c3e7af7d824669d$var$wrapAnsi16m($9c3e7af7d824669d$var$ANSI_BACKGROUND_OFFSET);
    // From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
    Object.defineProperties($9c3e7af7d824669d$var$styles, {
        rgbToAnsi256: {
            value (red, green, blue) {
                // We use the extended greyscale palette here, with the exception of
                // black and white. normal palette only has 4 greyscale shades.
                if (red === green && green === blue) {
                    if (red < 8) return 16;
                    if (red > 248) return 231;
                    return Math.round((red - 8) / 247 * 24) + 232;
                }
                return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
            },
            enumerable: false
        },
        hexToRgb: {
            value (hex) {
                const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
                if (!matches) return [
                    0,
                    0,
                    0
                ];
                let [colorString] = matches;
                if (colorString.length === 3) colorString = [
                    ...colorString
                ].map((character)=>character + character).join("");
                const integer = Number.parseInt(colorString, 16);
                return [
                    /* eslint-disable no-bitwise */ integer >> 16 & 0xFF,
                    integer >> 8 & 0xFF,
                    integer & 0xFF
                ];
            },
            enumerable: false
        },
        hexToAnsi256: {
            value: (hex)=>$9c3e7af7d824669d$var$styles.rgbToAnsi256(...$9c3e7af7d824669d$var$styles.hexToRgb(hex)),
            enumerable: false
        },
        ansi256ToAnsi: {
            value (code) {
                if (code < 8) return 30 + code;
                if (code < 16) return 90 + (code - 8);
                let red;
                let green;
                let blue;
                if (code >= 232) {
                    red = ((code - 232) * 10 + 8) / 255;
                    green = red;
                    blue = red;
                } else {
                    code -= 16;
                    const remainder = code % 36;
                    red = Math.floor(code / 36) / 5;
                    green = Math.floor(remainder / 6) / 5;
                    blue = remainder % 6 / 5;
                }
                const value = Math.max(red, green, blue) * 2;
                if (value === 0) return 30;
                // eslint-disable-next-line no-bitwise
                let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
                if (value === 2) result += 60;
                return result;
            },
            enumerable: false
        },
        rgbToAnsi: {
            value: (red, green, blue)=>$9c3e7af7d824669d$var$styles.ansi256ToAnsi($9c3e7af7d824669d$var$styles.rgbToAnsi256(red, green, blue)),
            enumerable: false
        },
        hexToAnsi: {
            value: (hex)=>$9c3e7af7d824669d$var$styles.ansi256ToAnsi($9c3e7af7d824669d$var$styles.hexToAnsi256(hex)),
            enumerable: false
        }
    });
    return $9c3e7af7d824669d$var$styles;
}
const $9c3e7af7d824669d$var$ansiStyles = $9c3e7af7d824669d$var$assembleStyles();
var $9c3e7af7d824669d$export$2e2bcd8739ae039 = $9c3e7af7d824669d$var$ansiStyles;





// From: https://github.com/sindresorhus/has-flag/blob/main/index.js
/// function hasFlag(flag, argv = globalThis.Deno?.args ?? process.argv) {
function $c4d8e5a311b56e5c$var$hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : (0, $4hQOU$nodeprocess).argv) {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
const { env: $c4d8e5a311b56e5c$var$env } = (0, $4hQOU$nodeprocess);
let $c4d8e5a311b56e5c$var$flagForceColor;
if ($c4d8e5a311b56e5c$var$hasFlag("no-color") || $c4d8e5a311b56e5c$var$hasFlag("no-colors") || $c4d8e5a311b56e5c$var$hasFlag("color=false") || $c4d8e5a311b56e5c$var$hasFlag("color=never")) $c4d8e5a311b56e5c$var$flagForceColor = 0;
else if ($c4d8e5a311b56e5c$var$hasFlag("color") || $c4d8e5a311b56e5c$var$hasFlag("colors") || $c4d8e5a311b56e5c$var$hasFlag("color=true") || $c4d8e5a311b56e5c$var$hasFlag("color=always")) $c4d8e5a311b56e5c$var$flagForceColor = 1;
function $c4d8e5a311b56e5c$var$envForceColor() {
    if ("FORCE_COLOR" in $c4d8e5a311b56e5c$var$env) {
        if ($c4d8e5a311b56e5c$var$env.FORCE_COLOR === "true") return 1;
        if ($c4d8e5a311b56e5c$var$env.FORCE_COLOR === "false") return 0;
        return $c4d8e5a311b56e5c$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($c4d8e5a311b56e5c$var$env.FORCE_COLOR, 10), 3);
    }
}
function $c4d8e5a311b56e5c$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function $c4d8e5a311b56e5c$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY, sniffFlags: sniffFlags = true } = {}) {
    const noFlagForceColor = $c4d8e5a311b56e5c$var$envForceColor();
    if (noFlagForceColor !== undefined) $c4d8e5a311b56e5c$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $c4d8e5a311b56e5c$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($c4d8e5a311b56e5c$var$hasFlag("color=16m") || $c4d8e5a311b56e5c$var$hasFlag("color=full") || $c4d8e5a311b56e5c$var$hasFlag("color=truecolor")) return 3;
        if ($c4d8e5a311b56e5c$var$hasFlag("color=256")) return 2;
    }
    // Check for Azure DevOps pipelines.
    // Has to be above the `!streamIsTTY` check.
    if ("TF_BUILD" in $c4d8e5a311b56e5c$var$env && "AGENT_NAME" in $c4d8e5a311b56e5c$var$env) return 1;
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($c4d8e5a311b56e5c$var$env.TERM === "dumb") return min;
    if ((0, $4hQOU$nodeprocess).platform === "win32") {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = (0, $4hQOU$nodeos).release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) return Number(osRelease[2]) >= 14931 ? 3 : 2;
        return 1;
    }
    if ("CI" in $c4d8e5a311b56e5c$var$env) {
        if ("GITHUB_ACTIONS" in $c4d8e5a311b56e5c$var$env || "GITEA_ACTIONS" in $c4d8e5a311b56e5c$var$env) return 3;
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "BUILDKITE",
            "DRONE"
        ].some((sign)=>sign in $c4d8e5a311b56e5c$var$env) || $c4d8e5a311b56e5c$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $c4d8e5a311b56e5c$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($c4d8e5a311b56e5c$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($c4d8e5a311b56e5c$var$env.COLORTERM === "truecolor") return 3;
    if ($c4d8e5a311b56e5c$var$env.TERM === "xterm-kitty") return 3;
    if ("TERM_PROGRAM" in $c4d8e5a311b56e5c$var$env) {
        const version = Number.parseInt(($c4d8e5a311b56e5c$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($c4d8e5a311b56e5c$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($c4d8e5a311b56e5c$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($c4d8e5a311b56e5c$var$env.TERM)) return 1;
    if ("COLORTERM" in $c4d8e5a311b56e5c$var$env) return 1;
    return min;
}
function $c4d8e5a311b56e5c$export$6f279ba00f1459de(stream, options = {}) {
    const level = $c4d8e5a311b56e5c$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $c4d8e5a311b56e5c$var$translateLevel(level);
}
const $c4d8e5a311b56e5c$var$supportsColor = {
    stdout: $c4d8e5a311b56e5c$export$6f279ba00f1459de({
        isTTY: (0, $4hQOU$nodetty).isatty(1)
    }),
    stderr: $c4d8e5a311b56e5c$export$6f279ba00f1459de({
        isTTY: (0, $4hQOU$nodetty).isatty(2)
    })
};
var $c4d8e5a311b56e5c$export$2e2bcd8739ae039 = $c4d8e5a311b56e5c$var$supportsColor;


// TODO: When targeting Node.js 16, use `String.prototype.replaceAll`.
function $3a350480b217c6be$export$9300dfb554c6c407(string, substring, replacer) {
    let index = string.indexOf(substring);
    if (index === -1) return string;
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
        returnValue += string.slice(endIndex, index) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
    }while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
}
function $3a350480b217c6be$export$ecabf4aff2e9764(string, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = "";
    do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
    }while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
}


const { stdout: $c44461bbb7710b09$export$fcbe44f5d6fcebd, stderr: $c44461bbb7710b09$export$8107055a758cd2bd } = (0, $c4d8e5a311b56e5c$export$2e2bcd8739ae039);
const $c44461bbb7710b09$var$GENERATOR = Symbol("GENERATOR");
const $c44461bbb7710b09$var$STYLER = Symbol("STYLER");
const $c44461bbb7710b09$var$IS_EMPTY = Symbol("IS_EMPTY");
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $c44461bbb7710b09$var$levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
];
const $c44461bbb7710b09$var$styles = Object.create(null);
const $c44461bbb7710b09$var$applyOptions = (object, options = {})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
    // Detect level if not set manually
    const colorLevel = $c44461bbb7710b09$export$fcbe44f5d6fcebd ? $c44461bbb7710b09$export$fcbe44f5d6fcebd.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $c44461bbb7710b09$export$79544b80b91c2197 {
    constructor(options){
        // eslint-disable-next-line no-constructor-return
        return $c44461bbb7710b09$var$chalkFactory(options);
    }
}
const $c44461bbb7710b09$var$chalkFactory = (options)=>{
    const chalk = (...strings)=>strings.join(" ");
    $c44461bbb7710b09$var$applyOptions(chalk, options);
    Object.setPrototypeOf(chalk, $c44461bbb7710b09$var$createChalk.prototype);
    return chalk;
};
function $c44461bbb7710b09$var$createChalk(options) {
    return $c44461bbb7710b09$var$chalkFactory(options);
}
Object.setPrototypeOf($c44461bbb7710b09$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries((0, $9c3e7af7d824669d$export$2e2bcd8739ae039)))$c44461bbb7710b09$var$styles[styleName] = {
    get () {
        const builder = $c44461bbb7710b09$var$createBuilder(this, $c44461bbb7710b09$var$createStyler(style.open, style.close, this[$c44461bbb7710b09$var$STYLER]), this[$c44461bbb7710b09$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$c44461bbb7710b09$var$styles.visible = {
    get () {
        const builder = $c44461bbb7710b09$var$createBuilder(this, this[$c44461bbb7710b09$var$STYLER], true);
        Object.defineProperty(this, "visible", {
            value: builder
        });
        return builder;
    }
};
const $c44461bbb7710b09$var$getModelAnsi = (model, level, type, ...arguments_)=>{
    if (model === "rgb") {
        if (level === "ansi16m") return (0, $9c3e7af7d824669d$export$2e2bcd8739ae039)[type].ansi16m(...arguments_);
        if (level === "ansi256") return (0, $9c3e7af7d824669d$export$2e2bcd8739ae039)[type].ansi256((0, $9c3e7af7d824669d$export$2e2bcd8739ae039).rgbToAnsi256(...arguments_));
        return (0, $9c3e7af7d824669d$export$2e2bcd8739ae039)[type].ansi((0, $9c3e7af7d824669d$export$2e2bcd8739ae039).rgbToAnsi(...arguments_));
    }
    if (model === "hex") return $c44461bbb7710b09$var$getModelAnsi("rgb", level, type, ...(0, $9c3e7af7d824669d$export$2e2bcd8739ae039).hexToRgb(...arguments_));
    return (0, $9c3e7af7d824669d$export$2e2bcd8739ae039)[type][model](...arguments_);
};
const $c44461bbb7710b09$var$usedModels = [
    "rgb",
    "hex",
    "ansi256"
];
for (const model of $c44461bbb7710b09$var$usedModels){
    $c44461bbb7710b09$var$styles[model] = {
        get () {
            const { level: level } = this;
            return function(...arguments_) {
                const styler = $c44461bbb7710b09$var$createStyler($c44461bbb7710b09$var$getModelAnsi(model, $c44461bbb7710b09$var$levelMapping[level], "color", ...arguments_), (0, $9c3e7af7d824669d$export$2e2bcd8739ae039).color.close, this[$c44461bbb7710b09$var$STYLER]);
                return $c44461bbb7710b09$var$createBuilder(this, styler, this[$c44461bbb7710b09$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    $c44461bbb7710b09$var$styles[bgModel] = {
        get () {
            const { level: level } = this;
            return function(...arguments_) {
                const styler = $c44461bbb7710b09$var$createStyler($c44461bbb7710b09$var$getModelAnsi(model, $c44461bbb7710b09$var$levelMapping[level], "bgColor", ...arguments_), (0, $9c3e7af7d824669d$export$2e2bcd8739ae039).bgColor.close, this[$c44461bbb7710b09$var$STYLER]);
                return $c44461bbb7710b09$var$createBuilder(this, styler, this[$c44461bbb7710b09$var$IS_EMPTY]);
            };
        }
    };
}
const $c44461bbb7710b09$var$proto = Object.defineProperties(()=>{}, {
    ...$c44461bbb7710b09$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$c44461bbb7710b09$var$GENERATOR].level;
        },
        set (level) {
            this[$c44461bbb7710b09$var$GENERATOR].level = level;
        }
    }
});
const $c44461bbb7710b09$var$createStyler = (open, close, parent)=>{
    let openAll;
    let closeAll;
    if (parent === undefined) {
        openAll = open;
        closeAll = close;
    } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
    }
    return {
        open: open,
        close: close,
        openAll: openAll,
        closeAll: closeAll,
        parent: parent
    };
};
const $c44461bbb7710b09$var$createBuilder = (self, _styler, _isEmpty)=>{
    // Single argument is hot path, implicit coercion is faster than anything
    // eslint-disable-next-line no-implicit-coercion
    const builder = (...arguments_)=>$c44461bbb7710b09$var$applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $c44461bbb7710b09$var$proto);
    builder[$c44461bbb7710b09$var$GENERATOR] = self;
    builder[$c44461bbb7710b09$var$STYLER] = _styler;
    builder[$c44461bbb7710b09$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $c44461bbb7710b09$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$c44461bbb7710b09$var$IS_EMPTY] ? "" : string;
    let styler = self[$c44461bbb7710b09$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll, closeAll: closeAll } = styler;
    if (string.includes("\x1b")) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = (0, $3a350480b217c6be$export$9300dfb554c6c407)(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) string = (0, $3a350480b217c6be$export$ecabf4aff2e9764)(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
Object.defineProperties($c44461bbb7710b09$var$createChalk.prototype, $c44461bbb7710b09$var$styles);
const $c44461bbb7710b09$var$chalk = $c44461bbb7710b09$var$createChalk();
const $c44461bbb7710b09$export$8cef8185e551afa5 = $c44461bbb7710b09$var$createChalk({
    level: $c44461bbb7710b09$export$8107055a758cd2bd ? $c44461bbb7710b09$export$8107055a758cd2bd.level : 0
});
var $c44461bbb7710b09$export$2e2bcd8739ae039 = $c44461bbb7710b09$var$chalk;


var $6359e9f586084af1$exports = {};
"use strict";



var $h91fL = parcelRequire("h91fL");



/**
 * Create an instance of `Enquirer`.
 *
 * ```js
 * const Enquirer = require('enquirer');
 * const enquirer = new Enquirer();
 * ```
 * @name Enquirer
 * @param {Object} `options` (optional) Options to use with all prompts.
 * @param {Object} `answers` (optional) Answers object to initialize with.
 * @api public
 */ class $6359e9f586084af1$var$Enquirer extends $4hQOU$events {
    constructor(options, answers){
        super();
        this.options = $h91fL.merge({}, options);
        this.answers = {
            ...answers
        };
    }
    /**
   * Register a custom prompt type.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * enquirer.register('customType', require('./custom-prompt'));
   * ```
   * @name register()
   * @param {String} `type`
   * @param {Function|Prompt} `fn` `Prompt` class, or a function that returns a `Prompt` class.
   * @return {Object} Returns the Enquirer instance
   * @api public
   */ register(type, fn) {
        if ($h91fL.isObject(type)) {
            for (let key of Object.keys(type))this.register(key, type[key]);
            return this;
        }
        $4hQOU$assert.equal(typeof fn, "function", "expected a function");
        const name = type.toLowerCase();
        if (fn.prototype instanceof this.Prompt) this.prompts[name] = fn;
        else this.prompts[name] = fn(this.Prompt, this);
        return this;
    }
    /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   *
   * const response = await enquirer.prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name prompt()
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */ async prompt(questions = []) {
        for (let question of [].concat(questions))try {
            if (typeof question === "function") question = await question.call(this);
            await this.ask($h91fL.merge({}, this.options, question));
        } catch (err) {
            return Promise.reject(err);
        }
        return this.answers;
    }
    async ask(question) {
        if (typeof question === "function") question = await question.call(this);
        let opts = $h91fL.merge({}, this.options, question);
        let { type: type, name: name } = question;
        let { set: set, get: get } = $h91fL;
        if (typeof type === "function") type = await type.call(this, question, this.answers);
        if (!type) return this.answers[name];
        if (type === "number") type = "numeral";
        $4hQOU$assert(this.prompts[type], `Prompt "${type}" is not registered`);
        let prompt = new this.prompts[type](opts);
        let value = get(this.answers, name);
        prompt.state.answers = this.answers;
        prompt.enquirer = this;
        if (name) prompt.on("submit", (value)=>{
            this.emit("answer", name, value, prompt);
            set(this.answers, name, value);
        });
        // bubble events
        let emit = prompt.emit.bind(prompt);
        prompt.emit = (...args)=>{
            this.emit.call(this, ...args);
            return emit(...args);
        };
        this.emit("prompt", prompt, this);
        if (opts.autofill && value != null) {
            prompt.value = prompt.input = value;
            // if "autofill=show" render the prompt, otherwise stay "silent"
            if (opts.autofill === "show") await prompt.submit();
        } else value = prompt.value = await prompt.run();
        return value;
    }
    /**
   * Use an enquirer plugin.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * const plugin = enquirer => {
   *   // do stuff to enquire instance
   * };
   * enquirer.use(plugin);
   * ```
   * @name use()
   * @param {Function} `plugin` Plugin function that takes an instance of Enquirer.
   * @return {Object} Returns the Enquirer instance.
   * @api public
   */ use(plugin) {
        plugin.call(this, this);
        return this;
    }
    set Prompt(value) {
        this._Prompt = value;
    }
    get Prompt() {
        return this._Prompt || this.constructor.Prompt;
    }
    get prompts() {
        return this.constructor.prompts;
    }
    static set Prompt(value) {
        this._Prompt = value;
    }
    static get Prompt() {
        return this._Prompt || (parcelRequire("3fCUp"));
    }
    static get prompts() {
        return (parcelRequire("iFfp1"));
    }
    static get types() {
        return (parcelRequire("hZrYo"));
    }
    /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const { prompt } = require('enquirer');
   * const response = await prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name Enquirer#prompt
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */ static get prompt() {
        const fn = (questions, ...rest)=>{
            let enquirer = new this(...rest);
            let emit = enquirer.emit.bind(enquirer);
            enquirer.emit = (...args)=>{
                fn.emit(...args);
                return emit(...args);
            };
            return enquirer.prompt(questions);
        };
        $h91fL.mixinEmitter(fn, new $4hQOU$events());
        return fn;
    }
}
$h91fL.mixinEmitter($6359e9f586084af1$var$Enquirer, new $4hQOU$events());
const $6359e9f586084af1$var$prompts = $6359e9f586084af1$var$Enquirer.prompts;
for (let name of Object.keys($6359e9f586084af1$var$prompts)){
    let key = name.toLowerCase();
    let run = (options)=>new $6359e9f586084af1$var$prompts[name](options).run();
    $6359e9f586084af1$var$Enquirer.prompt[key] = run;
    $6359e9f586084af1$var$Enquirer[key] = run;
    if (!$6359e9f586084af1$var$Enquirer[name]) Reflect.defineProperty($6359e9f586084af1$var$Enquirer, name, {
        get: ()=>$6359e9f586084af1$var$prompts[name]
    });
}
const $6359e9f586084af1$var$define = (name)=>{
    $h91fL.defineExport($6359e9f586084af1$var$Enquirer, name, ()=>$6359e9f586084af1$var$Enquirer.types[name]);
};
$6359e9f586084af1$var$define("ArrayPrompt");
$6359e9f586084af1$var$define("AuthPrompt");
$6359e9f586084af1$var$define("BooleanPrompt");
$6359e9f586084af1$var$define("NumberPrompt");
$6359e9f586084af1$var$define("StringPrompt");
$6359e9f586084af1$exports = $6359e9f586084af1$var$Enquirer;



const { prompt: $3b25478c8003c06a$var$prompt } = (0, (/*@__PURE__*/$parcel$interopDefault($6359e9f586084af1$exports)));
const $3b25478c8003c06a$var$promptQuestion = async (extended = {}, message = `name it:`)=>{
    if (extended.type === "list") extended.type = "select";
    if (extended.message) message = extended.message;
    if (extended.choices && extended.choices[0].value) extended.choices = extended.choices.map((e)=>{
        return {
            message: e.name,
            value: e.value
        };
    });
    if (extended.pageSize) extended.limit = extended.pageSize;
    const { answer: answer } = await $3b25478c8003c06a$var$prompt({
        type: "input",
        message: `${(0, $c44461bbb7710b09$export$2e2bcd8739ae039).green.bold.underline(message)}`,
        name: `answer`,
        ...extended
    });
    return answer;
};
var $3b25478c8003c06a$export$2e2bcd8739ae039 = $3b25478c8003c06a$var$promptQuestion;


const $cceb8c56faaf2c4e$var$clear = ()=>{
    console.clear();
};
function $cceb8c56faaf2c4e$var$readDir(dir) {
    return new Promise((resolve, reject)=>{
        (0, $4hQOU$fs).readdir(dir, (err, result)=>{
            if (err) return reject(err);
            return resolve(result);
        });
    });
}
function $cceb8c56faaf2c4e$var$format(filename, fullpath) {
    try {
        return (0, $4hQOU$fs).statSync(fullpath).isDirectory() ? `${filename}` : filename;
    } catch (ex) {
        return null;
    }
}
function $cceb8c56faaf2c4e$var$mountChoices({ folder: folder, type: type }) {
    return new Promise((resolve, reject)=>{
        $cceb8c56faaf2c4e$var$readDir(folder).then((dirs)=>{
            let data = [];
            if (type === "folder") data.push({
                name: (0, $c44461bbb7710b09$export$2e2bcd8739ae039).blue.bold(`\u21A3 ${(0, $4hQOU$path).resolve(folder)}`),
                value: `--${(0, $4hQOU$path).resolve(folder)}`
            });
            data.push({
                name: (0, $c44461bbb7710b09$export$2e2bcd8739ae039).blue.bold(`Enter custom path`),
                value: `~~custom`
            });
            data.push({
                name: "..",
                value: (0, $4hQOU$path).resolve(`${folder}/..`)
            });
            for(let index in dirs){
                let file = dirs[index];
                let fullpath = (0, $4hQOU$path).resolve(`${folder}/${file}`);
                let name = $cceb8c56faaf2c4e$var$format(file, fullpath);
                if (type === "folder" && !(0, $4hQOU$fs).statSync(fullpath).isDirectory()) continue;
                data.push({
                    name: name,
                    value: fullpath,
                    short: fullpath
                });
            }
            return resolve(data);
        });
    });
}
function $cceb8c56faaf2c4e$var$getFile(config = {}) {
    $cceb8c56faaf2c4e$var$clear();
    let { folder: folder = ".", type: type = "folder", question: question = `Choose a ${config.type === "folder" ? "folder" : "file"}` } = config;
    return new Promise((resolve)=>{
        $cceb8c56faaf2c4e$var$mountChoices({
            folder: folder,
            type: type
        }).then(async (choices)=>{
            const dir = await (0, $3b25478c8003c06a$export$2e2bcd8739ae039)({
                type: "autocomplete",
                choices: choices
            }, question);
            if (type === "folder" && dir.startsWith("--")) resolve(dir.replace("--", ""));
            else if (type !== "folder" && !(0, $4hQOU$fs).statSync(dir).isDirectory()) resolve(dir);
            else if (dir.startsWith("~~custom")) resolve(await (0, $3b25478c8003c06a$export$2e2bcd8739ae039)({
                type: "input"
            }, "Enter custom path"));
            else resolve($cceb8c56faaf2c4e$var$getFile({
                ...config,
                folder: dir
            }));
        }).catch((e)=>{
            resolve(false);
        });
    });
}
var $cceb8c56faaf2c4e$export$2e2bcd8739ae039 = $cceb8c56faaf2c4e$var$getFile;


export {$cceb8c56faaf2c4e$export$2e2bcd8739ae039 as default};
