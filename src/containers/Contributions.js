import React from 'react'
import axios from 'axios'
import * as d3 from 'd3'
import { category10, ordinal, domain, rangePoints, linear, range } from 'd3-scale'

// http://blog.bigbinary.com/2016/02/04/using-d3-js-with-react-js.html

class Line extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      stroke: 'blue',
      fill: 'none',
      strokeWidth: 3
    }
  }

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

class DataSeries extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      interpolationType: 'cardinal',
      colors: d3.schemeCategory10
    }
  }

  render() {
    let { data, xScale, yScale, interpolationType } = this.props
    const { colors } = this.state

    let line = d3.line()
      // .curve(interpolationType)
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

class LineChart extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      width:  600,
      height: 300
    }
  }

  render() {
    let { width, height, data } = this.props

    let xScale = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(data.xValues)
      .range([0, width]);

    let yScale = d3.scaleLinear()
      .range([height, 10])
      .domain([data.yMin, data.yMax])

    return (
      <svg width={width} height={height}>
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

class Contributions extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      successfull: false,
      error: false,
      stats: null
    }
  }

  componentDidMount () {

    this.setState({ loading: true })
     axios.get('https://api.github.com/users/johandavidsen/events')
      .then((response) => {
        const { data, headers } = response
        // Filter data by type === 'PushEvent'
        const contributions = data.filter((entry) => { if (entry.type ==='PushEvent') { return entry } })
        // Initialize the resultant data structure
        let results = new Map()
        // Build data structure based on data
        contributions.map((contribution) => {
          // Build date object
          let date = new Date(contribution.created_at)
          // Build the key
          let key = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
          if (results.has(key)) {
            // If the key exists add a new entry.
            // First get the current value
            let count = results.get(key)
            // Set the new value
            results.set(key, count + 1)
          } else {
            // If the key dosen't exist at key and new entry.
            results.set(key, 1)
          }
        })
        this.setState({ loading: false, successfull: true, stats: results })
      })
      .catch(() => {
        this.setState({ loading: false, error: true})
      })
  }

  render () {
    const { loading, successfull, error, stats } = this.state
    let data = {
      points: [
        [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
          { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 }
        ],
        [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 },
          { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 }
        ],
        [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 },
          { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 }
        ]
      ],
      xValues: [0,1,2,3,4,5,6],
      yMin: 0,
      yMax: 30
    }
    return (
      <div>
        <LineChart
          data={data}
          width={600}
          height={300}
        />
      </div>
    )
  }
}

export default Contributions
