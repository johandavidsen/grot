import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { LineChart } from 'react-d3-components'

import './Contributions.scss'

/**
 * @class ContributionsChart
 *
 *
 */
class ContributionsChart extends React.Component {

  /**
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
   *
   */
  componentDidMount () {
    window.addEventListener('resize', this._handleResize)
  }

  /**
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
      this._handleResize()
    }
  }

  /**
   *
   */
  _handleResize () {
    const element = ReactDOM.findDOMNode(this)
    const width = element.parentNode.offsetWidth

    this.setState({
      width: width,
      xScale: d3.scaleTime().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, width % 2])
    })
  }

  /**
   *
   */
  render () {
    let { data, width, xScale } = this.state
    // console.log(data)
    return (
      <div id='contributions'>
        <LineChart
          data={data}
          width={width}
          height={50}
          margin={{top: 20, bottom: 0, left: 0, right: 0}}
          xScale={xScale}
          interpolate='basis'
          />
      </div>
    )
  }
}

/**
 * @exports ContributionsChart
 */
export default ContributionsChart
