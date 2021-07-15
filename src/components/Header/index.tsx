import React from 'react';

import { FiSun, FiMoon } from 'react-icons/fi';

import { Container, Content } from './styles';

import { useTheme } from '../../hooks/useTheme';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
  const { toggleTheme, theme } = useTheme();

  const changeTheme = () => {
    toggleTheme();
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="pt money" />
        <button className="toggleTheme" type="button" onClick={changeTheme}>
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
        <button className="transactionsButton" type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
