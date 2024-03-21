import { createContext, useState } from 'react';

export const AuthContext = createContext({
  setTokens: () => {},
  authTokens: {},
});

export default function AuthContextProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(null);

  const setTokens = (data) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    sessionStorage.setItem('isLogin', true);
    setAuthTokens(data.accessToken);
  };

  console.log(authTokens);

  const ctxValue = { setTokens, authTokens };

  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}
