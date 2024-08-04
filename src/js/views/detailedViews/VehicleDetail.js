import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

const VehicleDetail = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicleDetails(uid);
  }, [uid]);

  if (store.loading) {
    return <div>Loading...</div>;
  }

  if (!store.vehicle) {
    return <div>Vehicle not found</div>;
  }

  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class
  } = store.vehicle.properties;

  return (
    <div className="container">
      <h1>{name}</h1>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Manufacturer:</strong> {manufacturer}</p>
      <p><strong>Cost in Credits:</strong> {cost_in_credits}</p>
      <p><strong>Length:</strong> {length}</p>
      <p><strong>Max Atmosphering Speed:</strong> {max_atmosphering_speed}</p>
      <p><strong>Crew:</strong> {crew}</p>
      <p><strong>Passengers:</strong> {passengers}</p>
      <p><strong>Cargo Capacity:</strong> {cargo_capacity}</p>
      <p><strong>Consumables:</strong> {consumables}</p>
      <p><strong>Vehicle Class:</strong> {vehicle_class}</p>
      <p><strong>Description:</strong> {store.vehicle.description}</p>
    </div>
  );
};

export default VehicleDetail;
