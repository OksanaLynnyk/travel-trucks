import FilterItem from "../FilterItem/FilterItem";

import { filterItems } from "../../data/config";

const CheckBoxFilter = ({ sprite }) => (
  <>
    {filterItems.map((item) => (
      <FilterItem
        key={item.name}
        type="checkbox"
        name={item.name}
        label={item.label}
        icon={item.icon}
        sprite={sprite}
      />
    ))}
  </>
);

export default CheckBoxFilter;
