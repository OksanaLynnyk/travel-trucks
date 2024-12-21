import { useEffect, useState } from "react";
import EquipmentList from "../EquipmentList/EquipmentList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataCampers } from "../../redux/campers/operations";
import { Loader } from "../Loader/Loader";

const VehicleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.campers);
  const isLoading = useSelector((state) => state.campers.loading);
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(getDataCampers());
    }
  }, [dispatch, campers]);

  useEffect(() => {
    const selectedCamper = campers.find((camper) => camper.id === id);
    setCamper(selectedCamper);
  }, [campers, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!camper) {
    return <div>Camper data not found</div>;
  }

  return (
    <section>
      <EquipmentList camper={camper} />
    </section>
  );
};

export default VehicleDetails;
