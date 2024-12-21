import CatalogSection from "../../components/CatalogSection/CatalogSection";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { Header } from "../../components/Header/Header";

const CatalogPage = () => {
  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      <Header />
      <CatalogSection />
    </>
  );
};

export default CatalogPage;
