import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Label, Input } from './styles.js';
import GoogleLogin from 'react-google-login';

import { Context } from '../../Context/Context';

import Button from '../../components/Button';

function Login() {
  const { handleLogin, handleLoginGoogle } = useContext(Context);
  const [data, setData] = useState({ email: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  async function handleSubmint(event) {
    event.preventDefault();
    handleLogin(data);
  }

  function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;

    if (!id_token) {
      return;
    }

    handleLoginGoogle({ googleToken: id_token });
  }

  return (
    <>
      <Container>
        <Box>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Continuar com o Google"
            onSuccess={onSignIn}
            onFailure={onSignIn}
            cookiePolicy={'single_host_origin'}
            className="button-google"
          />
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
              <Link
                to="/resgister"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <p>» Ainda não possui conta? Faça o cadastro agora mesmo!</p>
              </Link>
            </div>
            <Button type="submit" title="Entrar" />
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Login;
