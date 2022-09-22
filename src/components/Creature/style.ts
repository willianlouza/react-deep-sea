import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  height: 40vh;
  width: 50%;
  font-family: Poppins Sans;
`;

interface IIconProps {
  src: string;
}
export const Icon = styled.div<IIconProps>`
  float: left;
  margin: 15px;
  width: 13em;
  height: 13em;
  border-radius: 50%;
  shape-outside: ellipse();
  box-shadow: 0 10px 20px -7px #002;
  overflow: hidden;

  ::after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.src}) center / cover;
    transition: all .5s ease-in-out;
    
  }
  :hover::after{
      transform: scale(1.2);
  }

`;
export const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 1.7em;
`;

const fade = keyframes`
from{
  transform: translateX(-200px);
  opacity: 0;
}
to{
  transform: translateX(0);
  opacity: 1;
}
`;
const anim = css`
  animation: ${fade} 0.5s ease-out;
`;
interface IFadeProps {
  fade: boolean;
}
export const FadeBox = styled.div<IFadeProps>`
  ${(props) => {
    if (props.fade) {
      return anim;
    }
  }}
`;
