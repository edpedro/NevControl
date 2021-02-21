import React, { useState } from 'react';

import { useLocation, Link } from 'react-router-dom';

import { Container, StyledBurger, Nav, Button, CircleIcon } from './styles';

function NavBurger() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

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
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <CircleIcon />
        </Link>
      </Nav>
    </Container>
  );
}

export default NavBurger;
