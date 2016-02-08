import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import GrotHello from "../src/components/GrotHello";
import GrotTable from '../src/components/GrotTable';
import GrotPanel from '../src/components/GrotPanel';
import GrotObjectBox from '../src/components/GrotObjectBox';
import GrotJSONBox from '../src/components/GrotJSONBox';
import GrotCredits from '../src/components/GrotCredits';
import GrotGOPreviewBox from '../src/components/GrotGOPreviewBox';

/**
 * APIDOCS
 *
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class APIDocs extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this.title = props.title;
        this.desc = props.desc;
        this.demonstrationElement = props.element;
        this.properties = props.props;
    }

    /**
     *
     */
    render(){

        let props = [];
        if( this.properties ){
            props = (
                <ul>
                    {
                        this.properties.map(( element, index ) => {
                            return <li key={index}>{ element }</li>;
                        })
                    }
                </ul>
            );
        }

        return (
            <div>
                <h3>{this.title}</h3>
                <h4>Description</h4>
                {this.desc}
                <h4>Demonstration</h4>
                {this.demonstrationElement}
                <h4>Props</h4>
                { props }
            </div>
        );
    }
}


/**
 * Demo
 *
 * @since 0.1.8
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class Demo extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this.state = {
            tableData: [],
            objecBoxData: { title: "GrotObjectBox", properties: []}
        };
        this._tableDataIsChanged = this._tableDataIsChanged.bind(this);
        this._objectBoxChanged = this._objectBoxChanged.bind(this);
    }


    /**
     *
     */
    render( ){

        return (
            <div>
                <GrotHello />
                <h2>Introduction</h2>
                <p>
                    The is a demonstation page for the different components in the package Grót.
                    The source code for this package is hosted on <a href="">Bitbucket</a> and
                    the npm link is <a href="https://www.npmjs.com/package/grot">grot</a>.
                    <br />
                    The structure of this document is the following: each component in the package
                    is described in the following manner:
                </p>
                <ul>
                    <li>Name of the Component.</li>
                    <li>Demonstration of the component.</li>
                    <li>A description of the parameters for the particular component.</li>
                </ul>
                <Tabs bsStyle="tabs" defaultActiveKey="nav-g" animation={false}>
                    <Tab eventKey="nav-c" title="Bootstrap Components">
                    <h2>Bootstrap Components</h2>
                    <GrotPanel
                        title="GrotHello"
                        expanded={false}
                        children={ (
                            <APIDocs
                                title="GrotHello"
                                desc="This is the HelloWorld component for the Grót Package. It dosent take any properties, nore can it be manipulated in any way."
                                props={ ["There are no props for this object."] }
                                element={(<GrotHello />)}
                                />
                            )
                        }
                        />
                    <GrotPanel
                        title="GrotTable"
                        expanded={false}
                        children={
                            (
                               <div>
                                    <h3>GrotTable</h3>
                                    <h4>Description</h4>
                                    <p>GotTable is a 2 column table, where on can dynamically add and remove rows.</p>
                                    <h4>Demonstration</h4>
                                    <GrotTable properties={ this.state.tableData } callback={ this._tableDataIsChanged }/>
                                    <GrotJSONBox
                                        contents={ JSON.stringify( this.state.tableData, null, "\t" ) }
                                        />
                                    <h4>Props</h4>
                                    <ul>
                                        <li>Properties - The user can specify an array, which will be used to hold the rows in. If properties is not specified, the component will create an internal array.</li>
                                        <li>Callback( props ) - If a callback function is provided, this function is called everytime the properties array is updated.</li>
                                    </ul>
                                </div>
                             )
                        }/>
                    <GrotPanel
                        title="GrotPanel"
                        edit={false}
                        expanded={false}
                        children={
                            (
                            <div>
                                <h3>GrotPanel</h3>
                                <h4>Description</h4>
                                <p>GrotPanel is a relatively simple panel, which has a open/close button and indicator.</p>
                                <h4>Demonstration</h4>
                                <GrotPanel title="GrotPanel" expanded={false} children="contents." />
                                <h4>Props</h4>
                                <ul>
                                    <li>Title - Specify the header title.</li>
                                    <li>Expanded - The user can specify, if the Panel should initialize expanded or closed. Expanded takes a boolead value.</li>
                                    <li>Edit - Boolean value to indicate, if the title can be changed. Default value is false. </li>
                                    <li>Children - Specify the contents of the panel</li>
                                    <li>Callback - The callback function is called every time the title is changed.</li>
                                </ul>
                            </div>
                            )
                        }/>
                    <GrotPanel
                        title="GrotObjectBox"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>GrotObject</h3>
                                    <h4>Description</h4>
                                    <p>
                                        The GrotObjectBox is a component specifically buildt to manipulate a
                                        particular JSON object.
                                        This component is build using the 2 components GrotPanel and GrotTable.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <GrotObjectBox object={ this.state.objecBoxData } edit={true} expanded={false} callback={this._objectBoxChanged }/>
                                    <GrotJSONBox contents={ JSON.stringify( this.state.objecBoxData, null, "\t" ) } />
                                    <h4>Props</h4>
                                    <ul>
                                        <li>Object - Object is expected to have a certain structure.</li>
                                        <li>Edit - Boolean value to indicate, if the title can be changed. Default value is false.</li>
                                        <li>Expanded - The user can specify, if the Panel should initialize expanded or closed. Expanded takes a boolead value.</li>
                                        <li>Callback - The callback function is called every time the title or the properties are changed.</li>
                                    </ul>
                                </div>
                            )
                        } />
                    <GrotPanel
                        title="GrotJSONBox"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>GrotJSONBox</h3>
                                    <h4>Description</h4>
                                    <p>
                                        GrotJSONBox is a very simple component, which is primarily used to display data.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <GrotJSONBox />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                            }/>
                    <GrotPanel
                        title="GrotCredits"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>GrotObjectBox</h3>
                                    <h4>Description</h4>
                                    <p>
                                        GrotCredits is along, the same lines as the GrotHello component. All it dose is to display a HTML string.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <GrotCredits />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                        }/>
                    </Tab>
                    <Tab eventKey="nav-g" title="GoJS Components">
                        <h2>GoJS Components</h2>
                        <GrotPanel
                            title="SimpleBox"
                            expanded={true}
                            children={
                                (
                                    <div>
                                        <h3>SimpleBox</h3>
                                        <h4>Description</h4>
                                        <p></p>
                                        <h4>Demonstration</h4>
                                        This is a preview of the object.
                                        <GrotGOPreviewBox id="SimpleBox" temp="SimpleBox" />
                                        <h4>Parameters</h4>
                                        <ul>
                                            <li>Title - </li>
                                            <li>Temp - </li>
                                        </ul>
                                    </div>
                                )
                            } />
                            <GrotPanel
                                title="BoxWithProps"
                                expanded={true}
                                children={
                                    (
                                        <div>
                                            <h3>BoxWithProps</h3>
                                            <h4>Description</h4>
                                            <p></p>
                                            <h4>Demonstration</h4>
                                            <GrotGOPreviewBox id="BoxWithProps" temp="ObjectWithProps" />
                                            <h4>Parameters</h4>
                                            <ul>
                                                <li>Title - </li>
                                                <li>Temp - </li>
                                            </ul>
                                        </div>
                                    )
                                } />
                    </Tab>
                </Tabs>
                <h2>Credits</h2>
                <GrotCredits />
           </div>
        );
    }

    /**
     *
     */
    _tableDataIsChanged( props ){
        this.setState({ tableData: props });
    }

    /**
     *
     */
    _objectBoxChanged( object ){
        this.setState({ objecBoxData: object });
    }
}

export default Demo;
