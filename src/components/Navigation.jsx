import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";
import Cart from "./Cart";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.navItem}>
          <li>
            <NavLink to="/deals" className={styles.navItems}>
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink to="/whatsnew" className={styles.navItems}>
              Whats New
            </NavLink>
          </li>
          <li>
            <NavLink to="/delivery" className={styles.navItems}>
              Delivery
            </NavLink>
          </li>
        </ul>
        <SearchBar />
        <Account />
        <Cart />
      </nav>
    </div>
  );
};

export default Navigation;
