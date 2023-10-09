import React, { useContext } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CurrentUserContext from "../../context/CurrentUserContext";
import NavBar from "../NavBar/NavBar";

const Header = ({
  handleVisibleReset,
  handleSignOutClick,
  handleLoginModal,
  handleSearchArticles,
  isHomePage,
  handleSavedNewsExit,
  savedArticles,
  handleSavedNewsEnter,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const keywords = savedArticles.map((article) => article.keyword);

  const getKeywordString = (data) => {
    const keywordCounts = {};

    for (const keyword of data) {
      keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
    }

    const sortedKeywords = Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([keyword]) => keyword);

    if (sortedKeywords.length === 0) {
      return null;
    }

    if (sortedKeywords.length === 1) {
      return sortedKeywords[0];
    }

    if (sortedKeywords.length === 2) {
      return `${sortedKeywords[0]} and ${sortedKeywords[1]}`;
    }

    return `${sortedKeywords.slice(0, 2).join(", ")}, and ${
      sortedKeywords.length - 2
    } more`;
  };

  const keywordString = getKeywordString(keywords);

  return (
    <header className={isHomePage ? "header-home" : "header-articles"}>
      <NavBar
        handleLoginModal={handleLoginModal}
        handleSignOutClick={handleSignOutClick}
        handleVisibleReset={handleVisibleReset}
        isHomePage={isHomePage}
        handleSavedNewsExit={handleSavedNewsExit}
        handleSavedNewsEnter={handleSavedNewsEnter}
      />
      {isHomePage ? (
        <SearchForm handleSearchArticles={handleSearchArticles} />
      ) : (
        <>
          <h1 className="header-articles__title">Saved news</h1>
          <h2 className="header-articles__subtitle">
            {`${currentUser}, you have ${savedArticles.length} saved news`}
          </h2>
          <p className="header-articles__keywords">
            By keywords:{" "}
            <span className="header-articles__keywords-names">
              {keywordString || ""}
            </span>
          </p>
        </>
      )}
    </header>
  );
};

export default Header;
