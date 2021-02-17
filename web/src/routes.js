import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Transaction from './Pages/Transaction';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />;
        <Route path="/transacao" component={Transaction} />;
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
