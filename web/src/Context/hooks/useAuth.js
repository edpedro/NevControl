import { useCallback, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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
  }, [loading]);

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
      setLoading(true);
      setUser(name);

      toast.success('Login efetuado com sucesso!');

      history.push('/');
    } catch (error) {
      toast.error(error.response.data);
    }
  }, []);

  const handleLoginGoogle = useCallback(async (tokenGoogle) => {
    try {
      const {
        data: {
          user: { name },
          token,
        },
      } = await api.post('/login-google', tokenGoogle);

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', name);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthenticated(true);
      setLoading(true);
      setUser(name);

      toast.success('Login efetuado com sucesso!');

      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message);
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

      toast.success('Cadastro efetuado com sucesso!');

      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return {
    handleLogin,
    handleRegister,
    user,
    authenticated,
    loading,
    handleLogout,
    handleLoginGoogle,
  };
}

export default useAuth;
