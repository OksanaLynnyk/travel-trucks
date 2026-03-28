import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./DetailsReviews.module.css";
import { PageContainer } from "../PageContainer/PageContainer";

const DetailsReviews = () => {
  const { id } = useParams();
  const campers = useSelector((state) => state.campers.campers);

  const camper = campers.find((c) => c.id === id);

  if (!camper) return <p>No camper data.</p>;
  if (!camper.reviews || camper.reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <section>
      <PageContainer>
        <ul className={styles.reviewsList}>
          {camper.reviews.map((review, index) => (
            <li key={index} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <strong>{review.reviewer_name}</strong>
                <span>⭐ {review.reviewer_rating}</span>
              </div>
              <p className={styles.reviewText}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
};

export default DetailsReviews;
