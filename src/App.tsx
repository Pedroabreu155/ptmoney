import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createServer } from 'miragejs';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/global';
import { ThemeContextProvider } from './contexts/ThemeContext';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          amount: 420,
          type: 'deposit',
          category: 'Car',
          createdAt: new Date(),
        },
      ];
    });
  },
});

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
