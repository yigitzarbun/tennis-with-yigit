import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { Paths } from "../../routing/Paths";
import { MdMenu, MdClose } from "react-icons/md";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Brand identity anchor target */}
        <NavLink
          to={Paths.HOME}
          className={styles.logo}
          onClick={() => setIsOpen(false)}
        >
          tennis with Yigit
        </NavLink>

        {/* Responsive viewport toggler interface */}
        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>

        {/* Action navigation routes panel */}
        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          <NavLink
            to={Paths.ABOUT}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
          <NavLink
            to={Paths.BOOKING}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Booking
          </NavLink>
          <NavLink
            to={Paths.CONTACT}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
