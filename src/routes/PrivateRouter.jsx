import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRouter = () => {
  const isLogin = sessionStorage.getItem('isLogin');
  return isLogin ? <Outlet /> : <Navigate to="/sign-in" />;
};
