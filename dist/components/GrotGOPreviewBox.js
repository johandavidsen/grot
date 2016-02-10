'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gojs = require('gojs');

var _gojs2 = _interopRequireDefault(_gojs);

var _gojs3 = require('../gojs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * GrotGOSPreviewBox
 *
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */

var GrotGOPreviewBox = function (_React$Component) {
    _inherits(GrotGOPreviewBox, _React$Component);

    /**
     *
     * @param {String} id -
     * @param {Object} model -
     * @param {function} callback -
     */

    function GrotGOPreviewBox(props) {
        _classCallCheck(this, GrotGOPreviewBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GrotGOPreviewBox).call(this, props));

        _this._renderGOJS = _this._renderGOJS.bind(_this);
        return _this;
    }

    /**
     *
     */

    _createClass(GrotGOPreviewBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._renderGOJS();
        }

        /**
         * Returns a HTML string.
         * @return {React Object}
         */

    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', { id: this.props.id, className: 'grot-preview-go' });
        }

        /**
         *
         */

    }, {
        key: '_renderGOJS',
        value: function _renderGOJS() {
            var _this2 = this;

            var self = this;
            var GO = _gojs2.default.GraphObject.make;
            var Div = GO(_gojs2.default.Diagram, this.props.id, {
                initialContentAlignment: _gojs2.default.Spot.Center,
                allowZoom: false,
                allowSelect: true,
                allowHorizontalScroll: false,
                allowVerticalScroll: false
            });

            var temp = new _gojs2.default.Map("string", _gojs2.default.Node);
            temp.add("ObjectWithProps", (0, _gojs3.ObjectWithProps)());
            temp.add("SimpleBox", (0, _gojs3.SimpleBox)());

            Div.nodeTemplateMap = temp;
            Div.model = new _gojs2.default.GraphLinksModel(this.props.model);
            Div.model.addChangedListener(function (changedEvent) {
                _this2.props.callback(Div.model.nf);
            });
        }
    }]);

    return GrotGOPreviewBox;
}(_react2.default.Component);

exports.default = GrotGOPreviewBox;