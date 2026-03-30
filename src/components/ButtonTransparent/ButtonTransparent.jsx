import styles from "./ButtonTransparent.module.css";

const ButtonTransparent = ({ title, type, onClick, className }) => (
  <button type={type} className={`${styles.button} ${className}`} onClick={onClick}>
    {title}
  </button>
);

export default ButtonTransparent;
