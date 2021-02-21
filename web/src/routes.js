import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Transaction from './Pages/Transaction';
import CreditCard from './Pages/CreditCard';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />;
      <Route path="/login" component={Login} />;
      <Route path="/transacao" component={Transaction} />;
      <Route path="/cartao" component={CreditCard} />;
    </Switch>
  );
}

export default Routes;
