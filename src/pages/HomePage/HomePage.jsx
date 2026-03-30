import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const HomePage = () => (
  <>
    <DocumentTitle
      title="TravelTrucks — Camper Catalog"
      description="Browse campers, filter by features, view details and save favorites."
    />
    <Header />
    <Hero />
  </>
);

export default HomePage;
