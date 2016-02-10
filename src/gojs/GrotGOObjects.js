import go from 'gojs';

/**
 * GrotGOObjects
 *
 * GrotGOObjects contains several different GoJS objects.
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com
 *
 */

let GO = go.GraphObject.make;

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
export function SimpleBox(){
    return GO(go.Node, "Auto",
        GO(go.Shape, "RoundedRectangle", {
                fill: "#ffffff"
            }
        ),
        GO(go.TextBlock,
            { margin: 3 },
            new go.Binding("text", "title"))
        );
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
export function ObjectWithProps(){

    return GO(go.Node, "Spot", {
            resizable: true
        },
        GO(go.Panel, "Auto",
            GO(go.Shape, "Rectangle", {
                fill: "#2FAC66"
            }),
            GO(go.Panel, "Table", {
                    defaultAlignment: go.Spot.Left
                },
                new go.Binding("itemArray", "properties").makeTwoWay(), {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate:
                        GO(go.Panel, "TableRow", {
                                stretch: go.GraphObject.Horizontal
                            },
                            GO(go.TextBlock,
                                new go.Binding("text","prop").makeTwoWay(), {
                                column: 0,
                                editable: true,
                                margin: new go.Margin (0, 15, 10, 15)
                            }),
                            GO(go.TextBlock, new go.Binding("text","value").makeTwoWay(), {
                                column: 1,
                                editable: true,
                                margin: new go.Margin (0, 15, 10, 15)
                            })
                        )
                },
                GO(go.Panel, "TableRow",
                    { isPanelMain: true },
                    GO(go.TextBlock, new go.Binding("text","title").makeTwoWay(),
                        {
                            column: 0,
                            columnSpan: 2,
                            editable: true,
                            stretch: go.GraphObject.Horizontal,
                            margin: 2,
                            font: "bold 10pt sans-serif",

                        }
                    )
                )
            )
        )
    );
}

/**
 * The default export.
 */
export default {
    ObjectWithProps,
    SimpleBox
};
