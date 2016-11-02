import React from 'react'
import { Link } from 'react-router'
import './SelectUser.scss'

/**
 * @class SelectUser
 *
 * This component displays the current user and the organization, that the user
 * has selected. In addition to this, the component gives the user the option of
 * selecting a different organization.
 *
 */
class SelectUser extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the methods to the class.
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      toggle: false
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
   * This method calls the onChangeMembership function, if defined and toggles
   * the local state.
   *
   */
  _onSelect (id) {
    const { onChangeMembership } = this.props
    if (onChangeMembership) {
      onChangeMembership(parseInt(id, 10))
    } else {
      console.log('onChangeMembership is not defined')
    }
    this._toggle()
  }

  /**
   * @method render
   *
   * This method retuns the object to render for this compnent.
   *
   */
  render () {
    const { currentUser, currentOrganization, organizationOptions, vouchersText, signOutText, userRoute, userSignOut } = this.props
    return (
      <div className='select-user-component'>
        <div className='select-user-component-box'
          onClick={this._toggle}
          >
            <div className='select-user-component-box-avatar'>
              <div className='avatar'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 34' >
                  <path d='M17.005,20.1a29.665,29.665,0,0,1-.064-3.006,5.9,5.9,0,0,0,1.605-3.49c0.408-.034,1.051-0.433,1.239-2.012a1.477,1.477,0,0,0-.548-1.474C19.9,8.107,21.28,1.9,16.688,1.262c-0.472-.834-1.682-1.256-3.255-1.256-6.291.116-7.05,4.774-5.671,10.107a1.48,1.48,0,0,0-.548,1.474c0.189,1.579.831,1.978,1.239,2.012a5.881,5.881,0,0,0,1.643,3.49,29.644,29.644,0,0,1-.065,3.006C8.787,23.458.388,22.514,0,29c0,0,6.967,5,13.823,5C20.464,34,27,29,27,29,26.613,22.514,18.25,23.458,17.005,20.1Z' />
                </svg>
              </div>
            </div>
          <div className='select-user-component-box-info'>
            <div className='info'>
              <div className='user-name'>
                {currentUser}
              </div>
              <div className='company-name'>
                {currentOrganization}
              </div>
            </div>
          </div>
          <div className='select-user-component-box-arrow'>
            <div className='arrow'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 16' >
                <path d='M22.422,1.932l-9.444,9.644L3.534,1.93a1.134,1.134,0,0,0-1.629,0,1.2,1.2,0,0,0,0,1.664L12.163,14.071h0a1.133,1.133,0,0,0,1.628,0L24.049,3.595a1.2,1.2,0,0,0,0-1.665A1.134,1.134,0,0,0,22.422,1.932Z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='app-top-user-modal-ct'>
          {this.state.toggle
          ? (
            <div className='app-top-user-modal'>
              <div className='profile'>
                <div className='avatar-ct'>
                  <div className='avatar'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 34' >
                      <path d='M17.005,20.1a29.665,29.665,0,0,1-.064-3.006,5.9,5.9,0,0,0,1.605-3.49c0.408-.034,1.051-0.433,1.239-2.012a1.477,1.477,0,0,0-.548-1.474C19.9,8.107,21.28,1.9,16.688,1.262c-0.472-.834-1.682-1.256-3.255-1.256-6.291.116-7.05,4.774-5.671,10.107a1.48,1.48,0,0,0-.548,1.474c0.189,1.579.831,1.978,1.239,2.012a5.881,5.881,0,0,0,1.643,3.49,29.644,29.644,0,0,1-.065,3.006C8.787,23.458.388,22.514,0,29c0,0,6.967,5,13.823,5C20.464,34,27,29,27,29,26.613,22.514,18.25,23.458,17.005,20.1Z' />
                    </svg>
                  </div>
                </div>
                <div className='info-ct'>
                  <div className='info'>
                    <div className='name'>
                     {currentUser}
                    </div>
                    <div className='links'>
                      <Link to={userRoute}>{currentUser}</Link> - <Link to={userSignOut}>{signOutText}</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='companies-ct'>
                {organizationOptions.map((membership, index) =>
                  <div key={index} className='company-ct' onClick={this._onSelect} >
                    <div className='company-icon-ct'>
                      <div className='company-icon'>
                        {membership.organization_name.substring(0, 1)}
                      </div>
                    </div>
                    <div className='info-ct'>
                      <div className='info'>
                        <div className='name'>
                          {membership.organization_name}
                        </div>
                        <div className='vouchers'>
                          {membership.vouchers} {vouchersText}
                        </div>
                      </div>
                    </div>
                    <div className='arrow-ct'>
                      <div className='arrow'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 14' >
                          <path d='M0.2,1.2L6.219,6.993,0.2,12.784a0.688,0.688,0,0,0,0,1,0.755,0.755,0,0,0,1.038,0L7.775,7.492h0a0.687,0.687,0,0,0,0-1L1.241,0.2A0.756,0.756,0,0,0,.2.2,0.687,0.687,0,0,0,.2,1.2Z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>)
            : (<div />)
          }
        </div>
      </div>
    )
  }
}

/**
 * Define the propTypes for this component.
 */
SelectUser.propTypes = {
  currentUser: React.PropTypes.string.isRequired,
  currentOrganization: React.PropTypes.string.isRequired,
  organizationOptions: React.PropTypes.array,
  onChangeMembership: React.PropTypes.func,
  vouchersText: React.PropTypes.string.isRequired,
  signOutText: React.PropTypes.string.isRequired,
  userRoute: React.PropTypes.string,
  userSignOut: React.PropTypes.string
}

/**
 * Populate the default required props for the component.
 */
SelectUser.defaultProps = {
  currentUser: 'Jóhan',
  currentOrganization: 'Fjakkarin.com',
  organizationOptions: [
    { organization_name: 'Hello Company', vouchers: 10 },
    { organization_name: 'The Amazing company', vouchers: 113 },
    { organization_name: 'Fjakkarin.com', vouchers: 4 }
  ],
  vouchersText: 'new vouchers',
  signOutText: 'Sign out'
}

/**
 * @exports SelectUser
 *
 * This file exports the component SelectUser by default.
 *
 */
export default SelectUser
