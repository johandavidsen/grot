import React from 'react';
import { Input, ButtonInput, ListGroup, ListGroupItem } from 'react-bootstrap';

import GrotPanel from './GrotPanel';

/**
 * @class GrotPanel
 *
 * @since 0.1.16
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class GrotLogin extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     *
     */
    render(){
        return(
            <GrotPanel title="Login">
                <form className="grot-login-form">
                    <ListGroup>
                        <ListGroupItem>
                            <Input type="email" label="Email Address" placeholder="Enter email" />
                        </ListGroupItem>
                        <ListGroupItem>
                            <Input type="password" label="Password" placeholder="Enter password"/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ButtonInput type="submit" value="Submit Button" />
                        </ListGroupItem>
                    </ListGroup>
                </form>
            </GrotPanel>
        );
    }
}
