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
 * GrotTableRow
 *
 * GrotTableRow is a little helper class for GrotTable. This row represents a
 * single line of the GrotTable. Each line has 2 column, which take Text as
 * input. Each line has a icon indicating either a - sign (remove line) or a +
 * sign (add new line).
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotTableRow = function (_React$Component) {
    _inherits(GrotTableRow, _React$Component);

    function GrotTableRow() {
        _classCallCheck(this, GrotTableRow);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotTableRow).apply(this, arguments));
    }

    _createClass(GrotTableRow, [{
        key: 'render',

        /**
         * Returns a React HTML String
         * @return {React Object}
         */
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
 * The GrotTable is a 2 column table, where the user can add and remove rows as
 * needed.
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotTable = function (_React$Component2) {
    _inherits(GrotTable, _React$Component2);

    /**
     * The constructor has a limited set of parameters.
     *
     * @param {array} properties - The should be an simple JSON array. If
     * properties is not set; properties will be set to empty.
     * @param {function} callback - This is the callback function, which will be
     * called, when the properties array is changed. This function provides the
     * parameter properties.
     *
     */

    function GrotTable(props) {
        _classCallCheck(this, GrotTable);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotTable).call(this, props));

        if (props.properties) {
            _this2.state = {
                properties: props.properties
            };
        } else {
            _this2.state = {
                properties: []
            };
        }

        _this2._addRow = _this2._addRow.bind(_this2);
        _this2._removeRow = _this2._removeRow.bind(_this2);
        return _this2;
    }

    /**
     *  Returns a HTML string.
     *  @return {React Object}
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
         * This function adds a row to the propeties array.
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
            this.props.callback(props);
        }

        /**
         * This function removes a row from the properties array.
         */

    }, {
        key: '_removeRow',
        value: function _removeRow(event) {
            var id = event.currentTarget.value;
            var props = this.state.properties.filter(function (element) {
                return element.id != id;
            });
            this.setState({ properties: props });
            this.props.callback(props);
        }
    }]);

    return GrotTable;
}(_react2.default.Component);

exports.default = GrotTable;