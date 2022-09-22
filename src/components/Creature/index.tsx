import React from "react";
import { Container, FadeBox, Icon, Title } from "./style";
interface IProps{
  anim:boolean;
  name:string;
  description:string;
  src:string;
}
export default class Creature extends React.Component<IProps> {
  constructor(props:IProps){
    super(props);
  }
  render(): React.ReactNode {
    return (
      <Container>
        <FadeBox fade={this.props.anim}>
          <Icon src={this.props.src} />
          <Title>{this.props.name}</Title>
          <p style={{fontSize: '.8em', textAlign: 'center'}}>{this.props.description}</p>
        </FadeBox>
      </Container>
    )
  }
}

//Image Title
//      Description