import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import moment from 'moment'
import { LineChart } from 'react-d3-components'

import './Contributions.scss'

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
class ContributionsChart extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the local methods to
   * this class.
   *
   * @prop { object } props -
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      data: {
        label: '',
        values: [
          { x: new Date(2014, 2, 5), y: 0},
          { x: new Date(2014, 3, 5), y: 20},
          { x: new Date(2014, 4, 5), y: 10},
          { x: new Date(2014, 5, 5), y: 50},
          { x: new Date(2014, 6, 5), y: 40},
          { x: new Date(2014, 7, 5), y: 10},
          { x: new Date(2014, 8, 5), y: 10},
          { x: new Date(2014, 9, 5), y: 10},
          { x: new Date(2015, 4, 5), y: 10},
          { x: new Date(2015, 5, 5), y: 50},
          { x: new Date(2015, 6, 5), y: 40},
          { x: new Date(2015, 7, 5), y: 10},
          { x: new Date(2015, 8, 5), y: 10},
          { x: new Date(2015, 9, 5), y: 20},
          { x: new Date(2016, 9, 5), y: 50},
          { x: new Date(2017, 9, 5), y: 40},
          { x: new Date(2018, 9, 5), y: 20},
          { x: new Date(2019, 9, 5), y: 30},
          { x: new Date(2020, 9, 5), y: 40}
        ]
      },
      xScale: null,
      width: 0
    }
    this._handleResize = this._handleResize.bind(this)
  }

  /**
   * @method componentDidMount
   *
   * This method binds the local method _handleResize to the window event resize.
   *
   */
  componentDidMount () {
    window.addEventListener('resize', this._handleResize)
  }

  /**
   * @method componentWillReceiveProps
   *
   * This method is called as soon as the component receives a new prop and updates
   * the local state accordingly.
   *
   */
  componentWillReceiveProps(nextProps) {
    const { data } = this.state
    if (nextProps.data && nextProps.data.size > 0) {
      let newValues = []
      nextProps.data.forEach((value, key) => {
        newValues.push({ x: new Date(key), y: value })
      })
      this.setState({ data: { ...data, values: newValues } })
      this._handleResize(newValues)
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
  _handleResize (values) {
    const { data } = this.state
    const element = ReactDOM.findDOMNode(this)
    if (element) {
      const width = element.parentNode.offsetWidth
      if (values.type === 'resize') {
        this.setState({
          width: width,
          xScale: d3.scaleTime().domain([moment(data.values[0].x), new Date()]).range([0, width])
        })
      } else {
        this.setState({
          width: width,
          xScale: d3.scaleTime().domain([moment(values[0].x), new Date()]).range([0, width])
        })
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
  render () {
    let { data, width, xScale } = this.state
    console.log(data)
    return (
      <div id='contributions'>
        <LineChart
          data={data}
          width={width}
          height={50}
          margin={{ top: 20, bottom: 0, left: 0, right: 0 }}
          xScale={xScale}
          interpolate='basis'
          />
      </div>
    )
  }
}

/**
 * @exports ContributionsChart
 *
 * The default export is the ContributionsChart class, written by Jóhan Davidsen
 * <johan.davidsen@fjakkarin.com>
 *
 */
export default ContributionsChart
