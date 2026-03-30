import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => (
  <InfinitySpin
    visible={true}
    width="200"
    color="#f769ca"
    ariaLabel="infinity-spin-loading"
    align-self="center"
  />
);
