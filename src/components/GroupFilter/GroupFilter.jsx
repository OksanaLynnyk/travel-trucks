import { Divider } from "antd";

import styles from "./GroupFilter.module.css";

const GroupFilter = ({ title, children }) => (
  <>
    <h3 className={styles.title}>{title}</h3>
    <Divider className={styles.divider} />
    <div className={styles.filtersGrid}>{children}</div>
  </>
);

export default GroupFilter;
