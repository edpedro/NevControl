import { useCallback, useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../services/history';

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('user');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      setUser(name);
    }

    setLoading(false);
  }, []);

  const handleLogin = useCallback(async (useData) => {
    try {
      const {
        data: {
          user: { name },
          token,
        },
      } = await api.post('/login', useData);

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', name);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setUser(name);
      history.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const handleRegister = useCallback(async (useData) => {
    try {
      const {
        data: {
          user: { name },
          token,
        },
      } = await api.post('/register', useData);

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', name);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setUser(name);
      history.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  return { handleLogin, handleRegister, user, authenticated, loading };
}

export default useAuth;
