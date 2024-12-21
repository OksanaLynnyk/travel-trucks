import styles from "./ButtonTransparent.module.css";

const ButtonTransparent = ({ title, type, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {title}
  </button>
);

export default ButtonTransparent;
