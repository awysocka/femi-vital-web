import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import '../assets/styles/normalize.css';

export const Layout = ({ children }) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main>
          {children}
        </main>
      </ThemeProvider>
    </>
  );
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };