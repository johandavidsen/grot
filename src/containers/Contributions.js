import React from 'react'
import axios from 'axios'
import moment from 'moment'
import twix from 'twix'
import LineChart from './ContributionsChart'

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
class Contributions extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state with the default properties.
   */
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      successfull: false,
      error: false,
      lookup: true,
      stats: new Map(),
      currentPage: 1,
      lastPage: 11
    }

    this._getCommits = this._getCommits.bind(this)
  }

  /**
   * @method componentDidMount
   *
   * This method dose all the heavy lifting, as it calls the github API and
   * transforms the data to a data structure that can be used to build a graph.
   *
   */
  componentDidMount () {
    this._getCommits()
  }

  /**
   * @method _getCommits
   *
   * This method is a recursive method, which calls upon it self until all the
   * events have been traversed.
   *
   */
  _getCommits () {
    const { currentPage, lastPage, lookup, stats } = this.state
    // Need to fix time line
    if (currentPage <= lastPage && lookup) {
      this.setState({ loading: true })
      axios.get('https://api.github.com/users/johandavidsen/events?per_page=300&page=' + currentPage )
        .then((response) => {
          const { data, headers } = response
          const { link } = headers
          // Get links
          if (link) {
            let nextPage = link.split(',')[0].split(';')[0][link.split(',')[0].split(';')[0].length - 2]
          }
          // Filter data by type === 'PushEvent'
          // const contributions = data.filter((entry) => { if (entry.type ==='PushEvent') { return entry } })
          const contributions = data.filter((entry) => { return entry })
          // Initialize the resultant data structure
          // let results = new Map()
          // //
          var oneDay = 24*60*60*1000;
          // // Get currentDate
          const currentDate = new Date()
          // // Set 3 months back
          let oldDate = new Date()
          oldDate.setMonth(oldDate.getMonth() - 3)
          // // Populate the results
          var itr = moment.twix(oldDate, currentDate).iterate('days')

          while(itr.hasNext()){
            let tempDate = itr.next().toDate()
            let tempKey = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
            stats.set(tempKey, 0)
          }

          contributions.map((contribution) => {
            // Build date object
            let date = new Date(contribution.created_at)
            // // Build the key
            let key = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            if (stats.has(key)) {
              // If the key exists add a new entry.
              // First get the current value
              let count = stats.get(key)
              // Set the new value
              stats.set(key, count + 1)
            } else {
              // If the key dosen't exist at key and new entry.
              stats.set(key, 1)
            }
          })

          if ( currentPage === lastPage) {
            this.setState({ loading: false, successfull: true, lookup: false, stats: stats })
            this._getCommits()
          } else {
            let lastPage = link.split(',')[1].split(';')[0][link.split(',')[1].split(';')[0].length - 2]
            this.setState({ currentPage: nextPage, lastPage: lastPage, stats: stats })
            this._getCommits()
          }
          })
        .catch((response) => {
          this.setState({ loading: false, error: true})
        })
    } else { }
  }

  /**
   * @method render
   *
   * The render method returns a JSX structure, that React will use to render
   * this component.
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
 *
 * The default export is the Contributions class, written by Jóhan Davidsen
 * <johan.davidsen@fjakkarin.com>
 *
 */
export default Contributions
