import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = () => (
  <nav className={styles.nav}>
    <Link to="/" className={styles.logo}>
      Travel<span className={styles.logoSpan}>Trucks</span>
    </Link>
    <div className={styles.navWrap}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(styles.navLink, isActive && styles.active)
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          clsx(styles.navLink, isActive && styles.active)
        }
      >
        Catalog
      </NavLink>
    </div>
  </nav>
);
