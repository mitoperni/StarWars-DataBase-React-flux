import React from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <div className="my-5">
        <h1>Hello Star Wars fan!!</h1>
        <h2>
          Here you have a database with the main characters, vehicles and
          planets.
        </h2>
      </div>

      <div className="row mx-4 my-4">
        <div className="col-4 max-h-img">
          <img
            src="https://static1.therichestimages.com/wordpress/wp-content/uploads/2019/12/00-Star-Wars_-The-Main-Characters-Real-Life-Ages-and-Relationship-Statuses.jpg"
            alt="Star Wars Characters"
            className="img-fluid"
          />
          <button
            type="button"
            className="btn btn-outline-warning my-3"
            onClick={() => {
              navigate("/characters");
            }}
          >
            Go to characters
          </button>
        </div>
        <div className="col-4 max-h-img">
          <img
            src="https://imgix.ranker.com/list_img_v2/6954/2626954/original/full-sized-fan-made-star-wars-vehicles-u2"
            alt="Star Wars Vehicles"
            className="img-fluid"
          />
          <button
            type="button"
            className="btn btn-outline-primary my-3"
            onClick={() => {
              navigate("/vehicles");
            }}
          >
            Go to vehicles
          </button>
        </div>
        <div className="col-4 max-h-img">
          <img
            src="https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/10-more-star-wars-planets-as-countries.png"
            alt="Star Wars Planets"
            className="img-fluid"
          />
          <button
            type="button"
            className="btn btn-outline-secondary my-3"
            onClick={() => {
              navigate("/planets");
            }}
          >
            Go to planets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home