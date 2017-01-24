import React from 'react'
import * as d3 from 'd3'

/**
 * @class ContributionsChart
 *
 * This is a graphical component, which based on a specific data structure renders
 * a single or several lines across time. This and the other components in this
 * file are based on the tutorial on http://blog.bigbinary.com/2016/02/04/using-d3-js-with-react-js.html
 *
 * @since v0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class ContributionsChart extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state.
   *
   * @prop { object } props -
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      height: props.height || 300,
      width: props.width || 600
    }
  }

  /**
   * @method render
   *
   *
   */
  render() {
    const { data } = this.props
    const { height, width } = this.state

    // Init the x scale
    let xScale = d3.scaleLinear()
      .range([0, 100])

    // Init the y scale
    let yScale = d3.scaleLinear()
      .domain([data.yMin, data.yMax])
      .range([height, 30])

    return (
      <svg width={width} height={height} style={{ paddingBottom: '10px'}} >
        <DataSeries
          xScale={xScale}
          yScale={yScale}
          data={data}
          width={width}
          height={height}
          />
      </svg>
   )
  }
}

/**
 * @class DataSeries
 *
 * This component is used to build the different lines based on the data
 * structure.
 *
 * @since v0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class DataSeries extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state.
   *
   * @prop { object } props -
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      colors: d3.schemeCategory10
    }
  }

  /**
   * @method render
   *
   *
   */
  render() {
    let { data, xScale, yScale, } = this.props
    const { colors } = this.state

    let line = d3.line()
      .curve(d3.curveBasis)
      .x((d) => { return xScale(d.x) })
      .y((d) => { return yScale(d.y) })

    let lines = data.points.map((series, id) => {
      return (
        <Line
          path={line(series)}
          stroke={colors[id]}
          key={id}
          />
      )
    })

    return (
      <g>
        <g>{lines}</g>
      </g>
    )
  }
}

/**
 * @class Line
 *
 *
 *
 * @since v0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class Line extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state.
   *
   * @prop { object } props -
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      fill: 'none',
      strokeWidth: 3
    }
  }

  /**
   * @method render
   *
   *
   */
  render () {
    const { path, stroke, } = this.props
    const { fill, strokeWidth } = this.state
    return (
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        />
    )
  }
}

/**
 * @exports ContributionsChart
 */
export default ContributionsChart
