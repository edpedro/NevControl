import { Container } from './styles.js';

function Button({ title }) {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  );
}

export default Button;
