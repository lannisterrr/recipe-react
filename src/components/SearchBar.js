import React, { useContext } from 'react';
import { RecipeContext } from '../App';

export default function SearchBar() {
  const { inputValue, handleInputChange, clearInput } =
    useContext(RecipeContext);

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-3 round-corner"
        placeholder="Search Recipe..."
      />
      <button onClick={clearInput} type="submit">
        Search
      </button>
    </div>
  );
}
