import { createContext, useState } from 'react';

export const AuthContext = createContext({
  setTokens: () => {},
  authTokens: {},
  handleLogout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(null);

  const setTokens = (data) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    sessionStorage.setItem('isLogin', true);
    setAuthTokens(data.accessToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    sessionStorage.removeItem('isLogin');
    setAuthTokens(null);
  };

  const ctxValue = { setTokens, authTokens, handleLogout };

  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}
