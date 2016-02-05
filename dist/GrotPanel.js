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
 * GrotPanelHeader
 *
 * This is a helper class for the GrotPanel class.
 *
 * @since 0.1.7
 * @Author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotPanelHeader = function (_React$Component) {
    _inherits(GrotPanelHeader, _React$Component);

    /**
     * The constructor takes the following parameters:
     *
     * @param {string} title - The title of the panel..
     * @param {boolean} edit - A boolean value to indicate if the panel can be
     * changed.
     * @param {function} callback - A callback function, which will be called
     * everytime the title is changed.
     * @param {function} toggle - A callback function, which is used to toggle
     * the open state variable in the parent.
     *
     */

    function GrotPanelHeader(props) {
        _classCallCheck(this, GrotPanelHeader);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotPanelHeader).call(this, props));

        _this.state = {
            title: props.title,
            changeTitle: props.edit,
            edit: false
        };
        _this._toggleEdit = _this._toggleEdit.bind(_this);
        _this._setTitle = _this._setTitle.bind(_this);
        return _this;
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */

    _createClass(GrotPanelHeader, [{
        key: 'render',
        value: function render() {
            var icon = this.props.expanded ? 'chevron-down' : 'chevron-right';
            var title = _react2.default.createElement(
                'h3',
                { className: 'panel-title' },
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: this.props.toggle, bsStyle: 'link', className: 'grot-button-link grot-button-link-edit' },
                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon }),
                    ' ',
                    ' ',
                    this.state.title
                )
            );
            if (this.state.changeTitle) {
                title = this.state.edit ? _react2.default.createElement(
                    'h3',
                    { className: 'panel-title' },
                    _react2.default.createElement(_reactBootstrap.Input, { type: 'text', ref: 'titleInput', defaultValue: this.state.title }),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this._setTitle },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this._toggleEdit },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
                    )
                ) : _react2.default.createElement(
                    'h3',
                    { className: 'panel-title grot-table-header' },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.props.toggle, bsStyle: 'link', className: 'grot-button-link grot-button-link-edit' },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon }),
                        ' ',
                        ' ',
                        this.state.title
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this._toggleEdit, bsStyle: 'link', className: 'grot-button-link grot-button-edit' },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'edit' })
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                title
            );
        }

        /**
         * This function toggles the edit state variable.
         */

    }, {
        key: '_toggleEdit',
        value: function _toggleEdit() {
            this.setState({ edit: !this.state.edit });
        }

        /**
         * The function changes the title of the panel and calls the callback
         * function.
         */

    }, {
        key: '_setTitle',
        value: function _setTitle() {
            var title = this.refs.titleInput.getValue();
            this.props.callback(title);
            this.setState({ title: title, edit: !this.state.edit });
        }
    }]);

    return GrotPanelHeader;
}(_react2.default.Component);

/**
 * GrotPanel
 *
 * GrotPanel is a simple panel, which can be expanded and collapsed by clicking
 * on the title.
 *
 * @since 0.1.7
 * @Author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotPanel = function (_React$Component2) {
    _inherits(GrotPanel, _React$Component2);

    /**
     * This constructor takes the following parameters:
     *
     * @param {string} title - Expects a string value to be used as the title of
     * the panel.
     * @param {boolean} expanded - A boolean value, which determines if the
     * intial state of the panel is expanded or not.
     * @param {boolean} edit - Set if the title can be changed.
     * @param {function} children - Set component to be viewed inside the panel.
     * @param {function} callback - A function, which is called everytime the
     * title is changed.
     *
     */

    function GrotPanel(props) {
        _classCallCheck(this, GrotPanel);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotPanel).call(this, props));

        _this2.state = {
            open: props.expanded,
            title: props.title,
            edit: props.edit
        };
        _this2._toggle = _this2._toggle.bind(_this2);
        _this2._changeTitle = _this2._changeTitle.bind(_this2);
        return _this2;
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */

    _createClass(GrotPanel, [{
        key: 'render',
        value: function render() {

            var header = _react2.default.createElement(GrotPanelHeader, { title: this.props.title, edit: this.state.edit, toggle: this._toggle, callback: this._changeTitle, expanded: this.state.open });

            return _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: header, collapsible: true, expanded: this.state.open, className: 'grot-panel' },
                this.props.children
            );
        }

        /**
         * This function toggles the open state of the Panel.
         */

    }, {
        key: '_toggle',
        value: function _toggle() {
            this.setState({ open: !this.state.open });
        }

        /**
         * This function changes the title and calls the callback function.
         */

    }, {
        key: '_changeTitle',
        value: function _changeTitle(title) {
            this.setState({ title: title });
            this.props.callback(title);
        }
    }]);

    return GrotPanel;
}(_react2.default.Component);

exports.default = GrotPanel;