import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useTransactions() {
  const value = useContext(TransactionsContext);
  return value;
}
