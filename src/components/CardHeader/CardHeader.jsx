import { useDispatch, useSelector } from "react-redux";

import Location from "../Location/Location";

import sprite from "../../assets/img/sprite.svg";

import { selectFavorites, toggleFavorite } from "../../redux/favorites/slice";

import styles from "./CardHeader.module.css";

const CardHeader = ({ camper, className, variant }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={`${styles.titleWrapper} ${className}`}>
      <div>
        <h2
          className={`${styles.titleCard} ${
            variant === "details" ? styles.titleDetails : ""
          }`}
        >
          {camper.name}
        </h2>
        <div className={styles.infoCard}>
          <div className={styles.infoCardRating}>
            <svg className={styles.iconStar} width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>{camper.rating}</p>
            <p className={styles.review}>({camper.reviews.length} Reviews)</p>
          </div>

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
