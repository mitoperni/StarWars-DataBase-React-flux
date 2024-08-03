import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import Card from '../component/Card';


function Vehicles() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
      }, []);

  return (
    <div className='row mx-3'>
      {store.vehicles?.map((vehicle) => (
        <div key={vehicle.uid} className='col-3 my-3'>
          <Card 
          name = {vehicle.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Vehicles