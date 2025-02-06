import { useState } from "react";
import { TextInput } from "./TextInput";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState(""); // Houdt de gebruikersinput bij

  return (
    <div>
      <label htmlFor="drink-search">Search for drinks:</label>
      {/* Gebruik de TextInput-component */}
      <TextInput
        id="drink-search"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)} // Update de state bij elke wijziging
      />
      {/* Toon de zoekinput op het scherm om te testen */}
      <p>Search Field Value: {searchField}</p>
    </div>
  );
};
