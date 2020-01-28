import * as React from "react";
import "./style.css"


import DraggableSquare from "./DraggableSquare";
import ItemTypes from "./ItemTypes";
import { IGridState } from "../Start/StartComponent";

export class MenuComponent extends React.Component<IGridState, {}> {
  render() {
      let name = this.props.grid.name;
      let height = this.props.grid.height;
      let width = this.props.grid.width;
      name = name.split(" ").join("-");
    return (
      <div className="menu-wrapper">
        <div className="menu-info-wrapper">
          {`path://${name}/${height}x${width}`}
        </div>
        <div className="drag-me">
          <p>Drag me :</p>
          <DraggableSquare type={ItemTypes.SQUARE} />
        </div>
        <div className="left-click">
          <p>Left Click two </p>
          <div
            className="draggable-square"
            style={{cursor:'auto'}}
          ></div>
          <p> to find shortest path</p>
        </div>
      </div>
    );
  }
}
