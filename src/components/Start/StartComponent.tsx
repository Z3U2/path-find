import * as React from "react";

import { LayoutComponent } from "../Layout/LayoutComponent";
import { CreatorComponent } from "../Creator/CreatorComponent"
import Grid from "../../domain/Grid"

export interface IGridState {
    grid: Grid;
    setGrid(grid: Grid): void;
}

export class StartComponent extends React.Component<{}, {grid:Grid}> {
  
    constructor(props:{}) {
        super(props);
        this.state= {
            grid: null
        }
        this.setGrid = this.setGrid.bind(this)
    }

    setGrid(grid: Grid) {
        this.setState({
            grid: grid
        })
    }

  render() {
    return (
      <div>
        {!this.state.grid && (
          <CreatorComponent grid={this.state.grid} setGrid={this.setGrid} />
        )}
        {this.state.grid && (
          <LayoutComponent grid={this.state.grid} setGrid={this.setGrid} />
        )}
      </div>
    );
  }
}
