import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router";

export const Home = () => {
	const navigate = useNavigate();


  return (
    <div className="text-center mt-5">
      <h1>Hello Star Wars fan!!</h1>
      <h2>
        Here you have a database with the main characters, vehicles and planets.
      </h2>
      <div className="row mx-4 my-5">
        <div className="col-4">
          <img src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" alt="Star Wars Characters" className="img-fluid"></img>
          <button type="button" className="btn btn-outline-warning my-3" onClick={() => {navigate("/characters")}}>Go to characters</button>
        </div>
        <div className="col-4">
          <img src="https://media.entertainmentearth.com/assets/images/f1dab1ce42c24c1ba2a200232d76e6cblg.jpg" alt="Star Wars Characters" className="img-fluid"></img>
          <button type="button" className="btn btn-outline-primary my-3" onClick={() => {navigate("/vehicles")}}>Go to vehicles</button>
        </div>
        <div className="col-4">
          <img src="https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/10-more-star-wars-planets-as-countries.png" alt="Star Wars Characters" className="img-fluid"></img>
          <button type="button" className="btn btn-outline-success my-3" onClick={() => {navigate("/planets")}}>Go to planets</button>
        </div>
      </div>
    </div>
  );
};
