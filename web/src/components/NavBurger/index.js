import React, { useState } from 'react';

import { Container, StyledBurger, Nav, Button, CircleIcon } from './styles';

function NavBurger() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={open}>
        <Button className="active">
          <span>Dashboard</span>
        </Button>
        <Button>
          <span>Transações</span>
        </Button>
        <Button>
          <span>Cartão</span>
        </Button>
        <CircleIcon />
      </Nav>
    </Container>
  );
}

export default NavBurger;
