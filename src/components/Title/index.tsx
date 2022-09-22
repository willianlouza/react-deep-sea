import React from "react";
import { Container, MaskText, SmallText } from './style';
export default class Title extends React.Component {

  render(): React.ReactNode {
    return (
      <Container>
        <MaskText size={4}>
          CRIATURAS
          <SmallText size={.5}> DAS</SmallText>
          <br />
          PROFUNDEZAS
        </MaskText>
      </Container>
    )
  }
}