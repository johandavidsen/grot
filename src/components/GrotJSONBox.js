import React from 'react';
import { Input } from 'react-bootstrap';

/**
 * @class GrotJSONBox
 *
 * GrotJSONBox is a very simple component, which is primarily used to display
 * data.
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class GrotJSONBox extends React.Component {

    /**
     * The constructor takes the following parameters:
     *
     * @param {string} contents - This is the data, which is used to populate,
     * the textarea.
     *
     */
    constructor( props ){
        super( props );
        this.data = this.props.contents;
    }

    /**
     * Set the value of the textarea.
     */
    shouldComponentUpdate( nextProps, nextState ){
        let prop = this.refs.JSONBox.refs.input;
        prop.value = nextProps.contents;
        return true;
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */
    render( ){
        return (
            <Input rows="10" ref="JSONBox" defaultValue={this.data} type="textarea" readOnly />
        );
    }
}
