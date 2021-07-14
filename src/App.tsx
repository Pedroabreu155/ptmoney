import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </ChakraProvider>
    </>
  );
}
