import classes from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { fetchLogout } from '@/apis/auth.js';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext.jsx';

export default function Header() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
    const { status } = await fetchLogout();

    console.log(status);

    if (status === 200) {
      handleLogout();
      navigate('/sign-in');
    }
  };

  return (
    <>
      <div className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">NEWS</Link>
            </li>
            <li>
              <Link to="edit">EDIT</Link>
            </li>
            <li>
              <Link onClick={logout} to={'#'}>
                LOGOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
