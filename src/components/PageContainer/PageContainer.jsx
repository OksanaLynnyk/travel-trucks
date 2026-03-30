import styles from "./PageContainer.module.css";

const PageContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default PageContainer;
