import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Box, Label, Input } from './styles.js';

import { Context } from '../../Context/Context';

import Button from '../../components/Button';

function Register() {
  const { handleRegister } = useContext(Context);
  const [data, setData] = useState({ name: '', email: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  async function handleSubmint(event) {
    event.preventDefault();
    handleRegister(data);
  }

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmint}>
          <h2>Cadastre-se</h2>
          <div>
            <Label htmlFor="name">Seu nome</Label>
            <Input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email">Sua email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Sua senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>
              <p>» Já tem conta? Faça Login!</p>
            </Link>
          </div>
          <Button type="submit" title="Cadastrar" />
        </form>
      </Box>
    </Container>
  );
}

export default Register;
