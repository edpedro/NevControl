import React, { useState, useContext, useEffect } from 'react';
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Interaction,
  getTheme,
} from 'bizcharts';

import { Context } from '../../Context/Context';

import { Container, Header } from './styles';

function TimeLineGraph({ validation, title }) {
  const { transactions } = useContext(Context);
  const [newGraph, setNewGraph] = useState();

  useEffect(() => {
    function sumDuplicated() {
      const result = [];
      const newTransactions = Object.values(transactions).filter(
        (transaction) => transaction.operation === validation
      );
      Object.values(newTransactions).forEach(function (transaction) {
        if (!this[transaction.category]) {
          this[transaction.category] = {
            category: transaction.category,
            value: 0,
          };
          result.push(this[transaction.category]);
        }
        this[transaction.category].value += transaction.value;
      }, Object.create(null));

      setNewGraph(result);
    }
    sumDuplicated();
  }, [transactions, validation]);

  return (
    <>
      {newGraph && newGraph.length >= 2 && (
        <Container>
          <Header>
            <h2>{title}</h2>
          </Header>
          <Chart height={300} data={newGraph} autoFit>
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={false} />
            <Axis visible={false} />
            <Interval
              position="value"
              adjust="stack"
              color="category"
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
              label={[
                'count',
                {
                  content: (data) => {
                    return `${data.value} R$`;
                  },
                },
              ]}
              state={{
                selected: {
                  style: (t) => {
                    const res = getTheme().geometries.interval.rect.selected.style(
                      t
                    );
                    return { ...res, fill: 'red' };
                  },
                },
              }}
            />
            <Interaction type="element-single-selected" />
          </Chart>
        </Container>
      )}
    </>
  );
}

export default TimeLineGraph;
