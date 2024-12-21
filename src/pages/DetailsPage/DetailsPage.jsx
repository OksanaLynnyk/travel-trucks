import { Outlet } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { Header } from "../../components/Header/Header";
import DetailsSection from "../../components/DetailsSection/DetailsSection";

const DetailsPage = () => (
  <>
    <DocumentTitle>Details</DocumentTitle>
    <Header />
    <DetailsSection />
    <Outlet />
  </>
);

export default DetailsPage;
