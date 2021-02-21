import { Container, Box, Label, Input } from './styles.js';

import Button from '../../components/Button';

function Login() {
  return (
    <Container>
      <Box>
        <h2>Acesse sua conta</h2>
        <div>
          <Label htmlFor="email">Seu email</Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div>
          <Label htmlFor="password">Sua senha</Label>
          <Input type="password" id="password" name="password" />
        </div>
        <div>
          <p>» Ainda não possui conta? Faça o cadastro agora mesmo!</p>
        </div>
        <Button title="Entrar" />
      </Box>
    </Container>
  );
}

export default Login;
