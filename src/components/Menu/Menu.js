import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import closeButton from "../../images/close-button.svg";
import logoutIcon from "../../images/logout-white.svg";
import { Link } from "react-router-dom";
import logoutIconWhite from "../../images/logout-white.svg";

const Menu = ({
  handleHamburgerNliDisappear,
  handleCloseOnOverlayClick,
  handleMenuLiSignout,
  handleSignOutClick,
  handleVisibleReset,
  handleCloseIconClick,
  handleSigninModal,
  handleHamburgerLiDisappear,
  isHomePage,
  handleSavedNewsEnter,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      {isHomePage ? (
        <>
          {currentUser ? (
            <section className="menu" onClick={handleCloseOnOverlayClick}>
              <div className="menu-li">
                <div className="menu-li__top">
                  <h2 className="menu-li__logo">NewsExplorer</h2>
                  <img
                    className="menu-li__close-button"
                    src={closeButton}
                    onClick={handleHamburgerLiDisappear}
                    alt="close modal icon"
                  />
                </div>
                <div className="menu-li__bottom">
                  <button className="menu-li__home-button">Home</button>
                  <Link
                    to="/saved-articles"
                    style={{ textDecoration: "none", alignSelf: "flex-start" }}
                  >
                    <button
                      className="menu-li__saved-articles-button"
                      onClick={handleSavedNewsEnter}
                    >
                      Saved Articles
                    </button>
                  </Link>
                  <button
                    className="menu-li__signout-button"
                    onClick={handleMenuLiSignout}
                  >
                    {`${currentUser}`}{" "}
                    <img
                      className="navbar-li__signout-icon"
                      src={logoutIconWhite}
                      alt="Logout icon"
                    />
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <section className="menu" onClick={handleCloseOnOverlayClick}>
              <div className="menu-nli">
                <div className="menu-nli__top">
                  <h2 className="menu-nli__logo">NewsExplorer</h2>
                  <img
                    className="menu-nli__close-button"
                    src={closeButton}
                    onClick={handleHamburgerNliDisappear}
                    alt="close modal icon"
                  />
                </div>
                <div className="menu-nli__bottom">
                  <Link to="/" className="menu-nli__button-link">
                    <button
                      className="menu-nli__home-button"
                      onClick={handleHamburgerNliDisappear}
                    >
                      Home
                    </button>
                  </Link>
                  <button
                    className="menu-nli__signin-button"
                    onClick={handleSigninModal}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="menu" onClick={handleCloseOnOverlayClick}>
          <div className="menu-articles">
            <div className="menu-articles__top">
              <h2 className="menu-articles__logo">NewsExplorer</h2>
              <img
                className="menu-articles__close-button"
                src={closeButton}
                onClick={handleCloseIconClick}
                alt="close modal icon"
              />
            </div>
            <div className="menu-articles__bottom">
              <Link
                to="/"
                className="menu-articles__button-link"
                style={{
                  textDecoration: "none",
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                <button
                  className="menu-articles__button"
                  onClick={handleVisibleReset}
                >
                  Home
                </button>
              </Link>
              <Link
                to="/saved-articles"
                className="menu-articles__button-link"
                style={{
                  textDecoration: "none",
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                <button
                  className="menu-articles__button"
                  id="saved-articles__button"
                >
                  Saved Articles
                </button>
              </Link>
              <button
                className="menu-articles__signout"
                onClick={handleSignOutClick}
              >
                {currentUser}
                <img
                  className="menu-articles__signout-icon"
                  src={logoutIcon}
                  alt="Logout icon"
                />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Menu;
