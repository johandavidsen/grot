'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactD3Components = require('react-d3-components');

require('./Contributions.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class ContributionsChart
 *
 * This is the layout class. This class gives a data structure to the LineChart
 * component. This class also takes case of any resize function calls.
 *
 * @since v0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
var ContributionsChart = function (_React$Component) {
  _inherits(ContributionsChart, _React$Component);

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the local methods to
   * this class.
   *
   * @prop { object } props -
   *
   */
  function ContributionsChart(props) {
    _classCallCheck(this, ContributionsChart);

    var _this = _possibleConstructorReturn(this, (ContributionsChart.__proto__ || Object.getPrototypeOf(ContributionsChart)).call(this, props));

    _this.state = {
      data: {
        label: '',
        values: [{ x: new Date(2014, 2, 5), y: 0 }, { x: new Date(2014, 3, 5), y: 20 }, { x: new Date(2014, 4, 5), y: 10 }, { x: new Date(2014, 5, 5), y: 50 }, { x: new Date(2014, 6, 5), y: 40 }, { x: new Date(2014, 7, 5), y: 10 }, { x: new Date(2014, 8, 5), y: 10 }, { x: new Date(2014, 9, 5), y: 10 }, { x: new Date(2015, 4, 5), y: 10 }, { x: new Date(2015, 5, 5), y: 50 }, { x: new Date(2015, 6, 5), y: 40 }, { x: new Date(2015, 7, 5), y: 10 }, { x: new Date(2015, 8, 5), y: 10 }, { x: new Date(2015, 9, 5), y: 20 }, { x: new Date(2016, 9, 5), y: 50 }, { x: new Date(2017, 9, 5), y: 40 }, { x: new Date(2018, 9, 5), y: 20 }, { x: new Date(2019, 9, 5), y: 30 }, { x: new Date(2020, 9, 5), y: 40 }]
      },
      xScale: null,
      width: 0
    };
    _this._handleResize = _this._handleResize.bind(_this);
    return _this;
  }

  /**
   * @method componentDidMount
   *
   * This method binds the local method _handleResize to the window event resize.
   *
   */


  _createClass(ContributionsChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._handleResize);
    }

    /**
     * @method componentWillReceiveProps
     *
     * This method is called as soon as the component receives a new prop and updates
     * the local state accordingly.
     *
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var data = this.state.data;

      if (nextProps.data && nextProps.data.size > 0) {
        var newValues = [];
        nextProps.data.forEach(function (value, key) {
          newValues.push({ x: new Date(key), y: value });
        });
        this.setState({ data: _extends({}, data, { values: newValues }) });
        this._handleResize(newValues);
      }
    }

    /**
     * @method _handleResize
     *
     * This method is called on window resize event and it adjusts the width of the
     * graph according to the witdh of the screen.
     *
     * @prop { object or array } values -
     *
     */

  }, {
    key: '_handleResize',
    value: function _handleResize(values) {
      var data = this.state.data;

      var element = _reactDom2.default.findDOMNode(this);
      if (element) {
        var width = element.parentNode.offsetWidth;
        if (values.type === 'resize') {
          this.setState({
            width: width,
            xScale: d3.scaleTime().domain([(0, _moment2.default)(data.values[0].x), new Date()]).range([0, width])
          });
        } else {
          this.setState({
            width: width,
            xScale: d3.scaleTime().domain([(0, _moment2.default)(values[0].x), new Date()]).range([0, width])
          });
        }
      }
    }

    /**
     * @method render
     *
     * The render method returns a JSX structure, that React will use to render
     * this component.
     *
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          data = _state.data,
          width = _state.width,
          xScale = _state.xScale;

      console.log(data);
      return _react2.default.createElement(
        'div',
        { id: 'contributions' },
        _react2.default.createElement(_reactD3Components.LineChart, {
          data: data,
          width: width,
          height: 50,
          margin: { top: 20, bottom: 0, left: 0, right: 0 },
          xScale: xScale,
          interpolate: 'basis'
        })
      );
    }
  }]);

  return ContributionsChart;
}(_react2.default.Component);

/**
 * @exports ContributionsChart
 *
 * The default export is the ContributionsChart class, written by Jóhan Davidsen
 * <johan.davidsen@fjakkarin.com>
 *
 */


exports.default = ContributionsChart;
module.exports = exports['default'];
//# sourceMappingURL=ContributionsChart.js.map