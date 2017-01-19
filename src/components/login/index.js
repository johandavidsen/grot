import React from 'react'

import './Login.scss'

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
      <form className='grot-login-example'>
        <div>
          <Input
            type='email'
            label='Email'
            />
        </div>
        <div>
          <Input
            type='password'
            label='Password'
            />
        </div>
        {/* <div>
          <button type='submit'></button>
          <button type='button'></button>
        </div>  */}
      </form>
    )
  }
}

class Input extends React.Component {
  render () {
    const { type, label } = this.props
    return (
      <div className='grot-input'>
        <input type={type} required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{label}</label>
      </div>
    )
  }
}
