import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, FAVORITE_VIDEOS } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from './login.mock';
import Swal from 'sweetalert2';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    mounted && setAuthenticated(isAuthenticated);
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const login = async (data) => {
    try {
      await loginApi(data.username, data.password);
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      Swal.fire({
        position: 'top-end',
        title: 'Welcome!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      storage.set(AUTH_STORAGE_KEY, false);
      setAuthenticated(false);
      throw err;
    }
  };

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(FAVORITE_VIDEOS, []);
    Swal.fire({
      position: 'top-end',
      title: 'Bye!',
      showConfirmButton: false,
      timer: 1500,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
