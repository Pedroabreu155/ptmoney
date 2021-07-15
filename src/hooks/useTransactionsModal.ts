import { useContext } from 'react';
import { NewTransactionsModalContext } from '../contexts/NewTransactionsModalContext';

export function useTransactionsModal() {
  const value = useContext(NewTransactionsModalContext);

  return value;
}
