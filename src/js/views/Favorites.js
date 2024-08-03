import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardFavorites from "../component/CardFavorites";

function Favorites() {
  const { store } = useContext(Context);

  return (
    <>
      <div>
        <h2>
          These are your <strong>favorites</strong> from Star Wars:
        </h2>
      </div>
      <div className="row mx-3">
        {store.favorites?.map((favorite) => (
          <div key={favorite.uid} className="col-3 my-3">
            <CardFavorites name={favorite.name} uid={favorite.uid} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;
