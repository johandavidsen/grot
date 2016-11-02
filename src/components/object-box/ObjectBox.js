import React from 'react'
import Panel from '../kanban-board/Panel'
import Table from './Table'

/**
 * @class ObjectBox
 *
 * The ObjectBox is a component specifically buildt to manipulate a
 * particular JSON object. The structure of this object is the following:
 *
 *  {
 *      title: string,
 *      properties: [
 *          { id: string, prop: string, value: string }
 *      ]
 *  }
 *
 * This component is build using the 2 components anel and Table.
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class ObjectBox extends React.Component {

  /**
   * The constructor takes the following parameters:
   *
   * @param {Object} object -
   * @param {boolean} edit -
   * @param {boolean} expanded -
   * @param {function} callback -
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      title: props.object.title,
      expanded: props.expanded,
      edit: props.edit,
      properties: props.object.properties
    }

    this._onPropertiesChange = this._onPropertiesChange.bind(this)
    this._onTitleChange = this._onTitleChange.bind(this)
  }

  /**
   * Returns a HTML string.
   * @return {React Object}
   */
  render () {
    let table = (
      <Table properties={this.properties} callback={this._onPropertiesChange} />
    )

    return (
      <Panel
        title={this.state.title}
        edit={this.state.edit}
        callback={this._onTitleChange}
        expanded={this.state.expanded}
        children={table}
        />
    )
  }

  /**
   * This function is called when the properties array is updated. This
   * function also calls the callback function.
   */
  _onPropertiesChange (props) {
    this.props.callback({ title: this.state.title, properties: props })
    this.setState({ properties: props })
  }

  /**
   * This function is called, when the title is updated. This
   * function also calls the callback function.
   */
  _onTitleChange (title) {
    this.props.callback({ title: title, properties: this.state.props })
    this.setState({ title: title })
  }
}

ObjectBox.propTypes = {
  object: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  edit: React.PropTypes.bool,
  callback: React.PropTypes.func
}
