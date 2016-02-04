import React from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * GrotCredits
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotCredits extends React.Component {

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

        return (
            <Row>
                <Col lg={12}>
                    This module was made by <a ref="">Jóhan Davidsen</a>, source code can be found on <a href="">Bitbucket</a> and the module is available on <a href="">NPM</a>.
                </Col>
            </Row>
        );
    }
}

export default GrotCredits;
