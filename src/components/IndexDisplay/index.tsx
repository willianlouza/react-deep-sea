import React from "react";
import { Container, Fade} from "./style";

interface IProps {
  max:number;
  y: number;
 }
export default class IndexDisplay extends React.Component<IProps>{
  elements: React.ReactNode[] = [];
  constructor(props: IProps) {
    super(props);
    for(let i = 0; i< props.max; i++){
      this.elements.push(
        <h1 key={i}>{i+1}</h1>
      )
    }
  }
  render(): React.ReactNode {
    return (
      <Container>
          <Fade y={this.props.y}>
            {this.elements}
          </Fade>
        <small>/{this.props.max}</small>
      </Container>
    )
  }
}