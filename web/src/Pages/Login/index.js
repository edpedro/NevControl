import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Label, Input } from './styles.js';

import { Context } from '../../Context/Context';

import Button from '../../components/Button';

function Login() {
  const { handleLogin } = useContext(Context);
  const [data, setData] = useState({ email: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  async function handleSubmint(event) {
    event.preventDefault();
    handleLogin(data);
  }

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmint}>
          <h2>Acesse sua conta</h2>
          <div>
            <Label htmlFor="email">Seu email</Label>
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
            <Link to="/resgister" style={{ textDecoration: 'none' }}>
              <p>» Ainda não possui conta? Faça o cadastro agora mesmo!</p>
            </Link>
          </div>
          <Button type="submit" title="Entrar" />
        </form>
      </Box>
    </Container>
  );
}

export default Login;
