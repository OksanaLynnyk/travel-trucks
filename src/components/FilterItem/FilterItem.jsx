import { Field } from "formik";
import { useId } from "react";
import styles from "./FilterItem.module.css";

const FilterItem = ({ type, name, value, label, icon, sprite, fixedValue }) => {
  const id = useId();

  return (
    <div className={styles.filterItem}>
      <Field name={name} type={type}>
        {({ field, form }) => {
          const isChecked =
            type === "radio"
              ? field.value === value
              : field.value === fixedValue;

          const handleChange = () => {
            if (type === "radio") {
              form.setFieldValue(name, value);
            } else if (type === "checkbox") {
              form.setFieldValue(name, isChecked ? "" : fixedValue);
            }
          };

          return (
            <label htmlFor={id} className={styles.filterLabel}>
              <input
                {...field}
                id={id}
                type={type}
                value={value}
                checked={isChecked}
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
