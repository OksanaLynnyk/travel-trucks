import sprite from "../../assets/img/sprite.svg";

import styles from "./Location.module.css";

const Location = ({ camper }) => (
  <div className={styles.locationWrapper}>
    <svg className={styles.iconMap} width={16} height={16}>
      <use href={`${sprite}#icon-map`} />
    </svg>
    <p>{camper.location}</p>
  </div>
);

export default Location;
