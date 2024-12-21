import styles from "./EquipmentList.module.css";
import sprite from "../../assets/img/sprite.svg";
import { features } from "../../data/config";

const kebabToCamel = (str) => {
  return str.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
};

const EquipmentList = ({ camper, limit }) => {
  const limitedFeatures = limit ? features.slice(0, limit) : features;

  return (
    <ul className={styles.filterList}>
      <li className={styles.filterItem}>
        <svg className={styles.iconTransmission} width={20} height={20}>
          <use href={`${sprite}#icon-transmission`} />
        </svg>
        {camper.transmission}
      </li>
      <li className={styles.filterItem}>
        <svg className={styles.iconEngine} width={20} height={20}>
          <use href={`${sprite}#icon-engine`} />
        </svg>
        {camper.engine || "Not available"}
      </li>

      {limitedFeatures.map(
        ({ key, icon, label }) =>
          key !== "transmission" &&
          key !== "engine" &&
          camper[key] && (
            <li className={styles.filterItem} key={key}>
              <svg
                className={styles[kebabToCamel(icon)]}
                width={20}
                height={20}
              >
                <use href={`${sprite}#${icon}`} />
              </svg>
              {label}
            </li>
          )
      )}
    </ul>
  );
};

export default EquipmentList;
