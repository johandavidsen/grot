import React from 'react';
import { Panel , Glyphicon, Button, Row, Col } from 'react-bootstrap';

import Panel from './Panel';

/**
 * @class KanbanTable
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class KanbanBoard extends React.Component {

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
                <Panel title="test">
                    <KanbanCard />
                    <KanbanCard />
                    <KanbanCard />
                </Panel>
            </div>
        );
    }
}

/**
 *
 */
KanbanBoard.propTypes = {
    title: React.PropTypes.string
};

/**
 *
 */
KanbanBoard.defaultProps = {
    title: "Kanban Table",
};

/**
 * @class KanbanCard
 *
 * @since 0.1.12
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class KanbanCard extends React.Component {

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
KanbanCard.propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string
};

/**
 *
 */
KanbanCard.defaultProps = {
    id:"#0",
    title: "Name of TODO.",
    type: "Task",
    date: "Now",
    assignedTo: "me"
};
