'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GrotHello = GrotHello;
exports.GrotTable = GrotTable;
exports.GrotPanel = GrotPanel;
exports.GrotObjectBox = GrotObjectBox;
exports.GrotCredits = GrotCredits;
exports.GrotGOSimpleBox = GrotGOSimpleBox;
exports.GrotJSONBox = GrotJSONBox;

var _GrotHello = require('./GrotHello');

var _GrotHello2 = _interopRequireDefault(_GrotHello);

var _GrotTable = require('./GrotTable');

var _GrotTable2 = _interopRequireDefault(_GrotTable);

var _GrotPanel = require('./GrotPanel');

var _GrotPanel2 = _interopRequireDefault(_GrotPanel);

var _GrotObjectBox = require('./GrotObjectBox');

var _GrotObjectBox2 = _interopRequireDefault(_GrotObjectBox);

var _GrotJSONBox = require('./GrotJSONBox');

var _GrotJSONBox2 = _interopRequireDefault(_GrotJSONBox);

var _GrotCredits = require('./GrotCredits');

var _GrotCredits2 = _interopRequireDefault(_GrotCredits);

var _GrotGOPreviewBox = require('./GrotGOPreviewBox');

var _GrotGOPreviewBox2 = _interopRequireDefault(_GrotGOPreviewBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    GrotHello: _GrotHello2.default,
    GrotTable: _GrotTable2.default,
    GrotPanel: _GrotPanel2.default,
    GrotObjectBox: _GrotObjectBox2.default,
    GrotCredits: _GrotCredits2.default,
    GrotGOSimpleBox: _GrotGOPreviewBox2.default,
    GrotJSONBox: GrotJSONBox
}; /**
    * Default export file for the folder component.
    *
    * @since 0.1.9
    * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
    *
    */

function GrotHello() {
    return (0, _GrotHello2.default)();
}
function GrotTable() {
    return (0, _GrotTable2.default)();
}
function GrotPanel() {
    return (0, _GrotPanel2.default)();
}
function GrotObjectBox() {
    return (0, _GrotObjectBox2.default)();
}
function GrotCredits() {
    return (0, _GrotJSONBox2.default)();
}
function GrotGOSimpleBox() {
    return (0, _GrotCredits2.default)();
}
function GrotJSONBox() {
    return (0, _GrotGOPreviewBox2.default)();
}