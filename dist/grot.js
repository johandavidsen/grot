'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var GrotHello = function (_React$Component) {
    _inherits(GrotHello, _React$Component);

    /**
     *
     */

    function GrotHello(props) {
        _classCallCheck(this, GrotHello);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotHello).call(this, props));
    }

    /**
     *
     */

    _createClass(GrotHello, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'h1',
                null,
                'Grót - Hello from Grót'
            );
        }
    }]);

    return GrotHello;
}(_react2.default.Component);

exports.default = GrotHello;
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
 * TableRow
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotTableRow = function (_React$Component) {
    _inherits(GrotTableRow, _React$Component);

    /**
     *
     */

    function GrotTableRow(props) {
        _classCallCheck(this, GrotTableRow);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotTableRow).call(this, props));
    }

    /**
     *
     */

    _createClass(GrotTableRow, [{
        key: 'render',
        value: function render() {
            var icon = _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'grot-button-link', bsStyle: 'link', value: this.props.id, onClick: this.props.remove },
                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'minus' })
            );

            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_reactBootstrap.Input, { type: 'text', defaultValue: this.props.prop, className: 'grot-table-input' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_reactBootstrap.Input, { type: 'text', defaultValue: this.props.value, className: 'grot-table-input' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    icon
                )
            );
        }
    }]);

    return GrotTableRow;
}(_react2.default.Component);

/**
 * GrotTable
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotTable = function (_React$Component2) {
    _inherits(GrotTable, _React$Component2);

    /**
     *
     */

    function GrotTable(props) {
        _classCallCheck(this, GrotTable);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotTable).call(this, props));

        _this2.state = {
            properties: []
        };
        _this2._addRow = _this2._addRow.bind(_this2);
        _this2._removeRow = _this2._removeRow.bind(_this2);
        return _this2;
    }

    /**
     *
     */

    _createClass(GrotTable, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var propComponents = [];
            this.state.properties.forEach(function (element) {
                propComponents.push(_react2.default.createElement(GrotTableRow, {
                    key: element.id,
                    id: element.id,
                    prop: element.prop,
                    value: element.value,
                    add: _this3._addRow,
                    remove: _this3._removeRow
                }));
            });

            return _react2.default.createElement(
                _reactBootstrap.Table,
                { className: 'grot-table' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Property'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Value'
                        ),
                        _react2.default.createElement('th', null)
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    propComponents,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(_reactBootstrap.Input, { ref: 'newProp', type: 'text', className: 'grot-table-input' })
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(_reactBootstrap.Input, { ref: 'newValue', type: 'text', className: 'grot-table-input' })
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { className: 'grot-button-link', bsStyle: 'link', onClick: this._addRow },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' })
                            )
                        )
                    )
                )
            );
        }

        /**
         *
         */

    }, {
        key: '_addRow',
        value: function _addRow() {
            var props = this.state.properties;
            var prop = this.refs.newProp.refs.input;
            var value = this.refs.newValue.refs.input;
            props.push({ id: Math.random(), prop: prop.value, value: value.value });
            prop.value = "";
            value.value = "";
            this.setState({ properties: props });
        }

        /**
         *
         */

    }, {
        key: '_removeRow',
        value: function _removeRow(event) {
            var id = event.currentTarget.value;
            var props = this.state.properties.filter(function (element) {
                return element.id != id;
            });
            this.setState({ properties: props });
        }
    }]);

    return GrotTable;
}(_react2.default.Component);

exports.default = GrotTable;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GrotHello = require('./GrotHello');

var _GrotHello2 = _interopRequireDefault(_GrotHello);

var _GrotTable = require('./GrotTable');

var _GrotTable2 = _interopRequireDefault(_GrotTable);

var _GrotPanel = require('./GrotPanel');

var _GrotPanel2 = _interopRequireDefault(_GrotPanel);

var _GrotObjectBox = require('./GrotObjectBox');

var _GrotObjectBox2 = _interopRequireDefault(_GrotObjectBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    GrotHello: _GrotHello2.default,
    GrotTable: _GrotTable2.default,
    GrotPanel: _GrotPanel2.default,
    GrotObjectBox: _GrotObjectBox2.default
};