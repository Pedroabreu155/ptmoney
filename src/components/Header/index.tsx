import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { WiMoonAltFirstQuarter } from 'react-icons/wi';

import { Container, Content } from './styles';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="pt money" />
        <IconButton
          variant="outline"
          colorScheme="orange"
          fontSize="1.5rem"
          aria-label="Mudar tema"
          icon={<WiMoonAltFirstQuarter />}
        />
        <button className="transactionsButton" type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
