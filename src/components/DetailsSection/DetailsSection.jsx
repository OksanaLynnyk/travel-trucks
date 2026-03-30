import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from "antd";

import CardHeader from "../CardHeader/CardHeader";
import PageContainer from "../PageContainer/PageContainer";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import DocumentTitle from "../DocumentTitle/DocumentTitle";

import { getDataCampers } from "../../redux/campers/operations";

import styles from "./DetailsSection.module.css";

const DetailsSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.campers);
  const isLoading = useSelector((state) => state.campers.loading);
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(getDataCampers());
    }
  }, [dispatch, campers]);

  useEffect(() => {
    const selectedCamper = campers.find((camper) => camper.id === id);
    setCamper(selectedCamper);
  }, [campers, id]);

  if (isLoading) {
    return <Loader />;
  }
  if (!camper) {
    return <div>Camper not found.</div>;
  }

  return (
    <main>
      <DocumentTitle
        title={`${camper.name} | TravelTrucks`}
        description={camper.description}
      />
      <section className={styles.detailsSection}>
        <PageContainer>
          <div className={styles.detailsWrap}>
            <CardHeader
              camper={camper}
              variant="details"
              className={styles.detailsHeader}
            />
            <ImageGallery camper={camper} />
            <p className={styles.detailText}>{camper.description}</p>
          </div>
          <ul className={styles.detailsTabList}>
            <li className={styles.detailsTab}>
              <NavLink
                to="features"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Features
              </NavLink>
            </li>
            <li className={styles.detailsTab}>
              <NavLink
                to="reviews"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Divider />
          <Outlet />
        </PageContainer>
      </section>
    </main>
  );
};

export default DetailsSection;
