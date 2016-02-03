import React from 'react';
import { Panel, Button, Glyphicon } from 'react-bootstrap';
import classNames from 'classnames';

/**
 *
 */
class GrotPanelHeader extends React.Component {

    /**
     *
     */
    constructor( props ){
        super(props);
        this.state = {
            headerElement: 'h3'
        };
        this._toggleExpand = this._toggleExpand.bind(this);
        this._renderButton = this._renderButton.bind(this);
    }

    /**
     *
     */
    render(){
        var HTag = this.state.headerElement;
        return (
            <div>
                <HTag className="panel-title">
                    { this._renderButton() }
                </HTag>
            </div>
        );
    }

    /**
     *
     */
    _toggleExpand( event ) {
        event.preventDefault();
        this.props.toggleExpand();
    }

    /**
     *
     */
    _renderButton(){
        var buttonStyles = {
            'collapsed': !this.props.expanded
        };
        var icon = this.props.expanded ? 'chevron-down' : 'chevron-right';

        return (
            <Button
                className={ classNames( buttonStyles ) }
                bsStyle="link"
                onClick={ this._toggleExpand} >
                <Glyphicon glyph={icon} /> {' '}
                {this.props.header}
            </Button>
        );
    }
}

/**
 *
 */
class GrotPanelDefault extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this.state = {
            expanded: this.props.expanded
        };

        this.props = {
            headerElement : 'h3'
        };
        this._toggleExpand = this._toggleExpand.bind(this);
        this._isExpanded = this._isExpanded.bind(this);
    }

    /**
     *
     */
    render(){
        let isExpanded = this._isExpanded();
        let header = (
            <GrotPanelHeader
                header={ this.props.header }
                headerElement={ this.props.headerElement }
                expanded={ isExpanded }
                toggleExpand={ this._toggleExpand }
            />
        );

        return (
            <Panel {...this.props} header={header} collapsable expanded={ this.state.expanded }>
                {this.props.children}
            </Panel>
        );
    }

    /**
     *
     */
    _toggleExpand() {
        let isExpanded = !this._isExpanded();
        this.setState({ expanded : isExpanded });
        if(this.props.toggleExpand) {
            this.props._toggleExpand();
        }
    }

    /**
     *
     */
    _isExpanded() {
        return this.props.expanded != null
            ? this.props.expanded
            : this.state.expanded;
    }
}

/**
 * GrotPanel
 *
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotPanel extends React.Component {

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
        return(
            <GrotPanelDefault
                className="grot-panel"
                header={ this.props.header }
                headerElement={ this.props.headerElement }
                expanded={ this.props.expanded }
                toggleExpand={ this.props.toggleExpand }>
                <div className="grot-panel-body">
                    {this.props.children}
                </div>
            </GrotPanelDefault>
        );
    }
}

export default GrotPanel;
