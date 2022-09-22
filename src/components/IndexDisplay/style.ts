import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  right: 50px;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  font-family: Josefin Sans;
  font-weight: bold;
  font-size: 3em;
  color: #fff;
  text-align: center;
`;

interface IFadeProps {
  y: number;
}
export const Fade = styled.div<IFadeProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  line-height: 100px;
  transform: translateY(${(props) => props.y}px);
  transition: transform 1s ease-out;
`;