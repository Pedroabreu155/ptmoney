import React from 'react';

import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionsModal } from '../../components/NewTransactionsModal';

import { NewTransactionsModalProvider } from '../../contexts/NewTransactionsModalContext';

export function Home() {
  return (
    <NewTransactionsModalProvider>
      <Header />
      <NewTransactionsModal />
      <Dashboard />
    </NewTransactionsModalProvider>
  );
}
