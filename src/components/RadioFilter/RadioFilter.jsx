import { filterItemsRadio } from "../../data/config";
import FilterItem from "../FilterItem/FilterItem";

const RadioFilter = ({ sprite }) => (
  <>
    {filterItemsRadio.map((item) => (
      <FilterItem
        key={item.value}
        type="radio"
        name="form"
        value={item.value}
        label={item.label}
        icon={item.icon}
        sprite={sprite}
      />
    ))}
  </>
);

export default RadioFilter;
