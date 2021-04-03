import React, { useContext, useState, useEffect } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import ModalTransaction from '../ModalTransaction';

import { Table, Tbody, IconEdit, IconDelet } from './styles';

function TableTransaction({ datas, dateCurrent }) {
  const {
    handleRemoveTransaction,
    handleShowTransaction,
    stateUpdateCreditCard,
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const [option, setOpen] = useState('');
  const [id, setId] = useState('');

  function handleIsOpen(option, id) {
    setOpen(option);
    setIsOpen(!isOpen);
    setId(id);
    handleShowTransaction(id);
  }

  function handleRemove(id) {
    handleRemoveTransaction(id);
    stateUpdateCreditCard(true);
  }

  return (
    <>
      <Table>
        {datas && datas.length > 0 ? (
          datas.map((transaction, key) => (
            <Tbody key={key}>
              <tr className={transaction.type === 'despesa' ? 'active' : ''}>
                <td>{FormatDate(transaction.data)}</td>
                <td>{FormatUppercase(transaction.operation)}</td>
                <td>{transaction.category}</td>
                <td>
                  R${' '}
                  {transaction.type === 'despesa'
                    ? '-' + FormatCurrency(transaction.value)
                    : '+' + FormatCurrency(transaction.value)}
                </td>
                <td>
                  <IconEdit
                    onClick={() =>
                      handleIsOpen(transaction.type, transaction._id)
                    }
                  />{' '}
                  -{' '}
                  <IconDelet
                    onClick={() => {
                      handleRemove(transaction._id);
                    }}
                  />
                </td>
              </tr>
            </Tbody>
          ))
        ) : (
          <Tbody>
            <tr>
              <td>
                <p className="notTran">Sem lançamentos em {dateCurrent}</p>
              </td>
            </tr>
          </Tbody>
        )}
      </Table>

      {isOpen && (
        <ModalTransaction
          option={option}
          isOpen={isOpen}
          onChange={(isOpen) => setIsOpen(isOpen)}
          id={id}
        />
      )}
    </>
  );
}

export default TableTransaction;
