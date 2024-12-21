import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <p className={styles.noPageText}>Page not found</p>
      <Link to={"/"} className={styles.noPageLink}>
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
