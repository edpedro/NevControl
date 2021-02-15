import React from 'react';

import logo from '../../assets/logo.svg';

import NavBurger from '../NavBurger';

import { Container, MenuLogo } from './styles';

function Header() {
  return (
    <Container>
      <MenuLogo>
        <img src={logo} alt="nevcontrol" />
        <h1>NevControl</h1>
      </MenuLogo>
      <NavBurger />
    </Container>
  );
}

export default Header;
