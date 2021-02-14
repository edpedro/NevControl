import {
  Container,
  Box,
  Recipe,
  Content,
  IconPlus,
  Expense,
  IconMinus,
} from './styles';

function QuickAccess() {
  return (
    <Container>
      <h3>Acesso Rápido</h3>
      <Box>
        <Recipe>
          <Content>
            <IconPlus />
            <h3>RECEITA</h3>
          </Content>
        </Recipe>
        <Expense>
          <Content>
            <IconMinus />
            <h3>DESPESA</h3>
          </Content>
        </Expense>
      </Box>
    </Container>
  );
}

export default QuickAccess;
