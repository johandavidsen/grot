import React from 'react'
import ReactSelect from 'react-select'
import './Select.scss'

class Select extends React.Component {

  render () {
    const { name } = this.props
    return (
      <div className='grot-select'>
        <ReactSelect name={name} />
      </div>
    )
  }
}

// Select.propTypes = {
//  name: React.PropTypes.string.isRequired
// }

export default Select
// import classNames from 'classnames'
//
// import SuggestionList from './SuggestionList'
//
//
// /**
//  *
//  */
// const keyCodes = {
//   ENTER: 13,
//   ESCAPE: 27,
//   UP: 38,
//   DOWN: 40
// }
//
// /**
//  * @class Select
//  *
//  * @since v0.3.1
//  * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
//  *
//  */
// class Select extends React.Component {
//
//   /**
//    * @constructor
//    */
//   constructor (props) {
//     super(props)
//     this.state = this.initialState = {
//       highlightedItem: -1,
//       searchTerm: '',
//       suggestions: [],
//       value: ''
//     }
//
//     this._onChange = this._onChange.bind(this)
//     this._onKeyDown = this._onKeyDown.bind(this)
//     this._normalizeInput = this._normalizeInput.bind(this)
//     this._autoSuggest = this._autoSuggest.bind(this)
//     this._scroll = this._scroll.bind(this)
//     this._search = this._search.bind(this)
//     this._onSelection = this._onSelection.bind(this)
//     this._onFocus = this._onFocus.bind(this)
//   }
//
//   /**
//    * @method componentDidMount
//    *
//    */
//   componentDidMount () {
//     if (this.props.autoFocus) {
//       this.refs.input.focus()
//     }
//   }
//
//   /**
//    * @method _onChange
//    *
//    */
//   _onChange (e) {
//     if (e) {
//       clearTimeout(this._timer)
//       const input = e.target.value
//       // if (!input) return this.setState(this.initialState)
//       this.setState({ value: input })
//       this._timer = setTimeout(() => this._autoSuggest(), this.props.delay)
//     } else {
//       clearTimeout(this._timer)
//       this._timer = setTimeout(() => this._autoSuggest(), this.props.delay)
//     }
//   }
//
//   /**
//    * @method _onKeyDown
//    *
//    *
//    */
//   _onKeyDown (e) {
//     const key = e.which || e.keyCode
//     switch (key) {
//       case keyCodes.UP:
//       case keyCodes.DOWN:
//         e.preventDefault()
//         this._scroll(key)
//         break
//       case keyCodes.ENTER:
//         this._search()
//         break
//       case keyCodes.ESCAPE:
//         this.refs.input.blur()
//         break
//     }
//   }
//
//   /**
//    * @method _normalizeInput
//    *
//    *
//    */
//   _normalizeInput () {
//     return this.state.value.toLowerCase().trim()
//   }
//
//   /**
//    * @method _autoSuggest
//    *
//    *
//    */
//   _autoSuggest () {
//     const searchTerm = this._normalizeInput()
//     // if (!searchTerm) return
//     new Promise((resolve) => {
//       this.props.onChange(searchTerm, resolve)
//     }).then((suggestions) => {
//       this.setState({
//         highlightedItem: -1,
//         searchTerm,
//         suggestions
//       })
//     })
//   }
//
//   /**
//    * @method _scroll
//    *
//    */
//   _scroll (key) {
//     const { highlightedItem: item, suggestions } = this.state
//     const lastItem = suggestions.length - 1
//     let nextItem
//
//     if (key === keyCodes.UP) {
//       nextItem = (item <= 0) ? lastItem : item - 1
//     } else {
//       nextItem = (item === lastItem) ? 0 : item + 1
//     }
//
//     this.setState({
//       highlightedItem: nextItem,
//       value: suggestions[nextItem].id
//     })
//   }
//
//   /**
//    * @method _onSelection
//    */
//   _onSelection (suggestion) {
//     this.setState({value: suggestion.id}, () => this._search())
//   }
//
//   /**
//    * @method _search
//    */
//   _search () {
//     if (!this.state.value) return
//     const value = this._normalizeInput()
//     clearTimeout(this._timer)
//     this.refs.input.blur()
//     const { highlightedItem, suggestions } = this.initialState
//     this.setState({ highlightedItem, suggestions })
//     if (this.props.onSearch) {
//       this.props.onSearch(value)
//     }
//   }
//
//   /**
//    * @method _onFocus
//    */
//   _onFocus () {
//     this.setState({ isFocused: true })
//     this._onChange()
//   }
//
//   /**
//    * @method render
//    *
//    */
//   render () {
//     return (
//       <div
//         className={
//           classNames(
//             'select-container',
//             {'is-focused': this.state.isFocused},
//             {'has-suggestions': this.state.suggestions.length > 0}
//           )
//         }
//         >
//         <input
//           className='select-input'
//           type='text'
//           maxLength='100'
//           autoCapitalize='none'
//           autoComplete='off'
//           autoCorrect='off'
//           ref='input'
//           disabled={this.props.disabled}
//           value={this.state.value}
//           placeholder={this.props.placeholder}
//           onChange={this._onChange}
//           onFocus={this._onFocus}
//           onBlur={() => this.setState({isFocused: false, suggestions: []})}
//           onKeyDown={this._onKeyDown}
//           />
//           { this.state.suggestions.length > 0 &&
//             <SuggestionList
//               searchTerm={this.state.searchTerm}
//               suggestions={this.state.suggestions}
//               highlightedItem={this.state.highlightedItem}
//               onSelection={this._onSelection}
//               /> }
//       </div>
//     )
//   }
// }
//
// /**
//  *
//  */
// Select.propTypes = {
//   autoFocus: React.PropTypes.bool,
//   placeholder: React.PropTypes.string,
//   onSearch: React.PropTypes.func,
//   onChange: React.PropTypes.func,
//   disabled: React.PropTypes.bool
// }
//
// Select.defaultProps = {
//   autoFocus: true,
//   disabled: false
// }
//
// /**
//  *
//  */
// export default Select
