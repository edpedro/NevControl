import { Router } from 'react-router-dom';
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
    </Provider>
  );
}

export default App;
