import React from 'react'
import './Credits.scss'

/**
 * @class Credits
 *
 * Credits is along, the same lines as the Hello component. All it dose
 * is to display a HTML string.
 *
 * @since 0.3.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class Credits extends React.Component {

  /**
   * @method render
   *
   * This function returns the JSX object.
   *
   */
  render () {
    const { authorUrl, gitUrl, distUrl, author, git, dist } = this.props
    return (
      <div className='grot-credits'>
        <p>
        This module was made by <a href={authorUrl}>{author}</a>,<br />
        source code can be found on <a href={gitUrl}>{git}</a><br />
        and the module is available on <a href={distUrl}>{dist}</a>.
        </p>
      </div>
    )
  }
}

/**
 * @prop PropTypes
 *
 * These are the properties, which are required by the component.
 */
// Credits.propTypes = {
//  author: React.PropTypes.string.isRequired,
//  authorUrl: React.PropTypes.string.isRequired,
//  git: React.PropTypes.string.isRequired,
//  gitUrl: React.PropTypes.string.isRequired,
//  dist: React.PropTypes.string.isRequired,
//  distUrl: React.PropTypes.string.isRequired
// }

/**
 * @prop defaultProps
 *
 * These are the default values of the properties for this component.
 */
// Credits.defaultProps = {
//  author: 'Jóhan Davidsen',
// authorUrl: 'http://fjakkarin.com',
//  git: 'GitHub',
//  gitUrl: '',
//  dist: 'NPM',
//  distUrl: 'npmjs'
// }

/**
 * The exported object
 */
export default Credits
