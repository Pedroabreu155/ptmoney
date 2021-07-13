import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="pt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
