"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleBox = SimpleBox;
exports.ObjectWithProps = ObjectWithProps;

var _gojs = require("gojs");

var _gojs2 = _interopRequireDefault(_gojs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GrotGOObjects
 *
 * GrotGOObjects contains several different GoJS objects.
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com
 *
 */

var GO = _gojs2.default.GraphObject.make;

/**
 * SimpleBox
 *
 * This is a very simple text box. The box has a binding to the title property
 * in the model.
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
function SimpleBox() {
    return GO(_gojs2.default.Node, "Auto", GO(_gojs2.default.Shape, "RoundedRectangle", {
        fill: "#ffffff"
    }), GO(_gojs2.default.TextBlock, { margin: 3 }, new _gojs2.default.Binding("text", "title")));
}

/**
 * ObjectWithProps
 *
 * The ObjectWithProps is a box with a title and a property list. There is a
 * binding to the model properties:
 *
 * properties - Expected an array with objects, which contains prop and value.
 * title - Expected a string.
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
function ObjectWithProps() {

    return GO(_gojs2.default.Node, "Spot", {
        resizable: true
    }, GO(_gojs2.default.Panel, "Auto", GO(_gojs2.default.Shape, "Rectangle", {
        fill: "#2FAC66"
    }), GO(_gojs2.default.Panel, "Table", {
        defaultAlignment: _gojs2.default.Spot.Left
    }, new _gojs2.default.Binding("itemArray", "properties").makeTwoWay(), {
        defaultAlignment: _gojs2.default.Spot.Left,
        itemTemplate: GO(_gojs2.default.Panel, "TableRow", {
            stretch: _gojs2.default.GraphObject.Horizontal
        }, GO(_gojs2.default.TextBlock, new _gojs2.default.Binding("text", "prop").makeTwoWay(), {
            column: 0,
            editable: true,
            margin: new _gojs2.default.Margin(0, 15, 10, 15)
        }), GO(_gojs2.default.TextBlock, new _gojs2.default.Binding("text", "value").makeTwoWay(), {
            column: 1,
            editable: true,
            margin: new _gojs2.default.Margin(0, 15, 10, 15)
        }))
    }, GO(_gojs2.default.Panel, "TableRow", { isPanelMain: true }, GO(_gojs2.default.TextBlock, new _gojs2.default.Binding("text", "title").makeTwoWay(), {
        column: 0,
        columnSpan: 2,
        editable: true,
        stretch: _gojs2.default.GraphObject.Horizontal,
        margin: 2,
        font: "bold 10pt sans-serif"

    })))));
}

/**
 * The default export.
 */
exports.default = {
    ObjectWithProps: ObjectWithProps,
    SimpleBox: SimpleBox
};