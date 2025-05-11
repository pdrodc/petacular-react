import styles from "../products/products.module.css";
import RaçãoPedi from "../../assets/ração-pedigree.png";
import AreiaHigi from "../../assets/areia-higiênica.png";
import RaçãoPremier from "../../assets/premier_ligth_capa.png";
import Coleira from "../../assets/coleira.png";
import Pote from "../../assets/pote.png";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section className={styles.Products}>
      <div className={styles.wrapperProducts}>
        <div className={styles.productsContent}>
          <h2>Produtos em Promoção</h2>
        </div>
        <nav className={styles.productsNav}>
          <div className={styles.productWrapper}>
            <div className={styles.productImg}>
              <img src={RaçãoPedi} alt="" />
            </div>
            <div className={styles.productDescription}>
              <h3>Ração Pedigree 10,1kg</h3>
              <p>R$ 160,00</p>
              <button>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productImg}>
              <img src={AreiaHigi} alt="" />
            </div>
            <div className={styles.productDescription}>
              <h3>Areia Higiênica 4kg</h3>
              <p>R$ 99,99</p>
              <button>
                {" "}
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productImg}>
              <img src={RaçãoPremier} alt="" />
            </div>
            <div className={styles.productDescription}>
              <h3>Ração Premier Light 2,7kg</h3>
              <p>R$ 110,00</p>
              <button>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productImg}>
              <img src={Coleira} alt="" />
            </div>
            <div className={styles.productDescription}>
              <h3>Coleira ZeeDog</h3>
              <p>R$ 79,99</p>
              <button>
                {" "}
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productImg}>
              <img src={Pote} alt="" />
            </div>
            <div className={styles.productDescription}>
              <h3>Comedouro Automático</h3>
              <p>R$ 35,99</p>
              <button>
                <ArrowRight />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Products;
