import React from 'react';
import ReactDOM from 'react-dom';
import GrotHello from "../src/GrotHello";
import GrotTable from '../src/GrotTable';
import GrotPanel from '../src/GrotPanel';
import GrotObjectBox from '../src/GrotObjectBox';

ReactDOM.render(<GrotHello />, document.getElementById("header"));
ReactDOM.render(<GrotTable />, document.getElementById("table"));
ReactDOM.render(<GrotPanel header="GrotPanel"/>, document.getElementById("panel"));
ReactDOM.render(<GrotObjectBox header="GrotObjectBox" />, document.getElementById("objectBox"));
