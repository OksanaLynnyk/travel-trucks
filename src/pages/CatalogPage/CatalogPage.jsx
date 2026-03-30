import CatalogSection from "../../components/CatalogSection/CatalogSection";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Header from "../../components/Header/Header";

const CatalogPage = () => {
  return (
    <>
      <DocumentTitle
        title="Catalog | TravelTrucks"
        description="Find the perfect camper using filters and detailed descriptions."
      />
      <Header />
      <CatalogSection />
    </>
  );
};

export default CatalogPage;
