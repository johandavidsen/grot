import React from 'react';
import { Button } from 'react-bootstrap';
import GrotPanel from './GrotPanel';
import GrotTable from './GrotTable';

/**
 * GrotHello
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotObjectBox extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     *
     */
    render( ){

        let table = (<GrotTable />);

        return (
            <GrotPanel
                header={ this.props.header }
                expanded={this.props.expanded }
                children={ table } >
            </GrotPanel>
        );
    }
}

export default GrotObjectBox;
