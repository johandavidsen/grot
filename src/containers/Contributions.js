import React from 'react'
import axios from 'axios'
import LineChart from './ContributionsChart'
class Contributions extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      successfull: false,
      error: false,
      stats: null,
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
        [
          { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
          { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 }, { x: 7, y: 10 },
          { x: 8, y: 0 }, { x: 9, y: 10 }, { x: 10, y: 0 }
        ],
        [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 8, y: 0 },
          { x: 10, y: 0 }
        ],
        [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 2 },
          { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 }, { x: 10, y: 25 }
        ]
      ],
      yMin: 0,
      yMax: 30
    }

    return (
      <div>
        <LineChart
          data={data}
          width={document.documentElement.clientWidth}
          />
      </div>
    )
  }
}

export default Contributions
