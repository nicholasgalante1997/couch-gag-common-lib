"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
const getLogColorMap = {
    info: (s) => chalk_1.default.bgCyan(s),
    debug: (s) => chalk_1.default.bgMagenta(s),
    warn: (s) => chalk_1.default.bgYellow(s),
    error: (s) => chalk_1.default.bgRed(s),
    bright: (s) => chalk_1.default.bgGreenBright(s)
};
function log(logLevel, msg) {
    console.log(getLogColorMap[logLevel](`${logLevel}: msg={${msg}} emitTime={${new Date().toISOString()}}`));
}
exports.log = log;
//# sourceMappingURL=index.js.map