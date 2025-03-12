import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    background-color: #992222;
    color: #fff;
    margin: 0 auto;
  
  }
  main{
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  a{
    color: #ee99;
  }
`;
