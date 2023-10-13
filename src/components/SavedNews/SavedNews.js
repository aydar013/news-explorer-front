import Header from "../Header/Header";
import Main from "../Main/Main";

const SavedNews = ({
  handleDeleteArticle,
  savedArticles,
  handleSaveArticle,
  isLoading,
  visible,
  handleVisibleReset,
  handleSignOutClick,
  keyword,
  handleSavedNewsEnter,
  handleSavedNewsExit,
  isHomePage,
}) => {
  return (
    <>
      <Header
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
        isHomePage={isHomePage}
        handleSavedNewsExit={handleSavedNewsExit}
        savedArticles={savedArticles}
      />
      <Main
        handleDeleteArticle={handleDeleteArticle}
        isLoading={isLoading}
        handleSaveArticle={handleSaveArticle}
        savedArticles={savedArticles}
        visible={visible}
        isHomePage={isHomePage}
        keyword={keyword}
        handleSavedNewsEnter={handleSavedNewsEnter}
      />
    </>
  );
};

export default SavedNews;
