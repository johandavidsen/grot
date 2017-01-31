import React from 'react'
import axios from 'axios'
import moment from 'moment'
import twix from 'twix'
import LineChart from './ContributionsChart'

/**
 * @class Contributions
 *
 *
 */
class Contributions extends React.Component {

  /**
   * @constructor
   */
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      successfull: false,
      error: false,
      stats: null,
    }
  }

  /**
   * @method componentDidMount
   *
   */
  componentDidMount () {
    this.setState({ loading: true })
    axios.get('https://api.github.com/users/johandavidsen/events')
      .then((response) => {
        const { data, headers } = response
        // Filter data by type === 'PushEvent'
        const contributions = data.filter((entry) => { if (entry.type ==='PushEvent') { return entry } })
        // Initialize the resultant data structure
        let results = new Map()
        //
        var oneDay = 24*60*60*1000;
        // Get currentDate
        const currentDate = new Date()
        // Set 3 months back
        let oldDate = new Date()
        oldDate.setMonth(oldDate.getMonth() - 3)
        // Populate the results
        var itr = moment.twix(oldDate, currentDate).iterate('days')
        while(itr.hasNext()){
          let tempDate = itr.next().toDate()
          let tempKey = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
          results.set(tempKey, 1)
        }
        // 1Build data structure based on data
        contributions.map((contribution) => {
          // console.log(contribution)
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

  /**
   * @method render
   *
   */
  render () {
    const { loading, successfull, error, stats } = this.state
    return (
      <div>
        <LineChart
          data={stats}
          />
      </div>
    )
  }
}

/**
 * @exports Contributions
 */
export default Contributions
