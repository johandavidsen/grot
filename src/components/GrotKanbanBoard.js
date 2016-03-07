import React from 'react';
import { Panel , Glyphicon, Button, Row, Col } from 'react-bootstrap';

import GrotPanel from './GrotPanel';

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
     * @param {String} type -
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
        return(
            <Panel header={ this.props.id + " " + this.props.title} >
                { this.props.type + " " + this.props.date + " " + this.props.assignedTo }
            </Panel>
        );
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
    type: "Task",
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
     * @param {String} title -
     */
    constructor( props ){
        super( props );
    }

    /**
     *
     */
    render(){
        return(
            <div className="grot-kanban-table">
                <Row>
                    <Col lg={ 10 }>
                        <h2 className="header">
                            {this.props.title + " "}
                            <Button className="header_edit">
                                <Glyphicon glyph="edit" />
                            </Button>
                        </h2>
                    </Col>
                    <Col lg={ 2 } className="right">
                        <h2>
                            <Button>
                                <Glyphicon glyph="asterisk" />
                            </Button>
                        </h2>
                    </Col>
                </Row>
                <GrotPanel title="test">
                    <GrotKanbanCard />
                    <GrotKanbanCard />
                    <GrotKanbanCard />
                </GrotPanel>
            </div>
        );
    }
}

/**
 *
 */
GrotKanbanBoard.propTypes = {
    title: React.PropTypes.string
};

/**
 *
 */
GrotKanbanBoard.defaultProps = {
    title: "Kanban Table",
};
