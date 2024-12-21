import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCampers } from "../../redux/campers/operations";
import { Loader } from "../Loader/Loader";
import CatalogCard from "../CatalogCard/CatalogCard";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import { selectFilter } from "../../redux/filters/selectors";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";
import styles from "./CatalogCardSection.module.css";

const CatalogCardSection = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilter);
  const total = useSelector(selectTotalCampers);

  const [perPage, setPerPage] = useState(4);
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    dispatch(getDataCampers());
  }, [dispatch]);

  useEffect(() => {
    if (campers && filters) {
      const filtered = campers.filter((camper) => {
        return Object.keys(filters).every((key) => {
          if (filters[key]) {
            return camper[key] === filters[key];
          }
          return true;
        });
      });
      setFilteredCampers(filtered);
      setPerPage(4);
    }
  }, [campers, filters]);

  const loadMore = () => {
    setPerPage((prevCount) => prevCount + 4);
  };

  const noMoreItems = perPage >= total;

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles.catalogSection}>
      <ul>
        {filteredCampers.slice(0, perPage).map((camper) => (
          <li key={camper.id} className={styles.catalogCard}>
            <CatalogCard camper={camper} />
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
