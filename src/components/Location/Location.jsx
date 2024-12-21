import sprite from "../../assets/img/sprite.svg";
import styles from "./Location.module.css";

const Location = ({ camper }) => (
  <>
    <svg className={styles.iconMap} width={16} height={16}>
      <use href={`${sprite}#icon-map`} />
    </svg>
    <p>{camper.location}</p>
  </>
);

export default Location;
