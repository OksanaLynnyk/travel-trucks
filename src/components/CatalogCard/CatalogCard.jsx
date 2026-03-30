import { useNavigate } from "react-router-dom";

import ButtonColored from "../ButtonColored/ButtonColored";
import CardHeader from "../CardHeader/CardHeader";
import EquipmentList from "../EquipmentList/EquipmentList";

import styles from "./CatalogCard.module.css";

const CatalogCard = ({ camper, isFirst, variant }) => {
  const navigate = useNavigate();

  return (
    <div
      className={` ${
        variant === "favorite" ? styles.favoritesCard : styles.card
      }`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={styles.cardImg}
          loading={isFirst ? "eager" : "lazy"}
          width="569"
          height="320"
        />
      </div>
      <div className={styles.contentWrapper}>
        <CardHeader camper={camper} />
        <p className={styles.descriptionCard}>{camper.description}</p>
        <EquipmentList camper={camper} limit={7} />
        <ButtonColored
          type="button"
          title="Show more"
          onClick={() => navigate(`/catalog/${camper.id}`)}
        />
      </div>
    </div>
  );
};

export default CatalogCard;
