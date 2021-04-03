import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { Formik, Form } from 'formik';

import schema from './schema';

import { Context } from '../../Context/Context';

import {
  Grid,
  Input,
  Label,
  GridDescription,
  GridValueDate,
  GridCategoryAccountCard,
  Select,
  GridType,
  Span,
} from './styles';

import Button from '../Button';
import { TruckFlatbed } from '@styled-icons/bootstrap';

const recipe = ['Empréstimo', 'Investimento', 'Outra receita', 'Salario'];
const expense = [
  'Alimentação',
  'Assinaturas e serviços',
  'Bares e restaurantes',
  'Casa',
  'Compras',
  'Cuidados pessoais',
  'Dívidas e empréstimos',
  'Educação',
  'Família e filhos',
  'Impostos e Taxas',
  'Investimentos',
  'Lazer e hobbies',
  'Mercado',
  'Pagamento de fatura',
  'Pets',
  'Roupas',
  'Saúde',
];

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '600px',
    height: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalTransaction({ isOpen, onChange, option, id }) {
  const {
    handleCreateTransaction,
    updateTransaction,
    creditCards,
    stateUpdateCreditCard,
  } = useContext(Context);

  const [data, setData] = useState({});

  useEffect(() => {
    if (updateTransaction && id) {
      setData(updateTransaction);
    }
  }, [id, updateTransaction]);

  function closeModal() {
    onChange(false);
  }

  function handleSubmit(values) {
    console.log(values);
    if (
      values.operation === 'cartao' &&
      (values.accountCard === null || values.accountCard === '')
    ) {
      onChange(true);
      toast.error('Favor preencher campo Bandeira');
      return;
    }
    handleCreateTransaction(values, id);

    stateUpdateCreditCard(true);

    onChange(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Transaction"
      >
        <Grid option={option}>
          <h2>Nova {option}</h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              description: data.description || '',
              value: data.value || '',
              data: data.data || '',
              category: data.category || '',
              operation: data.operation || '',
              accountCard: data.accountCard || null,
              type: option,
            }}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <GridDescription>
                  <Label>Descrição</Label>
                  <Input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                  />
                  <Span>{errors.description}</Span>
                </GridDescription>
                <GridValueDate>
                  <div>
                    <Label>Valor</Label>
                    <Input
                      type="number"
                      name="value"
                      step="0.01"
                      width={240}
                      onChange={handleChange}
                      value={values.value}
                    />

                    <Span>{errors.value}</Span>
                  </div>
                  <div>
                    <Label>Data</Label>
                    <Input
                      type="date"
                      name="data"
                      width={240}
                      onChange={handleChange}
                      value={values.data}
                    />
                    <div>
                      <Span>{errors.data}</Span>
                    </div>
                  </div>
                </GridValueDate>
                <GridCategoryAccountCard>
                  <div>
                    <Label>
                      Conta/cartão
                      <Select
                        name="operation"
                        onChange={handleChange}
                        value={values.operation}
                      >
                        <option value="">Selecione</option>
                        <option value="conta">Conta</option>
                        {creditCards && creditCards.length > 0 && (
                          <option value="cartao">Cartão</option>
                        )}
                      </Select>
                      <Span>{errors.operation}</Span>
                    </Label>
                  </div>
                  <div>
                    <Label>
                      Categoria
                      <Select
                        name="category"
                        onChange={handleChange}
                        value={values.category}
                      >
                        <option value="">Selecione</option>
                        {option === 'receita'
                          ? recipe.map((name) => (
                              <option key={name} value={name}>
                                {name}
                              </option>
                            ))
                          : expense.map((name) => (
                              <option key={name} value={name}>
                                {name}
                              </option>
                            ))}
                      </Select>
                      <Span>{errors.category}</Span>
                    </Label>
                  </div>
                </GridCategoryAccountCard>
                {values.operation === 'cartao' && (
                  <GridType>
                    <Label>Bandeira</Label>
                    <Select
                      name="accountCard"
                      width={490}
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      {creditCards &&
                        creditCards.map((creditCard) => (
                          <option key={creditCard._id} value={creditCard._id}>
                            {creditCard.bank}
                          </option>
                        ))}
                    </Select>
                    <Span>{errors.accountCard}</Span>
                  </GridType>
                )}
                <Button title="Adicionar" />
              </Form>
            )}
          </Formik>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalTransaction;
