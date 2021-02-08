import React from "react";

import logo from "../../assets/logo.svg";

import { Container, MenuLogo, Nav, Button, CircleIcon } from "./styles";

function Header() {
  return (
    <Container>
      <MenuLogo>
        <img src={logo} alt="nevcontrol" />
        <h1>NevControl</h1>
      </MenuLogo>
      <Nav>
        <Button className="active">
          <span>Dashboard</span>
        </Button>
        <Button>
          <span>Transações</span>
        </Button>
        <Button>
          <span>Cartão</span>
        </Button>
      </Nav>
      <CircleIcon />
    </Container>
  );
}

export default Header;
