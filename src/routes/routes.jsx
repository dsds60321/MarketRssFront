import Layout from "../pages/Layout.jsx";
import News from "../components/news/News.jsx";
import Edit from "../components/edit/Edit.jsx";

const routes = [
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