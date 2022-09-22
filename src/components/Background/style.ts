import styled from "styled-components";
import sea from "../../assets/sea.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60vh
`;

export const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(${sea}) no-repeat center center / cover;
  filter: brightness(0.8);
`;
