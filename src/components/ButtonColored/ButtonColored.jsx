import styles from "./ButtonColored.module.css";

export const ButtonColored = ({ title, type, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {title}
  </button>
);
