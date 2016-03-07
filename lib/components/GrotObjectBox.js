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
 * GrotObjectBox
 *
 * The GrotObjectBox is a component specifically buildt to manipulate a
 * particular JSON object. The structure of this object is the following:
 *
 *  {
 *      title: string,
 *      properties: [
 *          { id: string, prop: string, value: string }
 *      ]
 *  }
 *
 * This component is build using the 2 components GrotPanel and GrotTable.
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotObjectBox = function (_React$Component) {
    _inherits(GrotObjectBox, _React$Component);

    /**
     * The constructor takes the following parameters:
     *
     * @param {Object} object -
     * @param {boolean} edit -
     * @param {boolean} expanded -
     * @param {function} callback -
     *
     */

    function GrotObjectBox(props) {
        _classCallCheck(this, GrotObjectBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotObjectBox).call(this, props));

        _this.state = {
            title: props.object.title,
            expanded: props.expanded,
            edit: props.edit,
            properties: props.object.properties
        };

        _this._onPropertiesChange = _this._onPropertiesChange.bind(_this);
        _this._onTitleChange = _this._onTitleChange.bind(_this);
        return _this;
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */

    _createClass(GrotObjectBox, [{
        key: 'render',
        value: function render() {

            var table = _react2.default.createElement(_GrotTable2.default, { properties: this.properties, callback: this._onPropertiesChange });

            return _react2.default.createElement(_GrotPanel2.default, {
                title: this.state.title,
                edit: this.state.edit,
                callback: this._onTitleChange,
                expanded: this.state.expanded,
                children: table });
        }

        /**
         * This function is called when the properties array is updated. This
         * function also calls the callback function.
         */

    }, {
        key: '_onPropertiesChange',
        value: function _onPropertiesChange(props) {
            this.props.callback({ title: this.state.title, properties: props });
            this.setState({ properties: props });
        }

        /**
         * This function is called, when the title is updated. This
         * function also calls the callback function.
         */

    }, {
        key: '_onTitleChange',
        value: function _onTitleChange(title) {
            this.props.callback({ title: title, properties: this.state.props });
            this.setState({ title: title });
        }
    }]);

    return GrotObjectBox;
}(_react2.default.Component);

exports.default = GrotObjectBox;