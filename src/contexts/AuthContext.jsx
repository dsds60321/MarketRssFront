import { createContext, useState } from 'react';

export const AuthContext = createContext({
  setTokens: () => {},
  token: {},
});

export default function AuthContextProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(null);

  const setTokens = (data) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    setAuthTokens(data);
  };

  const ctxValue = { setTokens, token: authTokens };

  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}
