import React from 'react';

import Modal from 'react-modal';

import { useTransactionsModal } from '../../hooks/useTransactionsModal';

import { Container } from './styles';

import closeImg from '../../assets/images/close.svg';

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
      <button
        type="button"
        onClick={handleCloseNewtransactionsModal}
        className="close-modal-btn"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
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
