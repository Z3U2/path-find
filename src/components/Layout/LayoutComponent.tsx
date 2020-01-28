import * as React from "react";

import { GridComponent } from "../Grid/GridComponent";
import Grid from "../../domain/Grid"
import { IGridState } from "../Start/StartComponent";
import { MenuComponent } from "../Menu/MenuComponent";

export class LayoutComponent extends React.Component<IGridState, {}> {

  render() {
    return (
      <div className="grid-wrapper">
        <MenuComponent />
        <GridComponent {...this.props} />
      </div>
    );
  }
}
