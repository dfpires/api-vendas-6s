import { createGlobalStyle } from "styled-components";

import imgBackground from '../assets/background.svg' 

// criar nossos estilos globais
export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
      // 16px = 1 rem
    @media (max-width: 1080px) { // pc
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) { // celular
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`