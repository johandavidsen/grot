import React from 'react'
/** import './Checkbox.scss' */

/**
 * @class Checkbox
 *
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class Checkbox extends React.Component {

  render () {
    return (
      <label className='grot-checkbox'>
      	<input type='checkbox' />
      	<div className='control__indicator' />
      </label>
    )
  }
}

export default Checkbox
