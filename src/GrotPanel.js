import React from 'react';
import { Input, Panel, Button, Glyphicon } from 'react-bootstrap';
import GrotTable from './GrotTable';

/**
 * GrotPanelHeader
 *
 * This is a helper class for the GrotPanel class.
 *
 * @since 0.1.7
 * @Author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotPanelHeader extends React.Component {

    /**
     * The constructor takes the following parameters:
     *
     * @param {string} title - The title of the panel..
     * @param {boolean} edit - A boolean value to indicate if the panel can be
     * changed.
     * @param {function} callback - A callback function, which will be called
     * everytime the title is changed.
     * @param {function} toggle - A callback function, which is used to toggle
     * the open state variable in the parent.
     *
     */
    constructor( props ){
        super(props);
        this.state = {
            title: props.title,
            changeTitle: props.edit,
            edit: false
        };
        this._toggleEdit = this._toggleEdit.bind(this);
        this._setTitle = this._setTitle.bind(this);
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */
    render(){
        var icon = this.props.expanded ? 'chevron-down' : 'chevron-right';
        var title = (
            <h3 className="panel-title">
                <Button onClick={ this.props.toggle } bsStyle="link" className="grot-button-link grot-button-link-edit" >
                    <Glyphicon glyph={icon} /> {' '}
                    { this.state.title }
                </Button>
            </h3>
        );
        if(this.state.changeTitle){
            title = this.state.edit ? (
                <h3 className="panel-title">
                    <Input type="text" ref="titleInput" defaultValue={this.state.title} />
                    <Button onClick={ this._setTitle }><Glyphicon glyph="ok" /></Button>
                    <Button onClick={ this._toggleEdit} ><Glyphicon glyph="remove" /></Button>
                </h3>
            ) : (
                <h3 className="panel-title grot-table-header">
                    <Button onClick={ this.props.toggle } bsStyle="link" className="grot-button-link grot-button-link-edit" >
                        <Glyphicon glyph={icon} /> {' '}
                        { this.state.title }
                    </Button>
                    <Button  onClick={ this._toggleEdit} bsStyle="link" className="grot-button-link grot-button-edit" >
                        <Glyphicon glyph="edit" />
                    </Button>
                </h3>
            );
        }

        return (
            <div>
                { title }
            </div>
        );
    }

    /**
     * This function toggles the edit state variable.
     */
    _toggleEdit(){
         this.setState({ edit:!this.state.edit });
    }

    /**
     * The function changes the title of the panel and calls the callback
     * function.
     */
    _setTitle(){
        let title = this.refs.titleInput.getValue();
        this.props.callback( title );
        this.setState({ title: title, edit: !this.state.edit });
    }
}

/**
 * GrotPanel
 *
 * GrotPanel is a simple panel, which can be expanded and collapsed by clicking
 * on the title.
 *
 * @since 0.1.7
 * @Author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class GrotPanel extends React.Component {

    /**
     * This constructor takes the following parameters:
     *
     * @param {string} title - Expects a string value to be used as the title of
     * the panel.
     * @param {boolean} expanded - A boolean value, which determines if the
     * intial state of the panel is expanded or not.
     * @param {boolean} edit - Set if the title can be changed.
     * @param {function} children - Set component to be viewed inside the panel.
     * @param {function} callback - A function, which is called everytime the
     * title is changed.
     *
     */
    constructor( props ) {
        super( props);
        this.state = {
            open: props.expanded,
            title: props.title,
            edit: props.edit
        };
        this._toggle = this._toggle.bind(this);
        this._changeTitle = this._changeTitle.bind(this);
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */
    render() {

        let header = (
            <GrotPanelHeader title={ this.props.title } edit={this.state.edit} toggle={ this._toggle } callback={ this._changeTitle} expanded={ this.state.open } />
        );

        return (
            <Panel header={ header } collapsible expanded={this.state.open} className="grot-panel">
                {this.props.children}
            </Panel>
        );
    }

    /**
     * This function toggles the open state of the Panel.
     */
    _toggle(){
        this.setState({ open: !this.state.open });
    }

    /**
     * This function changes the title and calls the callback function.
     */
    _changeTitle( title ){
        this.setState({ title: title});
        this.props.callback( title );
    }
}

export default GrotPanel;
