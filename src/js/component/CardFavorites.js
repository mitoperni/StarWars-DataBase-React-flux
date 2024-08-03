import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardFavorites = (props) => {
  const { actions } = useContext(Context);

  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src="https://placehold.co/400"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            actions.removeFromFav(props.uid);
          }}
        >
          Remove from Favorites
        </button>
      </div>
    </div>
  );
};

export default CardFavorites;
