import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => (
  <InfinitySpin
    visible={true}
    width="200"
    color="#781458"
    ariaLabel="infinity-spin-loading"
    align-self='center'
  />
);
