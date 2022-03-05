import React, { useState } from 'react';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState();
  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="p-3 round-corner"
        placeholder="Search Recipe..."
      />
    </div>
  );
}
