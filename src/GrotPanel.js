import React from 'react';
import { Panel, Button, Glyphicon } from 'react-bootstrap';
import GrotTable from './GrotTable';

/**
 *
 */
class GrotPanelHeader extends React.Component {

    /**
     *
     */
    constructor( props ){
        super(props);
        this._renderButton = this._renderButton.bind(this);
    }

    /**
     *
     */
    render(){
        return (
            <div>
                <h3 className="panel-title">
                    { this._renderButton() }
                </h3>
            </div>);
    }

    /**
     *
     */
    _renderButton(){
        var icon = this.props.expanded ? 'chevron-down' : 'chevron-right';

        return (
            <Button onClick={ this.props.toggle } bsStyle="link" className="grot-button-link" >
                <Glyphicon glyph={icon} /> {' '}
                {this.props.headerTitle}
            </Button>
        );
    }
}

class GrotPanel extends React.Component {
    constructor( props ) {
        super( props);
        this.state = {
            open: props.expanded
        };
        this._toggle = this._toggle.bind(this);
    }

    render() {

        let header = (
            <GrotPanelHeader headerTitle={ this.props.header } toggle={ this._toggle } expanded={ this.state.open } />
        );

        return (
            <Panel header={ header } collapsible expanded={this.state.open} className="grot-panel">
                {this.props.children}
            </Panel>
        );
    }

    _toggle(){
        this.setState({ open: !this.state.open });
    }
}

export default GrotPanel;
