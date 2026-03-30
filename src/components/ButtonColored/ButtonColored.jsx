import styles from "./ButtonColored.module.css";

const ButtonColored = ({ title, type, onClick, className }) => (
  <button
    type={type}
    className={`${styles.button} ${className || ""}`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default ButtonColored;
