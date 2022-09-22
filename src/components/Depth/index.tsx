import React from "react";
import { Container } from "./style";

interface IProps{
  value:number;
}
export default class Depth extends React.Component<IProps>{
  constructor(props:IProps){
    super(props);
  }
  render(): React.ReactNode {
      return(
        <Container>{this.props.value} M</Container>
      )
  }
}