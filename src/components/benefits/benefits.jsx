import styles from "../benefits/benefits.module.css";
import { BadgeDollarSign } from "lucide-react";
import { Truck } from "lucide-react";
import { ClockFading } from "lucide-react";
import { Store } from 'lucide-react';
import { PawPrint } from 'lucide-react';

const Benefits = () => {
  return (
    <section className={styles.Benefits}>
      <div className={styles.wrapperBenefits}>
        <div className={styles.benefitsContent}>
          <h2>Se tornando nosso cliente, você ganha muitos benefícios!</h2>
        </div>
        <div className={styles.benefitsCards}>
          <div className={styles.cardWrapper}>
            <BadgeDollarSign />
            <h3>Desconto em produtos</h3>
            <p>Você pode garantir descontos de até 70% em produtos!</p>
          </div>
          <div className={styles.cardWrapper}>
            <Truck />
            <h3>Frete Grátis</h3>
            <p>
              Em todas as compras o frete é por nossa conta para o Brasil
              inteiro!
            </p>
          </div>
          <div className={styles.cardWrapper}>
            <ClockFading />
            <h3>Seu produto em horas</h3>
            <p>Com o nosso FlashDelivery você recebe seu produto em poucas horas!</p>
          </div>
          <div className={styles.cardWrapper}>
            <Store/>
            <h3>Retirada em nossa loja</h3>
            <p>Você pode fazer a retirada das suas compras em nossas lojas!</p>
          </div>
          <div className={styles.cardWrapper}>
            <PawPrint />
            <h3>Desconto no AdestraPet</h3>
            <p>Descontaço de 25% para o melhor programa de adestramento!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
