import { Divider } from "antd";
import styles from "./GroupFilter.module.css";

const GroupFilter = ({ title, children }) => (
  <div className={styles.filtersWrap}>
    <h3 className={styles.title}>{title}</h3>
    <Divider className={styles.divider} />
    {children}
  </div>
);

export default GroupFilter;
