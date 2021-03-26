import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  limit: Yup.number().required('Limite é obrigatório'),
  close: Yup.date().required('Fechar dia é obrigatório'),
  win: Yup.date().required('Vencer dia obrigatório!'),
  bank: Yup.string().required('Bandeira obrigatório!'),
});
