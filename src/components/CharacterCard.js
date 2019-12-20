import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="card-cont" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  );
}