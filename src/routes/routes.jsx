import Layout from '../pages/Layout.jsx';
import News from '../pages/news/News.jsx';
import Edit from '../pages/edit/Edit.jsx';
import Login from '../pages/logIn/Login.jsx';
import SignUp from '../pages/signUp/SignUp.jsx';
import Oauth from '@/pages/oauth/Oauth.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <News /> },
      { path: 'edit', element: <Edit /> },
    ],
  },
];

export default routes;
