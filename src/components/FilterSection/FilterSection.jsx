import { Formik, Form } from "formik";
import sprite from "../../assets/img/sprite.svg";
import styles from "./FilterSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filters/slice";
import LocationFilter from "../LocationFilter/LocationFilter";
import { ButtonColored } from "../ButtonColored/ButtonColored";
import CheckBoxFilter from "../CheckboxFilter/CheckBoxFilter";
import RadioFilter from "../RadioFilter/RadioFilter";
import GroupFilter from "../GroupFilter/GroupFilter";
import { selectFilter } from "../../redux/filters/selectors";

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
            <ButtonColored type="submit" title="Search" />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FilterSection;
