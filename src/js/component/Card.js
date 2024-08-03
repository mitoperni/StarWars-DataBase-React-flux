import React from "react";

const Card = (props) => {
    return (
      <div className="card" >
        <img className="card-img-top img-fluid" src="https://placehold.co/400" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
  
  export default Card;