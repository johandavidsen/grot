'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _GrotTable = require('./GrotTable');

var _GrotTable2 = _interopRequireDefault(_GrotTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */

var GrotPanelHeader = function (_React$Component) {
    _inherits(GrotPanelHeader, _React$Component);

    /**
     *
     */

    function GrotPanelHeader(props) {
        _classCallCheck(this, GrotPanelHeader);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotPanelHeader).call(this, props));

        _this._renderButton = _this._renderButton.bind(_this);
        return _this;
    }

    /**
     *
     */

    _createClass(GrotPanelHeader, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    { className: 'panel-title' },
                    this._renderButton()
                )
            );
        }

        /**
         *
         */

    }, {
        key: '_renderButton',
        value: function _renderButton() {
            var icon = this.props.expanded ? 'chevron-down' : 'chevron-right';

            return _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.props.toggle, bsStyle: 'link', className: 'grot-button-link' },
                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon }),
                ' ',
                ' ',
                this.props.headerTitle
            );
        }
    }]);

    return GrotPanelHeader;
}(_react2.default.Component);

var GrotPanel = function (_React$Component2) {
    _inherits(GrotPanel, _React$Component2);

    function GrotPanel(props) {
        _classCallCheck(this, GrotPanel);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotPanel).call(this, props));

        _this2.state = {
            open: props.expanded
        };
        _this2._toggle = _this2._toggle.bind(_this2);
        return _this2;
    }

    _createClass(GrotPanel, [{
        key: 'render',
        value: function render() {

            var header = _react2.default.createElement(GrotPanelHeader, { headerTitle: this.props.header, toggle: this._toggle, expanded: this.state.open });

            return _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: header, collapsible: true, expanded: this.state.open, className: 'grot-panel' },
                this.props.children
            );
        }
    }, {
        key: '_toggle',
        value: function _toggle() {
            this.setState({ open: !this.state.open });
        }
    }]);

    return GrotPanel;
}(_react2.default.Component);

exports.default = GrotPanel;