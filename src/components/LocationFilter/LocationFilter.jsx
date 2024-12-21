import { useState, useEffect } from "react";
import { AutoComplete, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { useField } from "formik";
import sprite from "../../assets/img/sprite.svg";
import styles from "./LocationFilter.module.css";

const LocationFilter = () => {
  const campers = useSelector(selectCampers);
  const [initialLocations, setInitialLocations] = useState([]);
  // eslint-disable-next-line
  const [field, meta, helpers] = useField("location");

  useEffect(() => {
    if (campers.length > 0) {
      const locations = campers.map((camper) => camper.location);
      const uniqueLocations = [...new Set(locations)].map((location) => ({
        value: location,
      }));

      if (initialLocations.length === 0) {
        setInitialLocations(uniqueLocations);
      }
    }
  }, [campers, initialLocations]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#101828",
          colorBgContainer: "#F7F7F7",
          colorTextPlaceholder: "#6C717B",
          controlOutline: "none",
          colorBorder: "tranparent",
        },
      }}
    >
      <div className={styles.locationFilter}>
        <label htmlFor="location" className={styles.locationLable}>
          Location
        </label>
        <AutoComplete
          id="location"
          {...field}
          value={field.value}
          prefix={
            <svg className={styles.iconMap} width={20} height={20}>
              <use href={`${sprite}#icon-map`} />
            </svg>
          }
          className={styles.autoComplete}
          options={initialLocations}
          placeholder="City"
          onChange={(value) => helpers.setValue(value)}
          filterOption={(inputValue, option) =>
            option.value
              .toUpperCase()
              .replace("UKRAINE", "")
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    </ConfigProvider>
  );
};

export default LocationFilter;
