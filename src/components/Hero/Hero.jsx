import { useNavigate } from "react-router-dom";
import { ButtonColored } from "../ButtonColored/ButtonColored";
import { PageContainer } from "../PageContainer/PageContainer";
import styles from "./Hero.module.css";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className={styles.hero}>
        <PageContainer>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <p className={styles.heroText}>
            You can find everything you want in our catalog
          </p>
          <ButtonColored
            type="button"
            title="View Now"
            onClick={() => navigate("/catalog")}
          />
        </PageContainer>
      </section>
    </main>
  );
};
