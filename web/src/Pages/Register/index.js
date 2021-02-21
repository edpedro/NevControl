import { Link } from 'react-router-dom';
import { Container, Box, Label, Input } from './styles.js';

import Button from '../../components/Button';

function Register() {
  return (
    <Container>
      <Box>
        <h2>Cadastre-se</h2>
        <div>
          <Label htmlFor="name">Seu nome</Label>
          <Input type="text" id="name" name="name" />
        </div>
        <div>
          <Label htmlFor="email">Sua email</Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div>
          <Label htmlFor="password">Sua senha</Label>
          <Input type="password" id="password" name="password" />
        </div>
        <div>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <p>» Já tem conta? Faça Login!</p>
          </Link>
        </div>
        <Button title="Cadastrar" />
      </Box>
    </Container>
  );
}

export default Register;
