import React, { useState, useEffect } from 'react';
import moment from 'moment';

import TableTransaction from '../TableTransaction';

import { Header, Grid, Select } from './styles';

moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
});

const month = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function FilterTransaction({ datas, title }) {
  const [datasFilter, setDatasFilter] = useState([]);
  const [dateCurrent, setDateCurrent] = useState('');

  useEffect(() => {
    const now = moment(new Date());
    const monthAtual = converthNumberToString(now.month());

    const result = filterValues(monthAtual);

    setDatasFilter(result);

    setDateCurrent(monthAtual);
  }, [datas]);

  function handleChange(event) {
    const { value } = event.target;

    const result = filterValues(value);

    setDatasFilter(result);
  }

  function filterValues(month) {
    setDateCurrent(month);

    const result = Object.values(datas).filter((transaction) => {
      const monthConvert = moment().month(month).format('M');

      const monthDate = moment(transaction.data).format('M');

      return monthDate === monthConvert;
    });

    return result;
  }

  function converthNumberToString(month) {
    const monthString = moment().month(month).format('MMMM');

    return monthString;
  }
  return (
    <>
      <Header>
        <div>
          <Select name="operation" onChange={handleChange} value={dateCurrent}>
            {month.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </Header>
      <Grid>
        <TableTransaction datas={datasFilter} dateCurrent={dateCurrent} />
      </Grid>
    </>
  );
}

export default FilterTransaction;
