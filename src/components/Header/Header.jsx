import { Navigation } from "../Navigation/Navigation";
import { PageContainer } from "../PageContainer/PageContainer";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <PageContainer>
      <Navigation />
    </PageContainer>
  </header>
);
