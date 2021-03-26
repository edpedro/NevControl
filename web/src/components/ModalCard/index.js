import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { Formik, Form } from 'formik';

import { Context } from '../../Context/Context';

import schema from './schema';

import {
  Grid,
  Input,
  Label,
  GridName,
  GridLimit,
  GridDate,
  Select,
  GridInstitution,
  Span,
} from './styles';

import Button from '../Button';

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

function ModalCard({ isOpen, onChange, id }) {
  const { handleCreateCreditCard, updateCreditCard } = useContext(Context);
  const [data, setData] = useState({});

  useEffect(() => {
    if (updateCreditCard && id) {
      setData(updateCreditCard);
    }
  }, [id, updateCreditCard]);

  function closeModal() {
    onChange(false);
  }
  async function handleSubmit(values) {
    handleCreateCreditCard(values, id);

    onChange(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Card"
      >
        <Grid>
          <h2>Adicionar Cartão de Crédito</h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: data.name || '',
              limit: data.limit || '',
              close: data.close || '',
              win: data.win || '',
              bank: data.bank || '',
            }}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
          >
            {({ handleChange, values, errors, handleBlur }) => (
              <Form>
                <GridName>
                  <Label>Nome da conta</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                  />
                  <Span>{errors.name}</Span>
                </GridName>
                <GridLimit>
                  <div>
                    <Label>Limite</Label>
                    <Input
                      type="number"
                      name="limit"
                      onChange={handleChange}
                      value={values.limit}
                      onBlur={handleBlur}
                    />
                    <Span>{errors.limit}</Span>
                  </div>
                </GridLimit>
                <GridDate>
                  <div>
                    <Label>Fechar dia</Label>
                    <Input
                      type="month"
                      name="close"
                      width={240}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.close}
                    />
                    <Span>{errors.close}</Span>
                  </div>
                  <div>
                    <Label>Vence dia</Label>
                    <Input
                      type="month"
                      name="win"
                      width={240}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.win}
                    />
                    <Span>{errors.win}</Span>
                  </div>
                </GridDate>
                <GridInstitution>
                  <Label>Bandeira/Instituição</Label>
                  <Select
                    name="bank"
                    width={490}
                    onChange={handleChange}
                    value={values.bank}
                    onBlur={handleBlur}
                  >
                    <option value=""></option>
                    <option value="nubank">Nubank</option>
                    <option value="santander">Santander</option>
                    <option value="itau">itau</option>
                  </Select>
                  <Span>{errors.bank}</Span>
                </GridInstitution>
                <Button title="Adicionar" />
              </Form>
            )}
          </Formik>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalCard;
