import styles from "./CardHeader.module.css";
import sprite from "../../assets/img/sprite.svg";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, toggleFavorite } from "../../redux/favorites/slice";

const CardHeader = ({ camper, className }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={`${styles.titleWrapper} ${className}`}>
      <div>
        <h2 className={styles.titleCard}>{camper.name}</h2>
        <div className={styles.infoCard}>
          <svg className={styles.iconStar} width={16} height={16}>
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p>{camper.rating}</p>
          <p className={styles.review}>({camper.reviews.length} Reviews)</p>
          <Location camper={camper} />
        </div>
      </div>
      <div className={styles.priceWrap}>
        <p className={styles.titleCard}>€{camper.price.toFixed(2)}</p>
        <svg
          className={`${styles.iconHeart} ${
            isFavorite ? styles.activeHeart : ""
          }`}
          width={26}
          height={24}
          onClick={handleToggleFavorite}
        >
          <use href={`${sprite}#icon-heart`} />
        </svg>
      </div>
    </div>
  );
};

export default CardHeader;
