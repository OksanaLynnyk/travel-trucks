import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCampers } from "../../redux/campers/operations";
import { Loader } from "../Loader/Loader";
import CatalogCard from "../CatalogCard/CatalogCard";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";
import styles from "./CatalogCardSection.module.css";
import { selectFilteredCampers } from "../../redux/selectors";

const CatalogCardSection = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const total = campers.length;

  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    dispatch(getDataCampers());
  }, [dispatch]);

  const loadMore = () => {
    setPerPage((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    setPerPage(4);
  }, [campers]);

  const noMoreItems = perPage >= total;

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles.catalogSection}>
      <ul>
        {campers.slice(0, perPage).map((camper, index) => (
          <li key={camper.id} className={styles.catalogCard}>
            <CatalogCard camper={camper} isFirst={index === 0} />
          </li>
        ))}
      </ul>
      {perPage < total && (
        <ButtonTransparent type="button" title="Load more" onClick={loadMore} />
      )}
      {noMoreItems && (
        <div className={styles.noMoreItems}>No more items to load</div>
      )}
    </section>
  );
};

export default CatalogCardSection;
