import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import { Container, Box, Label, Input } from './styles.js';

import { Context } from '../../Context/Context';

import Button from '../../components/Button';

const { REACT_APP_CLIENT_ID } = process.env;

function Register() {
  const { handleRegister, handleLoginGoogle } = useContext(Context);
  const [data, setData] = useState({ name: '', email: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  async function handleSubmint(event) {
    event.preventDefault();
    handleRegister(data);
  }

  function onSignIn(googleUser) {
    const id_token = googleUser.tokenId;

    if (!id_token) {
      return;
    }
    handleLoginGoogle({ googleToken: id_token });
  }

  return (
    <Container>
      <Box>
        <GoogleLogin
          clientId={REACT_APP_CLIENT_ID}
          buttonText="Acessa com o Google"
          onSuccess={onSignIn}
          onFailure={onSignIn}
          cookiePolicy={'single_host_origin'}
          className="button-google"
        />
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
