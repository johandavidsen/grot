import React from 'react'

import './_login.scss'

/**
 * @class Login
 *
 * @since 0.1.16
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class Login extends React.Component {

  /**
   *
   */
  render () {
    return (
      <form>
        <div>
          <div>
            <label>Username</label>
            <input type='text' placeholder='Username' />
          </div>
        </div>
        <div>
          <label>Password</label>
          <input type='password' placeholder='Password' />
        </div>
        <div>
          <button type='submit'></button>
          <button type='button'></button>
        </div>
      </form>
    )
  }
}
