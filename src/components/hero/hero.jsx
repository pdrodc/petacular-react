import styles from "../hero/hero.module.css";
import ImgHero from "../../assets/original-81edbdc3feee02afc972afd.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.wrapperHero}>
        <div className={styles.heroContent}>
          <h2>
            Tudo Para Seu Pet Na Melhor Qualidade e Menor Preço!
          </h2>
          <button className={styles.modernButton}>
              Faça Seu Pet Feliz
              <ArrowRight />
            </button>
        </div>
        <img src={ImgHero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
