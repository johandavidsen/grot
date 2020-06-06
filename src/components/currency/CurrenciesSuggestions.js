import React from 'react'
import classnames from 'classnames'

/**
 *
 */
class CurrenciesSuggestions extends React.Component {

  /**
   *
   */
  render () {
    const { suggestions, highlightedItem, onSelection } = this.props
    return (
      <ul
        className={classnames('currency-suggestions')}
      >
        {suggestions.map((curr, index) => {
          return (
            <li
              key={index}
              className={
                classnames({ selected: (highlightedItem === index) })
              }
              onClick={() => { onSelection(curr.code) }}
            >
              {curr.code}
            </li>
          )
        })}
      </ul>
    )
  }
}

// CurrenciesSuggestions.propTypes = {
//  suggestions: React.PropTypes.array,
//  highlightedItem: React.PropTypes.object,
//  onSelection: React.PropTypes.func
// }

/**
 *
 */
export default CurrenciesSuggestions
