import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme } from './style/theme';
import Header from './layout/Header';
import Home from './layout/Home';
import Preparation from './layout/Preparation';
import Benefit from './layout/Benefit';
// import Shope from './layout/Shope';
import Plans from './layout/Plans';
import Faqs from './layout/Faqs';
import Footer from './layout/Footer';
import About from './layout/About';
import Shope from './layout/Shope';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <Home />
      <Preparation />
      <Benefit />
      <About />
      <Shope />
      <Plans />
      <Faqs />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
