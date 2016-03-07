'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectWithProps = ObjectWithProps;
exports.SimpleBox = SimpleBox;

var _GrotGOObjects = require('./GrotGOObjects');

var _GrotGOObjects2 = _interopRequireDefault(_GrotGOObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ObjectWithProps() {
  return _GrotGOObjects2.default.ObjectWithProps();
} /**
   * Default export file for the folder gojs.
   *
   * @since 0.1.9
   * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
   *
   */

function SimpleBox() {
  return _GrotGOObjects2.default.SimpleBox();
}

exports.default = _GrotGOObjects2.default;