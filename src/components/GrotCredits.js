import React from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * GrotCredits
 *
 * GrotCredits is along, the same lines as the GrotHello component. All it dose
 * is to display a HTML string.
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotCredits extends React.Component {


    /**
     * Returns a HTML string.
     * @return {React Object}
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
