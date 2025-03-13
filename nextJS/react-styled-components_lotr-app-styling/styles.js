import { Lora, Open_Sans } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const openSans = Open_Sans({
  subsets: ["latin"]
});
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    font-family: ${lora.style.fontFamily}; 
  }
`;
