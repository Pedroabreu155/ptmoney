import React from 'react';

import Modal from 'react-modal';

import { useTransactionsModal } from '../../hooks/useTransactionsModal';

import { Container } from './styles';

Modal.setAppElement('#root');

export function NewTransactionsModal() {
  const { isNewTransactionsModalOpen, handleCloseNewtransactionsModal } =
    useTransactionsModal();

  return (
    <Modal
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewtransactionsModal}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <Container>
        <h2>Nova transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
