import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import Card from '../component/Card';


function Characters() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
      }, []);

  return (
    <div className='row mx-3'>
      {store.characters?.map((character) => (
        <div key={character.uid} className='col-3 my-3'>
          <Card 
          name = {character.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Characters