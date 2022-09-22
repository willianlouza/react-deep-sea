import styled from "styled-components";
import waves from "../../assets/waves.jpg";

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  left: 25px;
  color: #fff;
  font-family: 'Bold Font';
`;
interface ITextProps {
  size: number;
}
export const MaskText = styled.h1<ITextProps>`
  font-size: ${(props) => props.size}em;
  background: url(${waves}) center / cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  filter: brightness(1.3);
`;
interface ISmallProps {
  size: number;
}
export const SmallText = styled.small<ISmallProps>`
  font-size: ${(props) => props.size}em;
`;
