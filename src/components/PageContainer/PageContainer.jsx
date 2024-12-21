import styles from "./PageContainer.module.css";

export const PageContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
