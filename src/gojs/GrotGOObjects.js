import go from 'gojs';

/**
 * GrotGOObjects
 *
 *
 * @since 0.1.9
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com
 *
 */

let GO = go.GraphObject.make;

export function SimpleBox(){
    return GO(go.Node, "Auto",
        GO(go.Shape, "RoundedRectangle", {
                stroke: "#fff"
            }
        ),
        GO(go.TextBlock,
            { margin: 3 },
            new go.Binding("text", "title"))
        );
}

export function ObjectWithProps(){

    return GO(go.Node, "Spot", {
            resizable: true
        },
        GO(go.Panel, "Auto",
            GO(go.Shape, "Rectangle", {
                fill: "#2FAC66"
            }),
            GO(go.Panel, "Table", {
                    margin: 4
                },
                GO(go.RowColumnDefinition, {
                    column: 0,
                    stretch: go.GraphObject.Horizontal,
                    alignment: go.Spot.Left
                }),
                GO(go.TextBlock, {
                        row: 0,
                        column: 0,
                        alignment: go.Spot.Left,
                        stroke: "#fff",
                        editable: true,
                        isMultiline: false
                    },
                    new go.Binding("text","title")
                ),
                GO(go.TextBlock, "a", {
                    row: 1,
                    column: 0
                    }
                ),
                GO(go.TextBlock, "a", {
                   row: 1,
                   column: 1
                   }
               )
            )
        )
    );
}

export default {
    ObjectWithProps,
    SimpleBox
};
