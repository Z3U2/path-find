import * as React from "react";


import DraggableSquare from "./DraggableSquare";
import ItemTypes from "./ItemTypes";
export class MenuComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="menu-wrapper">
        <div className="drag-me">
          <p>Drag me :</p>
          <DraggableSquare type={ItemTypes.SQUARE} />
        </div>
      </div>
    );
  }
}
