import styles from "../brands/brands.module.css";
import ZeeDog from "../../assets/zeedog.png";
import Pedigree from "../../assets/pedigree.png";
import NutriFresh from "../../assets/nutrifresh.png";
import Purina from "../../assets/Purina.png";
import Whiskas from "../../assets/whiskas.png";
import CanseiDeSerGato from "../../assets/canseideser.png";
import Golden from "../../assets/golden-formula.png"

const Brands = () => {
  return (
    <section className={styles.Brands}>
      <div className={styles.wrapperBrands}>
        <div className={styles.brandsContent}>
          <h2>As melhores marcas você encontra aqui!</h2>
        </div>
        <div className={styles.brandsImg}>
          <img src={ZeeDog} alt="" />
          <img src={Pedigree} alt="" />
          <img src={NutriFresh} alt="" />
          <img src={Purina} alt="" />
          <img src={Whiskas} alt="" />
          <img src={CanseiDeSerGato} alt="" />
          <img src={Golden} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
