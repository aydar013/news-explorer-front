import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  handleLoginModal,
  handleDeleteArticle,
  savedArticles,
  handleSaveArticle,
  isLoading,
  isSearching,
  visible,
  showMoreItems,
  newsCards,
  isHomePage,
  keyword,
  handleSavedNewsEnter,
}) => {
  return (
    <>
      {isHomePage ? (
        <>
          {isSearching === true && <Preloader />}
          {isLoading === false && (
            <NewsCardList
              handleLoginModal={handleLoginModal}
              handleDeleteArticle={handleDeleteArticle}
              visible={visible}
              showMoreItems={showMoreItems}
              newsCards={newsCards}
              isHomePage={isHomePage}
              handleSaveArticle={handleSaveArticle}
              savedArticles={savedArticles}
              keyword={keyword}
            />
          )}
        </>
      ) : (
        <>
          {isLoading.isLoading === true && <Preloader />}
          <NewsCardList
            handleDeleteArticle={handleDeleteArticle}
            visible={visible}
            handleSaveArticle={handleSaveArticle}
            savedArticles={savedArticles}
            keyword={keyword}
            handleSavedNewsEnter={handleSavedNewsEnter}
          />
        </>
      )}
    </>
  );
};

export default Main;
