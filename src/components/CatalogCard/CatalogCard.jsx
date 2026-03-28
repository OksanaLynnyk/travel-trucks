import { useNavigate } from "react-router-dom";
import { ButtonColored } from "../ButtonColored/ButtonColored";
import styles from "./CatalogCard.module.css";
import CardHeader from "../CardHeader/CardHeader";
import EquipmentList from "../EquipmentList/EquipmentList";

const CatalogCard = ({ camper, isFirst }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={styles.cardImg}
        loading={isFirst ? "eager" : "lazy"}
        width="569"
        height="320"
      />
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
    </>
  );
};

export default CatalogCard;
