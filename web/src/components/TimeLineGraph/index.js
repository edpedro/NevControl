import React, { useState, useContext, useEffect } from 'react';
import { Chart, Line } from 'bizcharts';

import { Context } from '../../Context/Context';

import { Container, Header } from './styles';

const scale = {
  value: {
    type: 'linear',
    formatter: (val) => {
      return val;
    },
  },
};
function TimeLineGraph({ title }) {
  const { transactions } = useContext(Context);
  const [newGraph, setNewGraph] = useState();

  useEffect(() => {
    function sumDuplicated() {
      const result = [];
      Object.values(transactions).forEach(function (transaction) {
        if (!this[transaction.data]) {
          this[transaction.data] = { data: transaction.data, value: 0 };
          result.push(this[transaction.data]);
        }
        this[transaction.data].value += transaction.value;
      }, Object.create(null));

      setNewGraph(result);
    }
    sumDuplicated();
  }, [transactions]);

  return (
    <>
      {newGraph && newGraph.length >= 2 && (
        <Container>
          <Header>
            <h2>{title}</h2>
          </Header>
          <Chart
            scale={{ value: { min: 0 } }}
            padding={[10, 20, 50, 40]}
            autoFit
            height={200}
            data={newGraph}
            scale={scale}
          >
            <Line
              shape="smooth"
              position="data*value"
              color="l (270) 0:rgba(4, 118, 104, 1) .5:rgba(95, 209, 195, 1) 1:rgba(4, 215, 204, 1)"
            />
          </Chart>
        </Container>
      )}
    </>
  );
}

export default TimeLineGraph;
