import React from 'react';

import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import history from './services/history';

import Header from './components/Header';

import { Provider } from './Context/Context';

function App() {
  return (
    <Provider>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        className="toast-container"
      />
    </Provider>
  );
}

export default App;
