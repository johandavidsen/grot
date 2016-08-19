import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Hello from "../src/components/Hello";
import Table from '../src/components/Table';
import Panel from '../src/components/Panel';
import ObjectBox from '../src/components/ObjectBox';
import JSONBox from '../src/components/JSONBox';
import Credits from '../src/components/Credits';
import KanbanBoard from '../src/components/KanbanBoard';
import Login from '../src/components/Login';

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
                <h4 class="card-title">{this.title}</h4>
                <h5>Description</h5>
                {this.desc}
                <h5>Demonstration</h5>
                {this.demonstrationElement}
                <h5>Props</h5>
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
            objecBoxData: { title: "ObjectBox", properties: []}
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
                <Hello />
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
                <Tabs bsStyle="tabs" defaultActiveKey="nav-c" animation={false}>
                    <Tab eventKey="nav-c" title="Bootstrap Components">
                    <h2>Bootstrap Components</h2>
                    <Panel
                        title="Hello"
                        expanded={false}
                        children={ (
                            <APIDocs
                                title="Hello"
                                desc="This is the HelloWorld component for the Grót Package. It dosent take any properties, nore can it be manipulated in any way."
                                props={ ["There are no props for this object."] }
                                element={(<Hello />)}
                                />
                            )
                        }
                        />
                    <Panel
                        title="Table"
                        expanded={false}
                        children={
                            (
                               <div>
                                    <h3>Table</h3>
                                    <h4>Description</h4>
                                    <p>GotTable is a 2 column table, where on can dynamically add and remove rows.</p>
                                    <h4>Demonstration</h4>
                                    <Table properties={ this.state.tableData } callback={ this._tableDataIsChanged }/>
                                    <JSONBox
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
                    <Panel
                        title="Panel"
                        edit={false}
                        expanded={false}
                        children={
                            (
                            <div>
                                <h3>Panel</h3>
                                <h4>Description</h4>
                                <p>Panel is a relatively simple panel, which has a open/close button and indicator.</p>
                                <h4>Demonstration</h4>
                                <Panel title="Panel" expanded={false} children="contents." />
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
                    <Panel
                        title="ObjectBox"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>Object</h3>
                                    <h4>Description</h4>
                                    <p>
                                        The ObjectBox is a component specifically buildt to manipulate a
                                        particular JSON object.
                                        This component is build using the 2 components Panel and Table.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <ObjectBox object={ this.state.objecBoxData } edit={true} expanded={false} callback={this._objectBoxChanged }/>
                                    <JSONBox contents={ JSON.stringify( this.state.objecBoxData, null, "\t" ) } />
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
                    <Panel
                        title="JSONBox"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>JSONBox</h3>
                                    <h4>Description</h4>
                                    <p>
                                        JSONBox is a very simple component, which is primarily used to display data.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <JSONBox />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                            }/>
                    <Panel
                        title="KanbanBoard"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>KanbanBoard</h3>
                                    <h4>Description</h4>
                                    <p>
                                    </p>
                                    <h4>Demonstration</h4>
                                    <KanbanBoard />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                        }/>
                    <Panel
                        title="Login"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>KanbanBoard</h3>
                                    <h4>Description</h4>
                                    <p>
                                    </p>
                                    <h4>Demonstration</h4>
                                    <Login />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                        }/>
                    <Panel
                        title="Credits"
                        expanded={false}
                        children={
                            (
                                <div>
                                    <h3>ObjectBox</h3>
                                    <h4>Description</h4>
                                    <p>
                                        Credits is along, the same lines as the Hello component. All it dose is to display a HTML string.
                                    </p>
                                    <h4>Demonstration</h4>
                                    <Credits />
                                    <h4>Parameters</h4>
                                    <ul>
                                        <li>There are no props for this object.</li>
                                    </ul>
                                </div>
                            )
                        }/>
                    </Tab>
                </Tabs>
                <h2>Credits</h2>
                <Credits />
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
