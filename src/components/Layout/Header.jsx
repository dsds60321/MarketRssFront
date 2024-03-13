import classes from './Header.module.css';
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <nav>
          <ul>
            <li><Link href="#" to=''>News</Link></li>
            <li><Link to='edit'>Edit</Link></li>
            <li><a href="#">Link3</a></li>
            <li><a href="#">Link4</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}