'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * GrotJSONBox
 *
 * GrotJSONBox is a very simple component, which is primarily used to display
 * data.
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotJSONBox = function (_React$Component) {
    _inherits(GrotJSONBox, _React$Component);

    /**
     * The constructor takes the following parameters:
     *
     * @param {string} contents - This is the data, which is used to populate,
     * the textarea.
     *
     */

    function GrotJSONBox(props) {
        _classCallCheck(this, GrotJSONBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotJSONBox).call(this, props));

        _this.data = _this.props.contents;
        return _this;
    }

    /**
     * Set the value of the textarea.
     */

    _createClass(GrotJSONBox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var prop = this.refs.JSONBox.refs.input;
            prop.value = nextProps.contents;
            return true;
        }

        /**
         * Returns a HTML string.
         * @return {React Object}
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactBootstrap.Input, { rows: '10', ref: 'JSONBox', defaultValue: this.data, type: 'textarea', readOnly: true });
        }
    }]);

    return GrotJSONBox;
}(_react2.default.Component);

exports.default = GrotJSONBox;