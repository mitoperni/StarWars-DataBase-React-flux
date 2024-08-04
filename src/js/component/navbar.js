import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/star-wars-logo.png"; 

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-3">
      <Link to="/" className="navbar-brand">
        <img src={starWarsLogo} alt="Star Wars Logo" height="50" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/characters" className="nav-link">
              Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/vehicles" className="nav-link">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <div className="btn-group d-flex flex-column">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </button>
              <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};
