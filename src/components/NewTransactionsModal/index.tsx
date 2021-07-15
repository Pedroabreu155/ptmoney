import React from 'react';

import Modal from 'react-modal';

import { useTransactionsModal } from '../../hooks/useTransactionsModal';

export function NewTransactionsModal() {
  const { isNewTransactionsModalOpen, handleCloseNewtransactionsModal } =
    useTransactionsModal();

  return (
    <Modal
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewtransactionsModal}
    >
      <h2>Nova transação</h2>
    </Modal>
  );
}
