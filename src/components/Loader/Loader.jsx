import { InfinitySpin } from "react-loader-spinner";

import styles from "./Loader.module.css";

export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <InfinitySpin
      visible={true}
      width="300"
      color="#f769ca"
      ariaLabel="infinity-spin-loading"
      align-self="center"
    />
  </div>
);
