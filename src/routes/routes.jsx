import Layout from "../pages/Layout.jsx";
import News from "../pages/news/News.jsx";
import Edit from "../pages/edit/Edit.jsx";
import Login from "../pages/login/Login.jsx";

const routes = [
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element:
      (<Layout/>),
    children: [
      {index: true, element: <News/>},
      {path: 'edit', element: <Edit/>}
    ]
  }
]

export default routes;