import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={() => props.selectImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
}

export default Card;
