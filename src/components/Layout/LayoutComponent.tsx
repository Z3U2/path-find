import * as React from "react";
import "./style.css"
import {DndProvider} from "react-dnd";
import Backend from "react-dnd-html5-backend";

import { GridComponent } from "../Grid/GridComponent";
import { IGridState } from "../Start/StartComponent";
import { MenuComponent } from "../Menu/MenuComponent";

export class LayoutComponent extends React.Component<IGridState, {}> {

  render() {
    return (
      <div className="grid-wrapper">
        <DndProvider backend={Backend}>
          <MenuComponent {...this.props} />
          <GridComponent {...this.props} />
        </DndProvider>
      </div>
    );
  }
}
