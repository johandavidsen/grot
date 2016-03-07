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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class GrotKanbanCard
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */

var GrotKanbanCard = function (_React$Component) {
    _inherits(GrotKanbanCard, _React$Component);

    /**
     * @param {String} id -
     * @param {String} title -
     * @param {String} type -
     * @param {Date} date -
     * @param {Object} assignedTo -
     */

    function GrotKanbanCard(props) {
        _classCallCheck(this, GrotKanbanCard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotKanbanCard).call(this, props));
    }

    /**
     *
     */

    _createClass(GrotKanbanCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: this.props.id + " " + this.props.title },
                this.props.type + " " + this.props.date + " " + this.props.assignedTo
            );
        }
    }]);

    return GrotKanbanCard;
}(_react2.default.Component);

/**
 *
 */

GrotKanbanCard.propTypes = {
    id: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.string
};

/**
 *
 */
GrotKanbanCard.defaultProps = {
    id: "#0",
    title: "Name of TODO.",
    type: "Task",
    date: "Now",
    assignedTo: "me"
};

/**
 * @class GrotKanbanTable
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */

var GrotKanbanBoard = function (_React$Component2) {
    _inherits(GrotKanbanBoard, _React$Component2);

    /**
     * @param {String} title -
     */

    function GrotKanbanBoard(props) {
        _classCallCheck(this, GrotKanbanBoard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GrotKanbanBoard).call(this, props));
    }

    /**
     *
     */

    _createClass(GrotKanbanBoard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'grot-kanban-table' },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { lg: 10 },
                        _react2.default.createElement(
                            'h2',
                            { className: 'header' },
                            this.props.title + " ",
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { className: 'header_edit' },
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'edit' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { lg: 2, className: 'right' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                null,
                                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'asterisk' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _GrotPanel2.default,
                    { title: 'test' },
                    _react2.default.createElement(GrotKanbanCard, null),
                    _react2.default.createElement(GrotKanbanCard, null),
                    _react2.default.createElement(GrotKanbanCard, null)
                )
            );
        }
    }]);

    return GrotKanbanBoard;
}(_react2.default.Component);

/**
 *
 */

exports.default = GrotKanbanBoard;
GrotKanbanBoard.propTypes = {
    title: _react2.default.PropTypes.string
};

/**
 *
 */
GrotKanbanBoard.defaultProps = {
    title: "Kanban Table"
};