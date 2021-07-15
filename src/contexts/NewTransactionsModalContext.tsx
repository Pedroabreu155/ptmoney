import React, { useState, createContext, ReactNode } from 'react';

type NewTransactionsModalProviderProps = {
  children: ReactNode;
};

type NewTransactionsModalContextType = {
  isNewTransactionsModalOpen: boolean;
  handleOpenNewtransactionsModal: () => void;
  handleCloseNewtransactionsModal: () => void;
};

export const NewTransactionsModalContext =
  createContext<NewTransactionsModalContextType>(
    {} as NewTransactionsModalContextType
  );

export function NewTransactionsModalProvider(
  props: NewTransactionsModalProviderProps
) {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewtransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewtransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <NewTransactionsModalContext.Provider
      value={{
        isNewTransactionsModalOpen,
        handleOpenNewtransactionsModal,
        handleCloseNewtransactionsModal,
      }}
    >
      {props.children}
    </NewTransactionsModalContext.Provider>
  );
}
