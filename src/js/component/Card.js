import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src="https://placehold.co/400"
        alt="Card image cap"
        onClick={() => navigate(`/${props.type}/${props.uid}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="row d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-warning px-1 col-8 mb-3 col-sm-6 mb-sm-0 col-md-6 col-xl-6 col-xxl-4"
            onClick={() => {
              actions.saveToFav(props.uid, props.type);
            }}
          >
            Add to Favorites
          </button>
          <br className="d-sm-none" />
          <button
            type="button"
            className="btn btn-outline-info px-1 col-8 mb-3 col-sm-6 mb-sm-0 col-md-6 col-xl-6 col-xxl-4"
            onClick={() => navigate(`/${props.type}/${props.uid}`)}
          >
            See more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
