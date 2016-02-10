import React from 'react';
import go from 'gojs';

import { ObjectWithProps, SimpleBox } from '../gojs';

/**
 * GrotGOSPreviewBox
 *
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class GrotGOPreviewBox extends React.Component {

    /**
     *
     * @param {String} id -
     * @param {Object} model -
     * @param {function} callback -
     */
    constructor( props ){
        super( props );
        this._renderGOJS = this._renderGOJS.bind(this);
    }

    /**
     *
     */
    componentDidMount(){
        this._renderGOJS();
    }

    /**
     * Returns a HTML string.
     * @return {React Object}
     */
    render( ){

        return (
            <div id={ this.props.id } className="grot-preview-go"/>
        );
    }

    /**
     *
     */
    _renderGOJS(){
        var self = this;
        let GO = go.GraphObject.make;
        let Div = GO( go.Diagram, this.props.id, {
                initialContentAlignment: go.Spot.Center,
                allowZoom: false,
                allowSelect: true,
                allowHorizontalScroll: false,
                allowVerticalScroll : false
            }
        );

        let temp = new go.Map("string", go.Node);
        temp.add("ObjectWithProps", ObjectWithProps() );
        temp.add("SimpleBox", SimpleBox() );

        Div.nodeTemplateMap = temp;
        Div.model = new go.GraphLinksModel(this.props.model);
        Div.model.addChangedListener(( changedEvent ) => {
            this.props.callback( Div.model.nf);
            }
        );
    }
}
