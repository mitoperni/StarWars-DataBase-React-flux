import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

const PlanetDetail = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanetDetails(uid);
  }, [uid]);

  if (store.loading) {
    return <div>Loading...</div>;
  }

  if (!store.planet) {
    return <div>Planet not found</div>;
  }

  // Destructuring properties for easier access
  const {
    name,
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    population,
    climate,
    terrain,
    surface_water
  } = store.planet.properties;

  return (
    <div className="container">
      <h1>{name}</h1>
      <p><strong>Diameter:</strong> {diameter}</p>
      <p><strong>Rotation Period:</strong> {rotation_period}</p>
      <p><strong>Orbital Period:</strong> {orbital_period}</p>
      <p><strong>Gravity:</strong> {gravity}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Climate:</strong> {climate}</p>
      <p><strong>Terrain:</strong> {terrain}</p>
      <p><strong>Surface Water:</strong> {surface_water}</p>
      <p><strong>Description:</strong> {store.planet.description}</p>
    </div>
  );
};

export default PlanetDetail;
