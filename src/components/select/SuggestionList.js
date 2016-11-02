import React from 'react'
import classNames from 'classnames'

import '../../stylesheets/components/_suggestion-list.scss'

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
  render ( ) {
    const { highlightedItem, searchTerm, suggestions } = this.props
    const { activeItem } = this.state

    return (
      <ul className="suggestions-list">
      {suggestions.map((suggestion, index) =>
        <li
          className={classNames({
            highlighted: highlightedItem === index || activeItem === index
          })}
          key={index}
          onClick={() => this.props.onSelection(suggestion)}
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

/**
 *
 */
export default SuggestionList
