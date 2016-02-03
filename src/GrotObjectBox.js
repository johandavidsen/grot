import React from 'react';
import { Button } from 'react-bootstrap';
import GrotPanel from './GrotPanel';
import GrotTable from './GrotTable';

/**
 * GrotHello
 *
 * Inspiration https://gist.github.com/joemcbride/7bfd85c45f99418f3701
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
                children={ table } />
        );
    }
}

export default GrotObjectBox;
