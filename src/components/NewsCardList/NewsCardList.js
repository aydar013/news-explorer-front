import React from "react";
import NothingFound from "../NothingFound/NothingFound";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  handleLoginModal,
  handleDeleteArticle,
  visible,
  handleSaveArticle,
  savedArticles,
  showMoreItems,
  newsCards,
  isHomePage,
  keyword,
}) => {
  const cardsVisible = isHomePage ? visible : savedArticles.length;

  const totalItems = 100;

  return (
    <>
      {isHomePage ? (
        <>
          {newsCards.length > 0 && (
            <div className="search-result">
              <div className="search-result__container">
                <h2 className="search-result__title">Search results</h2>
                <section className="search__cards">
                  <div className="card__container">
                    {newsCards.slice(0, cardsVisible).map((card, i) => (
                      <NewsCard
                        handleLoginModal={handleLoginModal}
                        handleDeleteArticle={handleDeleteArticle}
                        cardInfo={card}
                        index={i}
                        key={i}
                        savedArticles={savedArticles}
                        handleSaveArticle={handleSaveArticle}
                        keyword={keyword}
                        isHomePage={isHomePage}
                      />
                    ))}
                  </div>
                </section>
                {visible < totalItems && (
                  <button className="search__show-more" onClick={showMoreItems}>
                    Show more
                  </button>
                )}
              </div>
            </div>
          )}
          {newsCards.length <= 0 && <NothingFound />}
        </>
      ) : (
        <>
          <div className="card__container">
            {savedArticles.slice(0, cardsVisible).map((card, i) => (
              <NewsCard
                handleDeleteArticle={handleDeleteArticle}
                cardInfo={card}
                index={i}
                key={i}
                savedArticles={savedArticles}
                handleSaveArticle={handleSaveArticle}
                keyword={keyword}
                isHomePage={isHomePage}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NewsCardList;
