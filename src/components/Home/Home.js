import About from "../About/About";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Home = ({
  handleDeleteArticle,
  isLoading,
  isSearching,
  visible,
  showMoreItems,
  handleLoginModal,
  handleSignOutClick,
  handleSearchArticles,
  newsCards,
  savedArticles,
  handleSaveArticle,
  keyword,
  handleSavedNewsEnter,
}) => {
  return (
    <>
      <Header
        handleLoginModal={handleLoginModal}
        handleSignOutClick={handleSignOutClick}
        handleSearchArticles={handleSearchArticles}
        isHomePage={true}
        savedArticles={savedArticles}
        handleSavedNewsEnter={handleSavedNewsEnter}
      />
      <Main
        handleLoginModal={handleLoginModal}
        handleDeleteArticle={handleDeleteArticle}
        isLoading={isLoading}
        isSearching={isSearching}
        visible={visible}
        showMoreItems={showMoreItems}
        newsCards={newsCards}
        isHomePage={true}
        keyword={keyword}
        savedArticles={savedArticles}
        handleSaveArticle={handleSaveArticle}
      />
      {visible === 3 && <About />}
    </>
  );
};

export default Home;
