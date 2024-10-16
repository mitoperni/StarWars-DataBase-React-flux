import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const CardFavorites = ({ name, uid, type }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  let imgSrc;
  switch (type) {
    case "characters":
      imgSrc = actions.getUrlImgCharacter(uid);
      break;
    case "vehicles":
      imgSrc = actions.getUrlImgVehicle(uid);
      break;
    case "planets":
      imgSrc = actions.getUrlImgPlanet(uid);
      break;
    default:
      imgSrc = "https://placehold.co/400"; // Imagen de placeholder
  }

  return (
    <div className="card star-wars-card">
      <img
        className="card-img-top img-fluid"
        src={imgSrc}
        alt={`${name} image`}
        onClick={() => navigate(`/${type}/${uid}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title star-wars-title">{name}</h5>
        <div className="row d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-outline-info px-1 col-8 mb-3 col-sm-6 mb-sm-0 col-md-6 col-xl-6 col-xxl-4"
            onClick={() => navigate(`/${type}/${uid}`)}
          >
            See more details
          </button>
          <button
            type="button"
            className="btn btn-outline-danger px-1 col-8 mb-3 col-sm-6 mb-sm-0 col-md-6 col-xl-6 col-xxl-4"
            onClick={() => actions.removeFromFav(uid)}
          >
            Delete from fav
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFavorites;
