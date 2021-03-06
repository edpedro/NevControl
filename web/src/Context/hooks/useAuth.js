import { useCallback, useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';

function useAuth() {
  const [autheticated, setAutheticated] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = useCallback(async (useData) => {
    try {
      const {
        data: { name, token },
      } = await api.post('/login', useData);

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAutheticated(true);
      setUser(name);
      history.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const handleRegister = useCallback(async (useData) => {
    try {
      const {
        data: { name, token },
      } = await api.post('/register', useData);

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAutheticated(true);
      setUser(name);
      history.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  return { handleLogin, handleRegister, user, autheticated };
}

export default useAuth;
