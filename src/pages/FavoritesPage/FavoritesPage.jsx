import { useSelector } from "react-redux";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Header from "../../components/Header/Header";
import PageContainer from "../../components/PageContainer/PageContainer";
import CatalogCard from "../../components/CatalogCard/CatalogCard";

import { selectFavorites } from "../../redux/favorites/slice";
import { selectCampers } from "../../redux/campers/selectors";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper.id),
  );

  return (
    <>
      <DocumentTitle
        title="Favorites | TravelTrucks"
        description="Your favorite campers saved for later."
      />
      <Header />
      <main>
        <section className={styles.favoritesPage}>
          <PageContainer>
            <h1 className={styles.title}>Favorites</h1>
            {favoriteCampers.length === 0 ? (
              <p className={styles.empty}>
                You haven’t added any campers to favorites yet ❤️
              </p>
            ) : (
              <ul className={styles.list}>
                {favoriteCampers.map((camper) => (
                  <li key={camper.id} className={styles.item}>
                    <CatalogCard camper={camper} variant="favorite" />
                  </li>
                ))}
              </ul>
            )}
          </PageContainer>
        </section>
      </main>
    </>
  );
};

export default FavoritesPage;
