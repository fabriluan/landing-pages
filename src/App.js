import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme } from './style/theme';
import Header from './layout/Header';
import Home from './layout/Home';
import Preparation from './layout/Preparation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <Home />
      <Preparation />
    </ThemeProvider>
  );
}

export default App;
