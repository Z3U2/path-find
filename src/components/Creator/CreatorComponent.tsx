import * as React from "react";
import "./style.css"

import Grid from "../../domain/Grid";
import { IGridState } from "../Start/IGridState";
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
               <div className="creator-title-wrapper">
                 <h1>
                   path<span>://</span>
                 </h1>
               </div>
               <div className="creator-content-wrapper">
                 <CreatorList {...this.props} />
                 <CreatorForm
                   grid={this.props.grid}
                   setGrid={this.props.setGrid}
                 />
               </div>
             </div>
           );
         }
       }
