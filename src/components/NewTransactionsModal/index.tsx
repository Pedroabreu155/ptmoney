import React, { useState, FormEvent } from 'react';

import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { useTransactionsModal } from '../../hooks/useTransactionsModal';
import { useTransactions } from '../../hooks/useTransactions';

import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton,
} from './styles';

import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';

Modal.setAppElement('#root');
toast.configure();

export function NewTransactionsModal() {
  const { isNewTransactionsModalOpen, handleCloseNewtransactionsModal } =
    useTransactionsModal();

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('deposit');
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState('');

  function clearInputs() {
    setTitle('');
    setType('deposit');
    setAmout(0);
    setCategory('');
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (title === '' || amount === 0 || category === '') {
      toast.warn('Preencha todos os campos');
      return;
    }

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    clearInputs();
    handleCloseNewtransactionsModal();
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmout(Number(event.target.value))}
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
