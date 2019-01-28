import React from "react";
import "./style.css";

function CharactersCard(props) {
  return (
    <div className="card" onClick={() => props.cardClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharactersCard;
