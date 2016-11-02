import React from 'react'
import classnames from 'classnames'

import Currencies from './Currencies'
import CurrenciesSuggestions from './CurrenciesSuggestions'

import './_currency.scss'

/**
 *
 */
const keyCodes = {
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40
}

/**
 *
 */
class Currency extends React.Component {

  /**
   *
   */
  constructor (props) {
    super(props)

    this.state = this.initialState = {
      active: false,
      showAlternatives: false,
      currency: props.currency,
      currencies: Currencies,
      highlightedItem: -1
    }

    this._setCurrencyInputCursor = this._setCurrencyInputCursor.bind(this)
    this._currencyFilterInput = this._currencyFilterInput.bind(this)
    this._filterCurrencies = this._filterCurrencies.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
    this._scroll = this._scroll.bind(this)
    this._onSelection = this._onSelection.bind(this)
    this._commitSelection = this._commitSelection.bind(this)
  }

  /**
   *
   */
  _setCurrencyInputCursor () {
    this.refs.currencyInput.focus()
    this.refs.currencyInput.setSelectionRange(0, 0)
  }

  /**
   *
   */
  _currencyFilterInput () {
    // Clear input field
    this.setState({ currency: '' })
    // Remove previous selected term
    let searchTerm
    if (!this.state.showAlternatives) {
      searchTerm = this.refs.currencyInput.value.replace(this.props.currency, '')
      this.setState({ showAlternatives: true })
    } else {
      searchTerm = this.refs.currencyInput.value
    }

    // Filter currencies and set state
    this.setState({ currency: searchTerm, currencies: this._filterCurrencies(searchTerm.toUpperCase()) })
  }

  /**
   *
   */
  _filterCurrencies (searchTerm) {
    return Currencies.filter((currency) => {
      if (currency.code.startsWith(searchTerm)) return currency
    })
  }

  /**
   * @method _onSelection
   */
  _onSelection (suggestion) {
    this.setState({ currency: suggestion.id }, () => this._commitSelection())
  }

  _commitSelection () {
    // Get the currently selected item
    let currency = this.state.currencies.filter((curr, index) => {
      if (index === this.state.highlightedItem) return curr
    })[0]
    // Set state
    this.setState({ currency: currency.code, showAlternatives: false })
  }

  /**
   *
   */
  _onKeyDown (e) {
    const key = e.which || e.keyCode
    switch (key) {
      case keyCodes.UP:
      case keyCodes.DOWN:
        e.preventDefault()
        this._scroll(key)
        break
      case keyCodes.ENTER:
        this._commitSelection()
        break
      case keyCodes.ESCAPE:
        this.refs.input.blur()
        break
    }
  }

  /**
   * @method _scroll
   *
   */
  _scroll (key) {
    const { highlightedItem: item, currencies } = this.state
    const lastItem = currencies.length - 1
    let nextItem

    if (key === keyCodes.UP) {
      nextItem = (item <= 0) ? lastItem : item - 1
    } else {
      nextItem = (item === lastItem) ? 0 : item + 1
    }

    this.setState({
      highlightedItem: nextItem
    })
  }

  /**
   *
   */
  render () {
    return (
      <div
        className={
          classnames('currency-container', { active: this.state.active })
        }
        onFocus={() => { this.setState({ active: true }) }}
        onBlur={() => { this.setState({ active: false }) }}
        >
        <div
          className={
            classnames('currency-filter')
          }
          >
          <input
            type='text'
            value={this.state.currency}
            ref='currencyInput'
            onFocus={this._setCurrencyInputCursor}
            onClick={this._setCurrencyInputCursor}
            onChange={this._currencyFilterInput}
            onKeyDown={this._onKeyDown}
            />
          <button
            type='button'
            onClick={() => { this.setState({ showAlternatives: !this.state.showAlternatives }) }}
            >
            <div className='arrow-down'></div>
          </button>
        </div>
        <div
          className={
            classnames('currency')
          }
          >
          <input
            type='number'
            defaultValue={this.props.amount}
            />
        </div>
        <div className='currency-suggestions-container'>
          {this.state.showAlternatives
          ? (<CurrenciesSuggestions suggestions={this.state.currencies} highlightedItem={this.state.highlightedItem} onSelection={this._onSelection} />)
          : (<div />)
          }
        </div>
      </div>
    )
  }
}

/**
 *
 */
Currency.propTypes = {
  currency: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number.isRequired
}

/**
 *
 */
Currency.defaultProps = {
  currency: 'NOK',
  amount: 1000
}

/**
 *
 */
export default Currency
