import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/global';
import { ThemeContextProvider } from './contexts/ThemeContext';

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
