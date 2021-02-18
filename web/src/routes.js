import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Transaction from './Pages/Transaction';
import CreditCard from './Pages/CreditCard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />;
        <Route path="/transacao" component={Transaction} />;
        <Route path="/cartao" component={CreditCard} />;
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
