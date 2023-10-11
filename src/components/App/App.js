import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Api from "../../utils/NewsApi";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SavedNews from "../SavedNews/SavedNews";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LogInModal";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";
import CurrentUserContext from "../../context/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [userLoginModal, setUserLoginModal] = useState(false);
  const [userRegisterModal, setUserRegisterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newsCards, setNewsCards] = useState({});
  const [visible, setVisible] = useState(3);
  const [isSuccessfulModal, setIsSuccessfulModal] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [authError, setAuthError] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const history = useHistory();
  const token = localStorage.getItem("jwt");

  const handleVisibleReset = () => {
    setVisible(3);
  };

  // BUTTON CLICK FUNCTIONS
  const handleCloseModal = () => {
    setUserRegisterModal(false);
    setUserLoginModal(false);
    setIsSuccessfulModal(false);
  };

  const handleLoginModal = () => {
    setUserLoginModal(true);
  };

  const handleSignOutClick = () => {
    setCurrentUser(null);
    localStorage.clear();
    setIsHomePage(true);
    history.push("/");
  };

  const handleSavedNewsEnter = () => {
    setIsHomePage(false);
  };

  const handleSavedNewsExit = () => {
    setIsHomePage(true);
    setNewsCards({});
  };

  const showMoreItems = () => {
    setVisible((items) => items + 3);
  };

  // API FUNCTIONS

  const handleSearchArticles = (input) => {
    const keyword =
      input.charAt(0).toUpperCase() + input.replace(/ .*/, "").slice(1);
    setKeyword(keyword);
    setIsLoading(true);
    setIsSearching(true);
    Api.search({ input })
      .then((data) => {
        setNewsCards(data.articles);
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("keyword", keyword);
      })
      .catch((e) => {
        console.error("Error while searching articles:", e);
      })
      .finally(() => {
        setIsLoading(false);
        setIsSearching(false);
        setVisible(3);
      });
  };

  const handleLogin = (inputs) => {
    setIsLoading(true);
    MainApi.signIn(inputs)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          getSavedNews(data.token);
          setUserLoginModal(false);
        } else {
          setAuthError(data.message || "Invalid data");
        }
      })
      .catch((e) => {
        if (String(e).includes("401") || String(e).includes("400")) {
          setAuthError("Incorrect email or password");
        } else {
          setAuthError("An error occurred while signing in");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    MainApi.register({ name, email, password })
      .then((res) => {
        setUserRegisterModal(false);
        setIsSuccessfulModal(true);
      })
      .catch((e) => {
        if (String(e).includes("409")) {
          console.log("This email has been used already");
        } else {
          console.error(e);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (card) => {
    MainApi.saveArticle(card, token)
      .then((data) => {
        setSavedArticles([...savedArticles, data.data]);
        setSelectedArticleId(data.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteArticle = (card) => {
    MainApi.getArticles(token).then((data) => {
      const findArticleId = data.data.some((article) => {
        return article.link === card.link;
      });
      const articleBeingDeleted = findArticleId
        ? data.data.find((article) => {
            return article.link === card.link;
          })
        : undefined;

      setSelectedArticleId(articleBeingDeleted._id);
      MainApi.deleteArticle(articleBeingDeleted._id, token)
        .then(() => {
          const updateSavedNews = savedArticles.filter(
            (article) => article._id !== articleBeingDeleted._id
          );
          setSavedArticles([...updateSavedNews]);
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  const getSavedNews = (token) => {
    MainApi.getArticles(token)
      .then((data) => {
        setSavedArticles(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // EFFECTS
  useEffect(() => {
    if (token) {
      MainApi.getUser(token)
        .then((data) => {
          setCurrentUser(data.data.name);
          getSavedNews(token);
          handleCloseModal();
        })
        .catch((e) => {
          if (String(e).includes("401")) {
            localStorage.removeItem("jwt");
          } else {
            console.log("Error checking token", e);
          }
        });
    }
  }, [token]);

  useEffect(() => {
    setVisible(3);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Switch>
            <ProtectedRoute currentUser={currentUser} path="/saved-articles">
              <SavedNews
                selectedArticleId={selectedArticleId}
                handleDeleteArticle={handleDeleteArticle}
                isLoading={isLoading}
                visible={visible}
                handleVisibleReset={handleVisibleReset}
                handleSignOutClick={handleSignOutClick}
                isHomePage={isHomePage}
                handleSaveArticle={handleSaveArticle}
                savedArticles={savedArticles}
                keyword={keyword}
                handleSavedNewsEnter={handleSavedNewsEnter}
                handleSavedNewsExit={handleSavedNewsExit}
              />
            </ProtectedRoute>
            <Route path="/">
              <Home
                handleDeleteArticle={handleDeleteArticle}
                isLoading={isLoading}
                isSearching={isSearching}
                handleSaveArticle={handleSaveArticle}
                visible={visible}
                showMoreItems={showMoreItems}
                handleLoginModal={handleLoginModal}
                handleSignOutClick={handleSignOutClick}
                handleSearchArticles={handleSearchArticles}
                newsCards={newsCards}
                isHomePage={isHomePage}
                keyword={keyword}
                savedArticles={savedArticles}
                handleSavedNewsEnter={handleSavedNewsEnter}
              />
            </Route>
          </Switch>
          <Footer />
          {userRegisterModal && (
            <RegisterModal
              isLoading={isLoading}
              authError={authError}
              isOpen={userRegisterModal}
              handleRegister={handleRegister}
              isActive={true}
              onClose={() => setUserRegisterModal(false)}
              switchToLoginModal={() => {
                setUserRegisterModal(false);
                setUserLoginModal(true);
              }}
            />
          )}
          {userLoginModal && (
            <LoginModal
              isLoading={isLoading}
              authError={authError}
              isOpen={userLoginModal}
              isActive={true}
              handleLogin={handleLogin}
              onClose={() => setUserLoginModal(false)}
              switchToSignUpModal={() => {
                setUserLoginModal(false);
                setUserRegisterModal(true);
              }}
            />
          )}
          {isSuccessfulModal && (
            <SuccessfulModal
              isOpen={isSuccessfulModal}
              onClose={() => setIsSuccessfulModal(false)}
              switchToLoginModal={() => {
                setIsSuccessfulModal(false);
                setUserLoginModal(true);
              }}
            />
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
