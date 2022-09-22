import React from "react";
import { Container, Image } from "./style";

interface IProps{
  children:any;
}
export default class Background extends React.Component<IProps>{
 constructor(props:IProps){
  super(props);
 }
  render(): React.ReactNode {
      return(
        <Container>
          <Image />
          {this.props.children}
        </Container>
      )
  }
}