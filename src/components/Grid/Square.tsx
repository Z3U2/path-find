import * as React from "react";
import { IGrid } from "../Start/StartComponent";
import ISquareDetails from "../../domain/ISquareDetails";

interface IDetails {
    details : ISquareDetails
}

export class Square extends React.Component<IDetails, {}> {

    details: ISquareDetails;
    constructor(props:IDetails) {
        super(props);
        this.details= this.props.details
    }
  render() {
    return <div className={`${this.details ? "filled-square" : "square"}`}></div>;
  }
}
