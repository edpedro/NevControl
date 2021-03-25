import * as Yup from 'yup';

export default Yup.object().shape({
  description: Yup.string().required('Descrição é obrigatório'),
  value: Yup.number().required('Valor é obrigatório'),
  data: Yup.date().required('Data é obrigatório'),
  operation: Yup.string().required('Conta/Cartão obrigatório!'),
  category: Yup.string().required('Categoria obrigatório!'),
});
