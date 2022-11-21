import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../CSS/NavBar.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <h1 className={style.navbarHeader}>Moja Firma</h1>
        <div className={style.navbarLinks}>
          <a className={style.navbarLink} href="#about">
            O nas
          </a>
          <a className={style.navbarLink} href="#offer">
            Oferta
          </a>
          <a
            className={style.navbarDisabledLinks}
            disabled
            href="#contact"
          >
            Kontakt
          </a>
          <FontAwesomeIcon className={style.navbarHamburger} icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
