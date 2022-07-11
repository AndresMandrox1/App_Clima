import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Search a city..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className='holder'
      />
      <input type="submit" value="Search" className="btnA"/>
    </form>
  );
}
