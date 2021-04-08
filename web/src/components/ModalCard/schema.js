import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  limit: Yup.number().required('Limite é obrigatório'),
  close: Yup.string().required('Fechar dia é obrigatório'),
  win: Yup.string().required('Vencer dia obrigatório!'),
  bank: Yup.string().required('Bandeira obrigatório!'),
});
