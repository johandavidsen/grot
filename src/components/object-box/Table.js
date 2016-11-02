import React from 'react'

/**
 * @class Table
 *
 * The Table is a 2 column table, where the user can add and remove rows as
 * needed.
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class Table extends React.Component {

  /**
   * The constructor has a limited set of parameters.
   *
   * @param {array} properties - The should be an simple JSON array. If
   * properties is not set; properties will be set to empty.
   * @param {function} callback - This is the callback function, which will be
   * called, when the properties array is changed. This function provides the
   * parameter properties.
   *
   */
  constructor (props) {
    super(props)

    if (props.properties) {
      this.state = {
        properties: props.properties
      }
    } else {
      this.state = {
        properties: []
      }
    }

    this._addRow = this._addRow.bind(this)
    this._removeRow = this._removeRow.bind(this)
  }

  /**
   * This function adds a row to the propeties array.
   */
  _addRow () {
    let props = this.state.properties
    let prop = this.refs.newProp
    let value = this.refs.newValue
    props.push({ id: Math.random(), prop: prop.value, value: value.value })
    prop.value = ''
    value.value = ''
    this.setState({ properties: props })
    this.props.callback(props)
  }

  /**
   * This function removes a row from the properties array.
   */
  _removeRow (event) {
    let id = event.currentTarget.value
    let props = this.state.properties.filter((element) => {
      return element.id !== id
    })
    this.setState({ properties: props })
    this.props.callback(props)
  }

  /**
   *  Returns a HTML string.
   *  @return {React Object}
   */
  render () {
    var propComponents = []
    this.state.properties.forEach((element) => {
      propComponents.push(
        <TableRow
          key={element.id}
          id={element.id}
          prop={element.prop}
          value={element.value}
          add={this._addRow}
          remove={this._removeRow}
          />
      ) }
    )

    return (
      <table className='u-full-width'>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { propComponents }
          <tr>
            <td><input ref='newProp' type='text' placeholder='Name of property' /></td>
            <td><input ref='newValue' type='text' placeholder='Value of property' /></td>
            <td>
              <button type='button' className='button-primary' onClick={this._addRow} />
              {/* <Glyphicon glyph='plus' /> */}
              {/* </input> */}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  properties: React.PropTypes.object,
  callback: React.PropTypes.func
}

/**
 * @class TableRow
 *
 * TableRow is a little helper class for Table. This row represents a
 * single line of the Table. Each line has 2 column, which take Text as
 * input. Each line has a icon indicating either a - sign (remove line) or a +
 * sign (add new line).
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export class TableRow extends React.Component {

  /**
   * Returns a React HTML String
   * @return {React Object}
   */
  render () {
    return (
      <tr>
        <td>
          <input type='text' defaultValue={this.props.prop} />
        </td>
        <td>
          <input type='text' defaultValue={this.props.value} />
        </td>
        <td>
          <button type='button' className='button-primary' value={this.props.id} onClick={this.props.remove} >
            {/* <Glyphicon glyph='minus' /> */}
          </button>
        </td>
      </tr>
    )
  }
}

TableRow.propTypes = {
  prop: React.PropTypes.string,
  value: React.PropTypes.string,
  remove: React.PropTypes.func,
  id: React.PropTypes.string
}
