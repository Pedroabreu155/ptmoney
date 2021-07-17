import React from 'react';

import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionsModal } from '../../components/NewTransactionsModal';

import { NewTransactionsModalProvider } from '../../contexts/NewTransactionsModalContext';
import { TransactionsProvider } from '../../contexts/TransactionsContext';

export function Home() {
  return (
    <NewTransactionsModalProvider>
      <Header />
      <TransactionsProvider>
        <NewTransactionsModal />
        <Dashboard />
      </TransactionsProvider>
    </NewTransactionsModalProvider>
  );
}
