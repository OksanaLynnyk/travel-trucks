import { Field } from "formik";
import { useId } from "react";
import styles from "./FilterItem.module.css";

const FilterItem = ({ type, name, value, label, icon, sprite }) => {
  const id = useId();

  return (
    <div className={styles.filterItem}>
      <Field name={name}>
        {({ field, form }) => {
          const checked =
            type === "checkbox" ? Boolean(field.value) : field.value === value;

          const handleChange = () => {
            if (type === "checkbox") {
              form.setFieldValue(name, !checked);
            }

            if (type === "radio") {
              form.setFieldValue(name, value);
            }
          };

          return (
            <label htmlFor={id} className={styles.filterLabel}>
              <input
                id={id}
                type={type}
                checked={checked}
                onChange={handleChange}
              />
              <div>
                <svg width={32} height={32}>
                  <use href={`${sprite}#${icon}`} />
                </svg>
                <span className={styles.filterText}>{label}</span>
              </div>
            </label>
          );
        }}
      </Field>
    </div>
  );
};
export default FilterItem;
