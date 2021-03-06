import { useCallback, useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';

function useAuth() {
  const [autheticated, setAutheticated] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = useCallback(async (useData) => {
    const {
      data: { name, token },
    } = await api.post('/login', useData);

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAutheticated(true);
    setUser(name);
    history.push('/');
  }, []);

  return { handleLogin, user, autheticated };
}

export default useAuth;
