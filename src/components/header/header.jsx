import { useState } from "react";
import styles from "../header/header.module.css";
import iconCloser from "../../assets/menu-closer.png";
import iconBars from "../../assets/menu-togle.png";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <h1 className={styles.logo}>Petacular</h1>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="">Início</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Cachorros</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Gatos</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Outros Pets</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Casa e Jardinagem</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Promoções</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Serviços</a>
            </li>
            <div className={styles.ulIcons}>
              <li className={styles.navLi}>
                <a href="">
                  <UserRound />
                </a>
              </li>
              <li className={styles.navLi}>
                <a href="">
                  <ShoppingCart />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
