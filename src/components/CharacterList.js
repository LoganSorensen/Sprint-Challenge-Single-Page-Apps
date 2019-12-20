import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";
import axios from "axios";
import {ListSection} from "./styles";

const test = {
  color: "red"
}

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setChar(response.data.results);
        })
        .catch(error => {
          console.log("The data was not returned", error)
        })

  }, []);

  return (
    <>
    
    <ListSection className="character-list">
    <SearchForm 
      char={char}
    />
      {/* {char.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
          />
          
        )
      })} */}
    </ListSection>
    </>
  );
}