import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 */
class GrotHello extends React.Component {

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
            <h1>Grót - Hello from Grót</h1>
        );
    }
}

ReactDOM.render(<GrotHello/>, document.getElementById("header"));

// export default HelloGrot;
