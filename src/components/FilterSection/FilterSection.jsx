import { Formik, Form } from "formik";
import sprite from "../../assets/img/sprite.svg";
import styles from "./FilterSection.module.css";
import { useDispatch } from "react-redux";
import { getDataCampers } from "../../redux/campers/operations";
import { resetFilters } from "../../redux/filters/slice";
import LocationFilter from "../LocationFilter/LocationFilter";
import { ButtonColored } from "../ButtonColored/ButtonColored";
import CheckBoxFilter from "../CheckboxFilter/CheckBoxFilter";
import RadioFilter from "../RadioFilter/RadioFilter";
import GroupFilter from "../GroupFilter/GroupFilter";

const initialValues = {
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  type: "",
  location: "",
};

const FilterSection = () => {
  const dispatch = useDispatch();
  const handleSubmit = (filters, { resetForm }) => {
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([, value]) => value !== false && value !== null && value !== ""
      )
    );

    dispatch(getDataCampers(filteredFilters));
    resetForm();
    dispatch(resetFilters());
  };

  return (
    <section className={styles.filter}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
