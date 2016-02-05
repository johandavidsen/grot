import React from 'react';
import ReactDOM from 'react-dom';
import GrotHello from "./Demo";

ReactDOM.render(<GrotHello />, document.getElementById("demo"));

// ReactDOM.render(<GrotObjectBox header="GrotObjectBox" expanded={false} />, document.getElementById("objectBox-demo"));
// ReactDOM.render(<GrotJSONBox header="GrotJSONBox" contents={ JSON.stringify( tabledata, null, "\t" ) } />, document.getElementById("objectJSONBox-demo"));
// ReactDOM.render(<GrotCredits />, document.getElementById("credits-demo"));
