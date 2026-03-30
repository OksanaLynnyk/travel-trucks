import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import LocationFilter from "../LocationFilter/LocationFilter";
import ButtonColored from "../ButtonColored/ButtonColored";
import CheckBoxFilter from "../CheckboxFilter/CheckBoxFilter";
import RadioFilter from "../RadioFilter/RadioFilter";
import GroupFilter from "../GroupFilter/GroupFilter";

import sprite from "../../assets/img/sprite.svg";

import { setFilters } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

import styles from "./FilterSection.module.css";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filtersFromStore = useSelector(selectFilter);

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };

  return (
    <section className={styles.filter}>
      <Formik
        initialValues={filtersFromStore}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <LocationFilter />
            <div className={styles.wrap}>
              <p className={styles.filterText}>Filters</p>
              <GroupFilter title="Vehicle equipment">
                <CheckBoxFilter sprite={sprite} />
              </GroupFilter>
              <GroupFilter title="Vehicle type">
                <RadioFilter sprite={sprite} />
              </GroupFilter>
            </div>
            <ButtonColored
              type="submit"
              title="Search"
              className={styles.btnSearch}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FilterSection;
