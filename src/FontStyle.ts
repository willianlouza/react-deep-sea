import { createGlobalStyle } from "styled-components";
import Poppins_Light from "./assets/fonts/Poppins/Poppins-Light.ttf";
import Poppins_Regular from "./assets/fonts/Poppins/Poppins-Regular.ttf";
import Poppins_Bold from "./assets/fonts/Poppins/Poppins-Bold.ttf";
import Josefin_Light from "./assets/fonts/Josefin_Sans/JosefinSans-Light.ttf";
import Josefin_Regular from "./assets/fonts/Josefin_Sans/JosefinSans-Regular.ttf";
import Josefin_Bold from "./assets/fonts/Josefin_Sans/JosefinSans-Bold.ttf";
import Bold_Font from "./assets/fonts/Bold_Font/BOLDFONT.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Sans';
    src: url(${Poppins_Light});
    font-weight: lighter;
  }
 @font-face {
    font-family: 'Poppins Sans';
    src: url(${Poppins_Regular});
    font-weight: normal;
  }
  @font-face {
    font-family: 'Poppins Sans';
    src: url(${Poppins_Bold});
    font-weight: bold;
  }
  @font-face {
    font-family: 'Josefin Sans';
    src: url(${Josefin_Light});
    font-weight: lighter;
  }
  @font-face {
    font-family: 'Josefin Sans';
    src: url(${Josefin_Regular});
    font-weight: normal;
  }
  @font-face {
    font-family: 'Josefin Sans';
    src: url(${Josefin_Bold});
    font-weight: bold;
  }
  @font-face {
    font-family: 'Bold Font';
    src: url(${Bold_Font});
  }
`;

export default FontStyles;
