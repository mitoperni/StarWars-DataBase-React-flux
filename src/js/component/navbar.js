import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/star-wars-logo.png"; // Asegúrate de tener este logo en tu carpeta de imágenes

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 px-3">
      <Link to="/">
        <img src={starWarsLogo} alt="Star Wars Logo" height="50" />
      </Link>
      <div className="ml-auto d-flex">
        <Link to="/characters">
          <button className="btn btn-outline-warning mx-2">Characters</button>
        </Link>
        <Link to="/vehicles">
          <button className="btn btn-outline-primary mx-2">Vehicles</button>
        </Link>
        <Link to="/planets">
          <button className="btn btn-outline-secondary mx-2">Planets</button>
        </Link>
        <div className="btn-group mx-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item">No favorites</li>
            ) : (
              store.favorites.map((fav, index) => (
                <li className="dropdown-item d-flex justify-content-between align-items-center" key={index}>
                  {fav.name}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => actions.removeFromFav(fav.uid)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))
            )}
            <li>
              <Link to="/favorites" className="dropdown-item text-center">
                View All
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
