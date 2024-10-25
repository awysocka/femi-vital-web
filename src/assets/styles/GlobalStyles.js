import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
  }

  h1,h2 {
    font-family: "Cormorant", serif;
    font-weight: 400;
    line-height: 1.2;
  } 

 h3,h4,h5,h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
    font-family: "Montserrat", sans-serif;
  }

  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  }

  a {
    text-decoration: none;
    transition: all .3s ease;
  }
`;
