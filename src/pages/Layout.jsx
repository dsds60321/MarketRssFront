import Header from '../components/layout/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer.jsx';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="contents">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
