import React from 'react';
import ReactDOM from 'react-dom';
import GrotHello from "../src/GrotHello";
import GrotTable from '../src/GrotTable';
import GrotPanel from '../src/GrotPanel';
import GrotObjectBox from '../src/GrotObjectBox';
import GrotCredits from '../src/GrotCredits';

ReactDOM.render(<GrotHello />, document.getElementById("header"));
ReactDOM.render(<GrotPanel header="GrotHello" expanded={false} children={(<div><h3>GrotTable</h3><h4>Demonstration</h4><div id="table"></div><h4>Parameters</h4></div>)}/>, document.getElementById("GrotHello"));
ReactDOM.render(<GrotPanel header="GrotPanel" expanded={false} children={(<div><h3>GrotPanel</h3><h4>Demonstration</h4><div id="panel"></div><h4>Parameters</h4><ul><li>Header</li><li>Expanded</li><li>Children</li></ul></div>)}/>, document.getElementById("GrotPanel"));
ReactDOM.render(<GrotPanel header="GrotObjectBox" expanded={false} children={(<div><h3>GrotObjectBox</h3><h4>Demonstration</h4><div id="objectBox"></div><h4>Parameters</h4><ul><li>Header</li><li>Expanded</li></ul></div>)}/>, document.getElementById("GrotObjectBox"));
ReactDOM.render(<GrotTable />, document.getElementById("table"));
ReactDOM.render(<GrotPanel header="GrotPanel" expanded={false}/>, document.getElementById("panel"));
ReactDOM.render(<GrotObjectBox header="GrotObjectBox" expanded={false} />, document.getElementById("objectBox"));
ReactDOM.render(<GrotCredits />, document.getElementById("GrotCredits"));
