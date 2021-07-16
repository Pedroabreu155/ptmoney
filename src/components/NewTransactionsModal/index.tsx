import React, { useState } from 'react';

import Modal from 'react-modal';

import { useTransactionsModal } from '../../hooks/useTransactionsModal';

import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton,
} from './styles';

import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';

Modal.setAppElement('#root');

export function NewTransactionsModal() {
  const { isNewTransactionsModalOpen, handleCloseNewtransactionsModal } =
    useTransactionsModal();

  const [type, setType] = useState('deposit');

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

        <TransactionTypeContainer>
          <TransactionTypeButton
            onClick={() => setType('deposit')}
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            onClick={() => setType('withdraw')}
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
