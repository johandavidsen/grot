import React from 'react';

/**
 * GrotHello
 *
 * This is the HelloWorld component for the Grót Module. This function only
 * display a simple HTML string.
 *
 * @since 0.1.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotHello extends React.Component {

    /**
     * Returns a HTML string.
     * @return {React Object}
     */
    render( ){

        return (
            <h1>
                Grót - Hello from Grót
            </h1>
        );
    }
}
export default GrotHello;