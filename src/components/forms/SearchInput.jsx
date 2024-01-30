import React, { useState } from "react";
import '/src/style/input.css';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search__container">
      <input
        id="searchInput"
        type="text"
        className="search__input"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Trouver vos ingredients..."
      />
      <button type="button" className="search__btn" onClick={handleSearchClick}>
        <img src="/public/search_icon.svg" alt="icon search"/>
      </button>
    </div>
  );
};

export default SearchInput;

