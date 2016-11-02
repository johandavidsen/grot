import React from 'react'

import '../../stylesheets/components/_credits.scss'

/**
 * @class Credits
 *
 * Credits is along, the same lines as the Hello component. All it dose
 * is to display a HTML string.
 *
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
   return (
     <div>
       <p>
       This module was made by <a href={this.props.authorUrl}>{this.props.author}</a>,<br />
       source code can be found on <a href={this.props.gitUrl}>{this.props.git}</a><br />
       and the module is available on <a href={this.props.distUrl}>{this.props.dist}</a>.
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
Credits.PropTypes = {
  author: React.PropTypes.string.isRequired,
  authorUrl: React.PropTypes.string.isRequired,
  git: React.PropTypes.string.isRequired,
  gitUrl: React.PropTypes.string.isRequired,
  dist: React.PropTypes.string.isRequired,
  distUrl: React.PropTypes.string.isRequired
}

/**
 * @prop defaultProps
 *
 * These are the default values of the properties for this component.
 */
Credits.defaultProps = {
  author: 'Jóhan Davidsen',
  authorUrl: 'http://fjakkarin.com',
  git: 'GitHub',
  gitUrl: '',
  dist: 'NPM',
  distUrl: 'npmjs'
}

/**
 * The exported object
 */
export default Credits
