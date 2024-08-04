import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

function Characters() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <>
      <div className="mx-4">
      <h2 className="star-wars-title">
      These are the main <strong>characters</strong> from Star Wars:
        </h2>
      </div>
      <div className="row mx-3 mt-3">
        {store.characters?.map((character) => (
          <div key={character.uid} className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
            <Card name={character.name} uid={character.uid} type="characters"  />
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
