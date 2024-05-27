import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export function Navbar(props) {
  const { appTitle = "Cushon" } = props;
  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className={`${styles.navbar_wrapper}`}>
        <h3 className={`${styles.navbar_logo}`}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            {appTitle} 
          </Link>
        </h3>
        <ul className={`navbar-nav ${styles.nav_items}`}>
          <li className={`nav-item ${styles.nav_item}`}>
            <span> user </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
