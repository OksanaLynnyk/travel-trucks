import CatalogCardSection from "../CatalogCardSection/CatalogCardSection";
import FilterSection from "../FilterSection/FilterSection";
import { PageContainer } from "../PageContainer/PageContainer";
import styles from "./CatalogSection.module.css";

const CatalogSection = () => {
  return (
    <main>
      <PageContainer>
        <div className={styles.catalog}>
          <FilterSection />
          <CatalogCardSection />
        </div>
      </PageContainer>
    </main>
  );
};

export default CatalogSection;
