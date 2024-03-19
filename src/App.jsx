import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
