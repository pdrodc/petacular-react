import styles from "../header/header.module.css";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperHeader}>
        <h1 className={styles.logo}>Petacular</h1>
        <nav className={styles.nav}>
          <ul className={styles.ulMenu}>
            <li><a href="">Home</a></li>
            <li><a href="">Cachorros</a></li>
            <li><a href="">Gatos</a></li>
            <li><a href="">Outros Pets</a></li>
            <li><a href="">Casa e Jardinagem</a></li>
            <li><a href="">Promoções</a></li>
            <li><a href="">Serviços</a></li>
            <div className={styles.ulIcons}>
             <li><a href=""><UserRound /></a></li>
             <li><a href=""><ShoppingCart /></a></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
