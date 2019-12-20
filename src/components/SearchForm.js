import React, { useState, useEffect } from "react";

// const characters = [
//   "Harry Potter",
//   "Luna Lovegood",
//   "Neville Longbottom",
//   "Hermione Granger",
//   "Ron Weasley",
//   "Ginny Weasley",
//   "Fred Weasley",
//   "George Weasley",
//   "Albus Dumbledore ",
//   "Aberforth Dumbledore ",
//   "Dudley Dursley ",
//   "Petunia Dursley ",
//   "Vernon Dursley",
//   "Cornelius Fudge",
//   "Rubeus Hagrid ",
//   "Viktor Krum ",
//   "Bellatrix Lestrange",
//   "Narcissa Malfoy",
//   "Draco Malfoy"
// ];

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results)
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input 
          id="search" 
          type="text" 
          name="search" 
          plaeholder="Search" 
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <ul>
        {searchResults.map(character => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </section>
  );
}
