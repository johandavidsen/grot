import React from 'react'
import './OptionMenu.scss'

/**
 * @class OptionMenu
 *
 * This class is a example options-menu class. This is not intended to be a production
 * grade component, rather an example to illustrate how such a menu can be implemented.
 * The emphsis of this component is that it is very easy and logical to navigate throught
 * it, by using the keyboard and standard tab button navigation.
 *
 * @since 0.3.0-1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class OptionMenu extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the local methods to
   * the component.
   *
   * @prop { object } props - See https://facebook.github.io/react/docs/react-component.html#constructor
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleOnBlur = this._onBlur.bind(this)
    this.handleToggle = this._toggle.bind(this)
    this.handleFirstButtonKeyDown = this._firstButtonKeyDown.bind(this)
    this.handleLastButtonKeyDown = this._lastButtonKeyDown.bind(this)
  }

  /**
   * @method _onBlur
   *
   * This method is called on the component onBlur and depending on the relatedTarget
   * sets the local state variable open to false.
   *
   * @prop { object } e - See https://facebook.github.io/react/docs/events.html#keyboard-events
   *
   */
  _onBlur (e) {
    if (e.relatedTarget === null) {
      this.setState({ open: false })
    }
  }

  /**
   * @method _toggle
   *
   * This method toggles the local state variable open.
   *
   */
  _toggle () {
    const { open } = this.state
    this.setState({ open: !open })
  }

  /**
   * @method _firstButtonKeyDown
   *
   * This method sets the local state variable open to false, depending on which
   * which keys are used.
   *
   * @prop { object } e - See https://facebook.github.io/react/docs/events.html#keyboard-events
   *
   */
  _firstButtonKeyDown (e) {
    let key = e.keyCode
    let shift = e.shiftKey

    if (shift && key === 9) {
      this.setState({ open: false })
    }
  }

  /**
   * @method _lastButtonKeyDown
   *
   * This method sets the local state variable open to false, depending on which
   * which keys are used.
   *
   * @prop { object } e - See https://facebook.github.io/react/docs/events.html#keyboard-events
   *
   */
  _lastButtonKeyDown (e) {
    let key = e.keyCode
    let shift = e.shiftKey

    if (!shift && key === 9) {
      this.setState({ open: false })
    }
  }

  /**
   * @method render
   *
   * The render method returns the object, which will be rendered by React.
   *
   */
  render () {
    const { open } = this.state
    return (
      <div className='grot-option-menu' onClick={this.handleToggle} onBlur={this.handleOnBlur}>
        <button className='option-toggle' onClick={this.handleToggle} onKeyDown={this.handleFirstButtonKeyDown} />
        {open && <ul className='option-menu-content'>
          <li className='option-menu-item'><div className='bullit' /><button>Look, mom</button></li>
          <li className='option-menu-item'><div className='bullit' /><button>A options menu</button></li>
          <li className='option-menu-item'><div className='bullit' /><button onKeyDown={this.handleLastButtonKeyDown}>Pretty nice, right?</button></li>
        </ul>
        }
      </div>
    )
  }
}
