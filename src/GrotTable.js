import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Table, Input, Glyphicon } from 'react-bootstrap';

/**
 * TableRow
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class TableRow extends React.Component {

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
        // <Glyphicon glyph='glyphicon-plus' />
        let icon = (<Button value={ this.props.id } onClick={ this.props.remove } >Remove</Button>);

        return(
            <tr>
                <td>
                    <Input type='text' defaultValue={ this.props.prop } />
                </td>
                <td>
                    <Input type='text' defaultValue={ this.props.value }/>
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
            propComponents.push(<TableRow
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
            <Table>
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
                        <td><Input ref="newProp" type='text' /></td>
                        <td><Input ref="newValue" type='text' /></td>
                        <td><Button onClick={ this._addRow }>Add</Button></td>
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
        props.push({ id: Math.random(),  prop: prop.value, value: value.value });
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

ReactDOM.render(<GrotTable/>, document.getElementById("table"));

// export default Grot_Table;
