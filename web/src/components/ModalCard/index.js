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
                    <Label>
                      Fechar dia
                      <Select
                        name="close"
                        onChange={handleChange}
                        value={values.close}
                      >
                        <option value="">Selecione</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </Select>
                      <Span>{errors.close}</Span>
                    </Label>
                  </div>
                  <div>
                    <Label>
                      Vence dia
                      <Select
                        name="win"
                        onChange={handleChange}
                        value={values.win}
                      >
                        <option value="">Selecione</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </Select>
                      <Span>{errors.win}</Span>
                    </Label>
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
