import * as React from "react";
import "./style.css"

import Grid from "../../domain/Grid";
import {IGridState} from "../Start/StartComponent";
import {HardCodeGridService, GridService} from "../../services/GridService"
import { CreatorForm } from "./CreatorForm";
import { CreatorList } from "./CreatorList";

interface ICreatorState {
    width: number;
    height: number;
}

export class CreatorComponent extends React.Component<IGridState, {}> {

         render() {
           return (
             <div className="creator-background">
               <div className="creator-title-wrapper"></div>
               <CreatorList {...this.props} />
               <CreatorForm
                 grid={this.props.grid}
                 setGrid={this.props.setGrid}
               />
             </div>
           );
         }
       }
