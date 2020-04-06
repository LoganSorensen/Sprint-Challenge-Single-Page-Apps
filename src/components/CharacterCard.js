import React from "react";
import {CardDiv} from "./styles";

export default function CharacterCard(props) {
  return (
    <CardDiv className="card-cont" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </CardDiv>
  );
}