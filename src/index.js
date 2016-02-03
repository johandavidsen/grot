require("babel-core/register")({
    presets: [
        "stage-0",
        "react",
        "es2015"
    ]
});

import GrotHello from "./GrotHello";
import GrotTable from './GrotTable';
import GrotPanel from './GrotPanel';
import GrotObjectBox from './GrotObjectBox';

export default{
    GrotHello,
    GrotTable,
    GrotPanel,
    GrotObjectBox
};
