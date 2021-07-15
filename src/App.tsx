import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContextProvider } from './contexts/ThemeContext';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeContextProvider>
  );
}
