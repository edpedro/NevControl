import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import logo from '../../assets/logo.svg';

import NavBurger from '../NavBurger';

import { Container, MenuLogo } from './styles';

function Header() {
  const { authenticated } = useContext(Context);
  return (
    <Container>
      <MenuLogo>
        <img src={logo} alt="nevcontrol" />
        <h1>NevControl</h1>
      </MenuLogo>
      {authenticated && <NavBurger />}
    </Container>
  );
}

export default Header;
