'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _GrotPanel = require('./GrotPanel');

var _GrotPanel2 = _interopRequireDefault(_GrotPanel);

var _GrotTable = require('./GrotTable');

var _GrotTable2 = _interopRequireDefault(_GrotTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * GrotHello
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotObjectBox = function (_React$Component) {
    _inherits(GrotObjectBox, _React$Component);

    /**
     *
     */

    function GrotObjectBox(props) {
        _classCallCheck(this, GrotObjectBox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotObjectBox).call(this, props));
    }

    /**
     *
     */

    _createClass(GrotObjectBox, [{
        key: 'render',
        value: function render() {

            var table = _react2.default.createElement(_GrotTable2.default, null);

            return _react2.default.createElement(_GrotPanel2.default, {
                header: this.props.header,
                expanded: this.props.expanded,
                children: table });
        }
    }]);

    return GrotObjectBox;
}(_react2.default.Component);

exports.default = GrotObjectBox;