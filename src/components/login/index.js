import React from 'react'
/** import './Login.scss' */

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
        <div className='grot-button-holder'>
          <Button
            type='button'
            label='Clear'
            />
          <Button
            type='submit'
            label='Submit'
            />
        </div>
      </form>
    )
  }
}

/**
 * @class Input
 *
 * This is a simple pure React Component.
 *
 * @since 0.3.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class Input extends React.Component {

  /**
   * @method render
   */
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

/**
 * @class Button
 *
 * This is a simple pure React Component.
 *
 * @since 0.3.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class Button extends React.Component {

  /**
   * @method render
   */
  render () {
    const { type, label } = this.props
    return (
      <button type={type} className='grot-button'>{label}</button>
    )
  }
}
