import React, { useContext, useState } from 'react';

import { Context } from '../../Context/Context';

import { useLocation, Link } from 'react-router-dom';

import { Container, StyledBurger, Nav, Button, CircleIcon } from './styles';

function NavBurger() {
  const { handleLogout } = useContext(Context);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function Logout() {
    handleLogout();
  }

  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={open}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button className={location.pathname === '/' && 'active'}>
            <span>Dashboard</span>
          </Button>
        </Link>
        <Link to="/transacao" style={{ textDecoration: 'none' }}>
          <Button className={location.pathname === '/transacao' && 'active'}>
            <span>Transações</span>
          </Button>
        </Link>
        <Link to="/cartao" style={{ textDecoration: 'none' }}>
          <Button className={location.pathname === '/cartao' && 'active'}>
            <span>Cartão</span>
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }} onClick={Logout}>
          <CircleIcon />
        </Link>
      </Nav>
    </Container>
  );
}

export default NavBurger;
