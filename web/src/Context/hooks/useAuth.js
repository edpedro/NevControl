import { useCallback, useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../services/history';

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = useCallback(async (useData) => {
    try {
      const {
        data: { name, token },
      } = await api.post('/login', useData);

      localStorage.setItem('token', JSON.stringify(token));
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
        data: { name, token },
      } = await api.post('/register', useData);

      localStorage.setItem('token', JSON.stringify(token));
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
