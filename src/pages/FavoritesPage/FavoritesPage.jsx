import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { Header } from "../../components/Header/Header";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import styles from "./FavoritesPage.module.css";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import { selectFavorites } from "../../redux/favorites/slice";
import { selectCampers } from "../../redux/campers/selectors";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper.id),
  );

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <Header />
      <main>
        <section>
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
                    <CatalogCard camper={camper} />
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
