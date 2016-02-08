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
     * @param {String} temp -
     */
    constructor( props ){
        super( props );
        this._renderGOJS = this._renderGOJS.bind(this);

        this.model = [
            { key: 0, title:"Rhonda Hoffman", category:this.props.temp, properties:[] },
            { key: 1, title:"Roanne Levine", category:this.props.temp, properties:[] },
            { key: 2, title:"Samantha Langley", category:this.props.temp, properties:[] },
            { key: 3, title:"Isadora Shepard", category:this.props.temp, properties:[] },
            { key: 4, title:"Glenna Brown", category:this.props.temp, properties:[] },
            { key: 5, title:"Taylor Reeves", category:this.props.temp, properties:[] },
            { key: 6, title:"Sharon Prince", category:this.props.temp, properties:[] },
            { key: 7, title:"Sydney Graves", category:this.props.temp, properties:[] },
            { key: 8, title:"Yael Douglas", category:this.props.temp, properties:[] },
        ];
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
        let GO = go.GraphObject.make;
        let Div = GO( go.Diagram, this.props.id, {
                initialContentAlignment: go.Spot.Center,
                allowZoom: false,
                allowSelect: false,
                allowHorizontalScroll: false,
                allowVerticalScroll : false
            }
        );

        let temp = new go.Map("string", go.Node);
        temp.add("ObjectWithProps", ObjectWithProps() );
        temp.add("SimpleBox", SimpleBox() );

        Div.nodeTemplateMap = temp;
        Div.model = new go.GraphLinksModel(this.model);
    }
}
