import React from 'react';
import { Button, Table, Input, Glyphicon } from 'react-bootstrap';

/**
 * TableRow
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotTableRow extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     *
     */
    render(  ){
        let icon = (<Button className="grot-button-link" bsStyle="link" value={ this.props.id } onClick={ this.props.remove } ><Glyphicon glyph="minus" /></Button>);

        return(
            <tr>
                <td>
                    <Input type='text' defaultValue={ this.props.prop } className="grot-table-input"/>
                </td>
                <td>
                    <Input type='text' defaultValue={ this.props.value } className="grot-table-input"/>
                </td>
                <td>
                    {icon}
                </td>
            </tr>
        );
    }
}


/**
 * GrotTable
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotTable extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this.state = {
            properties: []
        };
        this._addRow = this._addRow.bind(this);
        this._removeRow = this._removeRow.bind(this);
    }

    /**
     *
     */
    render( ){
        var propComponents = [];
        this.state.properties.forEach(( element ) => {
            propComponents.push(<GrotTableRow
                                    key={ element.id }
                                    id={ element.id }
                                    prop={ element.prop }
                                    value={ element.value }
                                    add={ this._addRow }
                                    remove={ this._removeRow }
                                />
                            );
        });

        return (
            <Table className="grot-table">
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
                        <td><Input ref="newProp" type='text' className="grot-table-input" /></td>
                        <td><Input ref="newValue" type='text' className="grot-table-input" /></td>
                        <td><Button className="grot-button-link" bsStyle="link" onClick={ this._addRow }><Glyphicon glyph="plus" /></Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    /**
     *
     */
    _addRow(){
        let props = this.state.properties;
        let prop = this.refs.newProp.refs.input;
        let value = this.refs.newValue.refs.input;
        props.push({ id: Math.random(), prop: prop.value, value: value.value });
        prop.value = "";
        value.value = "";
        this.setState({ properties: props });
    }

    /**
     *
     */
    _removeRow( event ){
        let id = event.currentTarget.value;
        let props = this.state.properties.filter(( element ) => {
            return element.id != id;
        });
        this.setState({ properties: props });
    }
}

export default GrotTable;
