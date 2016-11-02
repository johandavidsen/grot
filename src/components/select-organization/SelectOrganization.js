import React from 'react'

import './_selectOrganization.scss'

/**
 * @class SelectOrganization
 *
 * This is a fairly simple dropdown selector.
 *
 */
class SelectOrganization extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the methods to the class.
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      toggle: false,
      selected: props.strings['initial']
    }

    this._toggle = this._toggle.bind(this)
    this._onSelect = this._onSelect.bind(this)
  }

  /**
   * @method _toggle
   *
   * This method toggles the local state variable toggle.
   *
   */
  _toggle () {
    this.setState({ toggle: !this.state.toggle })
  }

  /**
   * @method _onSelect
   *
   * This method calls the onSelect function, if defined and toggles
   * the local state.
   *
   */
  _onSelect (element) {
    const { onSelect, options } = this.props
    if (onSelect) {
      onSelect(parseInt(element.currentTarget.id, 10))
    } else {
      console.log('onSelect is not defined')
    }
    let selected = options.filter((obj) => { if (obj.id === parseInt(element.currentTarget.id, 10)) return obj })[0]
    this.setState({ selected: selected.name })
    this._toggle()
  }

  /**
   * @method render
   *
   */
  render () {
    let { options } = this.props
    let { selected } = this.state

    return (
      <div className='select-organization'>
        <div className='select-organization-component-box' onClick={this._toggle}>
          <div className='select-organization-component-box-avatar'>
            <div className='avatar'>
              &nbsp;
            </div>
          </div>
          <div className='select-organization-component-box-info'>
            <div className='info'>
              <div className='company-name'>
                {selected}
              </div>
            </div>
          </div>
          {/* <div className='select-organization-component-box-arrow'>
            <div className='arrow'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 16' >
                <path d='M22.422,1.932l-9.444,9.644L3.534,1.93a1.134,1.134,0,0,0-1.629,0,1.2,1.2,0,0,0,0,1.664L12.163,14.071h0a1.133,1.133,0,0,0,1.628,0L24.049,3.595a1.2,1.2,0,0,0,0-1.665A1.134,1.134,0,0,0,22.422,1.932Z' />
              </svg>
            </div>
          </div> */}
        </div>
        <div className='select-organization-component-drop'>
          {this.state.toggle
          ? <div className='select-organization-component-drop-options'>
            <div className='companies'>
              {options.map((option) => (
                <div id={option.id} key={option.id} className='company' onClick={this._onSelect} >
                  <div className='company-icon-ct'>
                    <div className='company-icon'>
                      {option.name.substring(0, 1)}
                    </div>
                  </div>
                  <div className='info-ct'>
                    <div className='info'>
                      <div className='name'>
                        {option.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          : <div className='select-organization-component-drop-options-empty'>&nbsp;</div>
          }
        </div>
      </div>
    )
  }
}

/**
 * Specify the property types.
 */
SelectOrganization.propTypes = {
  options: React.PropTypes.array,
  onSelect: React.PropTypes.func,
  strings: React.PropTypes.object
}

/**
 * Specify the default properties.
 */
SelectOrganization.defaultProps = {
  options: [
    { id: '0', name: 'There are no options provided' }
  ],
  onSelect: (id) => { console.log(id) },
  // This variable can be populated by a translation middeware.
  strings: {
    initial: 'Please select an organization'
  }
}

/**
 * @exports SelectOrganization
 */
export default SelectOrganization
