'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _twix = require('twix');

var _twix2 = _interopRequireDefault(_twix);

var _ContributionsChart = require('./ContributionsChart');

var _ContributionsChart2 = _interopRequireDefault(_ContributionsChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Contributions
 *
 * This is the data layer component for the package Contributions. The aim of this
 * component is to load the required data based on the properties given to the
 * component. This data is then manipulated and passed to the ContributionsChart.
 *
 * @since v0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
var Contributions = function (_React$Component) {
  _inherits(Contributions, _React$Component);

  /**
   * @constructor
   *
   * The constructor initializes the local state with the default properties.
   */
  function Contributions(props) {
    _classCallCheck(this, Contributions);

    var _this = _possibleConstructorReturn(this, (Contributions.__proto__ || Object.getPrototypeOf(Contributions)).call(this, props));

    _this.state = {
      loading: false,
      successfull: false,
      error: false,
      lookup: true,
      stats: new Map(),
      currentPage: 1,
      lastPage: 11
    };

    _this._getCommits = _this._getCommits.bind(_this);
    return _this;
  }

  /**
   * @method componentDidMount
   *
   * This method dose all the heavy lifting, as it calls the github API and
   * transforms the data to a data structure that can be used to build a graph.
   *
   */


  _createClass(Contributions, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._getCommits();
    }

    /**
     * @method _getCommits
     *
     * This method is a recursive method, which calls upon it self until all the
     * events have been traversed.
     *
     */

  }, {
    key: '_getCommits',
    value: function _getCommits() {
      var _this2 = this;

      var _state = this.state,
          currentPage = _state.currentPage,
          lastPage = _state.lastPage,
          lookup = _state.lookup,
          stats = _state.stats;
      // Need to fix time line

      if (currentPage <= lastPage && lookup) {
        this.setState({ loading: true });
        _axios2.default.get('https://api.github.com/users/johandavidsen/events?per_page=300&page=' + currentPage).then(function (response) {
          var data = response.data,
              headers = response.headers;
          var link = headers.link;
          // Get links

          if (link) {
            var _nextPage = link.split(',')[0].split(';')[0][link.split(',')[0].split(';')[0].length - 2];
          }
          // Filter data by type === 'PushEvent'
          // const contributions = data.filter((entry) => { if (entry.type ==='PushEvent') { return entry } })
          var contributions = data.filter(function (entry) {
            return entry;
          });
          // Initialize the resultant data structure
          // let results = new Map()
          // //
          var oneDay = 24 * 60 * 60 * 1000;
          // // Get currentDate
          var currentDate = new Date();
          // // Set 3 months back
          var oldDate = new Date();
          oldDate.setMonth(oldDate.getMonth() - 3);
          // // Populate the results
          var itr = _moment2.default.twix(oldDate, currentDate).iterate('days');

          while (itr.hasNext()) {
            var tempDate = itr.next().toDate();
            var tempKey = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
            stats.set(tempKey, 0);
          }

          contributions.map(function (contribution) {
            // Build date object
            var date = new Date(contribution.created_at);
            // // Build the key
            var key = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            if (stats.has(key)) {
              // If the key exists add a new entry.
              // First get the current value
              var count = stats.get(key);
              // Set the new value
              stats.set(key, count + 1);
            } else {
              // If the key dosen't exist at key and new entry.
              stats.set(key, 1);
            }
          });

          if (currentPage === lastPage) {
            _this2.setState({ loading: false, successfull: true, lookup: false, stats: stats });
            _this2._getCommits();
          } else {
            var _lastPage = link.split(',')[1].split(';')[0][link.split(',')[1].split(';')[0].length - 2];
            _this2.setState({ currentPage: nextPage, lastPage: _lastPage, stats: stats });
            _this2._getCommits();
          }
        }).catch(function (response) {
          _this2.setState({ loading: false, error: true });
        });
      } else {}
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
      var _state2 = this.state,
          loading = _state2.loading,
          successfull = _state2.successfull,
          error = _state2.error,
          stats = _state2.stats;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ContributionsChart2.default, {
          data: stats
        })
      );
    }
  }]);

  return Contributions;
}(_react2.default.Component);

/**
 * @exports Contributions
 *
 * The default export is the Contributions class, written by Jóhan Davidsen
 * <johan.davidsen@fjakkarin.com>
 *
 */


exports.default = Contributions;
module.exports = exports['default'];
//# sourceMappingURL=Contributions.js.map