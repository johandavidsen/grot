import React from 'react';
import { Panel } from 'react-bootstrap';

/**
 * @class GrotKanbanCard
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class GrotKanbanCard extends React.Component {

    /**
     * @param {String} id -
     * @param {String} title -
     * @param {Date} date -
     * @param {Object} assignedTo -
     */
    constructor( props ){
        super( props );
    }

    /**
     *
     */
    render(){
        return(<Panel header={ this.props.id + " " + this.props.title} />);
    }
}

/**
 *
 */
GrotKanbanCard.propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string
};

/**
 *
 */
GrotKanbanCard.defaultProps = {
    id:"#0",
    title: "Name of TODO.",
    date: "Now",
    assignedTo: "me"
};


/**
 * @class GrotKanbanTable
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class GrotKanbanBoard extends React.Component {

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
            <div>
                <GrotKanbanCard />
                <GrotKanbanCard />
                <GrotKanbanCard />
            </div>
        );
    }
}

/**
 *
 */
GrotKanbanBoard.propTypes = {

};

/**
 *
 */
GrotKanbanBoard.defaultProps = {

};
