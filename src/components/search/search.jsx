import styles from "../search/search.module.css";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="O que seu pet precisa?" />
      <button className={styles.searchButton}><Search /></button>
    </div>
  );
};

export default SearchBar;
