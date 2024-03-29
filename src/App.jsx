import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';
import { PrivateRouter } from '@/routes/PrivateRouter.jsx';
import Login from '@/pages/logIn/Login.jsx';
import SignUp from '@/pages/signUp/SignUp.jsx';
import Oauth from '@/pages/oauth/Oauth.jsx';

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    // path: '/auth/oauth-response/:accessToken/:refreshToken',
    path: '/auth/oauth-response',
    element: <Oauth />,
  },
  {
    path: '/',
    element: <PrivateRouter />,
    children: routes,
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
