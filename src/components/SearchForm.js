import React, { useState, useEffect } from "react";
import {SearchBar} from "./styles";
import CharacterCard from "./CharacterCard"

export default function SearchForm(props) {
  console.log(props)
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const results = props.char.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(results);
  }, [query])

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <SearchBar 
          id="search" 
          type="text" 
          name="search" 
          placeholder="Search" 
          value={query}
          onChange={handleChange}
        />
      </form>
      <ul>
        {data.map(character => {
          return (
            <>
              <div key={character.id}>
              <CharacterCard
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
              />
              </div>
            </>
          )
        })}
      </ul>
    </section>
  );
}