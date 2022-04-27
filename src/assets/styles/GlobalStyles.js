import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.2;
  }

  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  }

  a {
    text-decoration: none;
  }

  a:focus {
    outline: ${({ theme }) => theme.outline};
  }
`;
