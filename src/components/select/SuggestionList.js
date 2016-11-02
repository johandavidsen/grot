import React from 'react'
import classNames from 'classnames'

import './_suggestion-list.scss'

/**
 *
 */
class SuggestionList extends React.Component {

  /**
   * @constructor
   *
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      activeItem: -1
    }
  }

  /**
   *
   */
  render () {
    // searchTerm,
    const { highlightedItem, suggestions, onSelection } = this.props
    const { activeItem } = this.state

    return (
      <ul className='suggestions-list'>
      {suggestions.map((suggestion, index) =>
        <li
          className={classNames({
            highlighted: highlightedItem === index || activeItem === index
          })}
          key={index}
          onClick={() => onSelection(suggestion)}
          onMouseEnter={() => this.setState({ activeItem: index })}
          onMouseDown={(e) => e.preventDefault()}
          >
          <div className='suggestion-list-id'>{suggestion.id}</div>
          <div className='suggestion-list-description'>{suggestion.description}</div>
          <div className='suggestion-list-probability'>{ suggestion.probability}%</div>
        </li>
      )}
      </ul>
    )
  }
}

SuggestionList.propTypes = {
  highlightedItem: React.PropTypes.object,
  searchTerm: React.PropTypes.object,
  suggestions: React.PropTypes.array,
  onSelection: React.PropTypes.func
}

/**
 *
 */
export default SuggestionList
