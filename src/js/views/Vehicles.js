import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import Card from '../component/Card';

function Vehicles() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <>
      <div>
        <h2>These are the main <strong>vehicles</strong> from Star Wars:</h2>
      </div>
      <div className='row mx-3'>
        {store.vehicles?.map((vehicle) => (
          <div key={vehicle.uid} className='col-3 my-3'>
            <Card 
              name={vehicle.name} 
              uid={vehicle.uid} 
              type="vehicles" 
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Vehicles;
