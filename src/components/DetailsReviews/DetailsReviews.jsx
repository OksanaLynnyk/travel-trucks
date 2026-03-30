import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import sprite from "../../assets/img/sprite.svg";

import styles from "./DetailsReviews.module.css";

const DetailsReviews = () => {
  const { id } = useParams();
  const campers = useSelector((state) => state.campers.campers);

  const camper = campers.find((c) => c.id === id);

  if (!camper) return <p>No camper data</p>;
  if (!camper.reviews || camper.reviews.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {camper.reviews.map((review, index) => (
        <li key={index} className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <strong>{review.reviewer_name}</strong>
            <svg className={styles.iconStar} width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>{review.reviewer_rating}</p>
          </div>
          <p className={styles.reviewText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default DetailsReviews;
