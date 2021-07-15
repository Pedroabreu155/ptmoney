import React from 'react';

import { FiSun, FiMoon } from 'react-icons/fi';

import { Container, Content } from './styles';

import { useTheme } from '../../hooks/useTheme';

import logoPngImg from '../../assets/images/logo-png.png';

export function Header() {
  const { toggleTheme, theme } = useTheme();

  const changeTheme = () => {
    toggleTheme();
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <img src={logoPngImg} alt="pt money" />
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
