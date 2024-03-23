import { createContext } from 'react';

export const LayoutContext = createContext({});

export default function LayoutContextProvider({ children }) {
  const ctxValue = {};

  return <LayoutContext.Provider value={ctxValue}>{children}</LayoutContext.Provider>;
}
