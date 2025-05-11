import styles from "../cares/cares.module.css";
import ImgCares from "../../assets/original-89b6f57bac81e463054f7c1.jpg";
import Adestramento from "../../assets/treinamento-de-caes-treinador-en.jpg"

const Cares = () => {
  return (
    <section className={styles.Cares}>
      <div className={styles.wrapperCares}>
        <div className={styles.caresContent}>
          <h2>O Melhor tratamento para seu Pet!</h2>
          <p>Todo o cuidado que seu pet precisa, em um só lugar!</p>
        </div>
        <img src={ImgCares} alt="" />
        </div>
    </section>
  );
};

export default Cares;
