import React, { useState } from "react";

const SearchForm = ({ handleSearchArticles }) => {
  const [isQuery, setIsQuery] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleSearchArticles(`${isQuery.toLowerCase()}`);
  };

  return (
    <div className="search-form">
      <div className="search-form__text">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form onSubmit={handleSearchClick}>
        <label className="search-form__label">
          <input
            className="search-form__input"
            type="text"
            minLength="1"
            placeholder="Enter topic"
            onChange={(e) => setIsQuery(e.target.value)}
            value={isQuery}
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
