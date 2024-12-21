import { useDispatch, useSelector } from "react-redux";
import CardHeader from "../CardHeader/CardHeader";
import { PageContainer } from "../PageContainer/PageContainer";
import styles from "./DetailsSection.module.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { getDataCampers } from "../../redux/campers/operations";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Divider } from "antd";

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
      <section className={styles.detailsSection}>
        <PageContainer>
          <div className={styles.detailsWrap}>
            <CardHeader camper={camper} className={styles.detailsHeader} />
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
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Divider />
        </PageContainer>
      </section>
    </main>
  );
};

export default DetailsSection;
