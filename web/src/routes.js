import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/Context';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Resgister from './Pages/Register';
import Transaction from './Pages/Transaction';
import CreditCard from './Pages/CreditCard';

function PrivateRoute({ isPrivate, ...res }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...res} />;
}

function Routes() {
  return (
    <Switch>
      <PrivateRoute isPrivate path="/" exact component={Home} />;
      <Route path="/login" component={Login} />;
      <Route path="/resgister" component={Resgister} />;
      <PrivateRoute isPrivate path="/transacao" component={Transaction} />;
      <PrivateRoute isPrivate path="/cartao" component={CreditCard} />;
    </Switch>
  );
}

export default Routes;
