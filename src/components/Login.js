import React from 'react';

import Panel from './Panel';

/**
 * @class Login
 *
 * @since 0.1.16
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class Login extends React.Component {

    /**
     *
     */
    render(){
        return(
            <Panel title="Login">
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
            </Panel>
        );
    }
}
