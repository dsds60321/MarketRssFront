import classes from './Header.module.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link href="#" to="">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="edit">EDIT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
