import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
