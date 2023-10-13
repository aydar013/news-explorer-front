import React, { useState, useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIconBlack from "../../images/logout-black.svg";
import menuBlack from "../../images/menu-black.svg";
import { Link } from "react-router-dom";
import logoutIconWhite from "../../images/logout-white.svg";
import menuWhite from "../../images/menu-white.svg";
import Menu from "../Menu/Menu";

const NavBar = ({
  handleVisibleReset,
  handleLoginModal,
  handleSignOutClick,
  isHomePage,
  handleSavedNewsExit,
  handleSavedNewsEnter,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isMenuNliToggled, setIsMenuNliToggled] = useState(false);
  const [isMenuLiToggled, setIsMenuLiToggled] = useState(false);

  const handleHamburgerNliAppear = () => {
    setIsMenuNliToggled(true);
  };
  const handleHamburgerNliDisappear = () => {
    setIsMenuNliToggled(false);
  };
  const handleHamburgerMenuClick = () => {
    setIsMenuToggled(true);
  };

  const handleHamburgerLiAppear = () => {
    setIsMenuLiToggled(true);
  };
  const handleHamburgerLiDisappear = () => {
    setIsMenuLiToggled(false);
  };
  const handleCloseIconClick = () => {
    setIsMenuToggled(false);
  };

  const handleCloseOnOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuLiToggled(false);
      setIsMenuNliToggled(false);
      setIsMenuToggled(false);
    }
  };

  const handleSigninModal = () => {
    handleLoginModal();
    setIsMenuNliToggled(false);
  };

  const handleMenuLiSignout = () => {
    handleHamburgerLiDisappear();
    handleSignOutClick();
  };

  return (
    <>
      {isHomePage ? (
        <div className="navbar__home">
          {currentUser === null ? (
            <section className="navbar-nli">
              <h2 className="navbar-nli__logo" id="home">
                NewsExplorer
              </h2>
              <div className="navbar-nli__buttons">
                <img
                  className="navbar-nli__toggle-button"
                  src={menuWhite}
                  onClick={handleHamburgerNliAppear}
                  alt="hamburger icon"
                />
                <Link
                  to="/"
                  style={{ textDecoration: "none", alignSelf: "center" }}
                >
                  <button className="navbar-nli__home-button">Home</button>
                </Link>
                <button
                  type="button"
                  className="navbar-nli__signin-button"
                  onClick={handleSigninModal}
                >
                  Sign in
                </button>
              </div>
            </section>
          ) : (
            <section className="navbar-li">
              <h2 className="navbar-li__logo" id="home">
                NewsExplorer
              </h2>
              <div className="navbar-li__buttons">
                <img
                  className="navbar-li__toggle-button"
                  src={menuWhite}
                  onClick={handleHamburgerLiAppear}
                  alt="hamburger icon"
                />
                <Link to="/">
                  <button className="navbar-li__home">Home</button>
                </Link>
                <Link
                  to="/saved-articles"
                  style={{ textDecoration: "none", alignSelf: "center" }}
                >
                  <button
                    className="navbar-li__saved-articles"
                    onClick={handleSavedNewsEnter}
                  >
                    Saved Articles
                  </button>
                </Link>
                <button
                  className="navbar-li__signout"
                  onClick={handleSignOutClick}
                >
                  <p className="navbar-li__name">{`${currentUser}`} </p>
                  <img
                    className="navbar-li__signout-icon"
                    src={logoutIconWhite}
                    alt="signout icon"
                  />
                </button>
              </div>
            </section>
          )}
          {isMenuNliToggled && (
            <Menu
              handleSigninModal={handleSigninModal}
              handleCloseOnOverlayClick={handleCloseOnOverlayClick}
              handleHamburgerNliDisappear={handleHamburgerNliDisappear}
              isHomePage={true}
            />
          )}
          {isMenuLiToggled && (
            <Menu
              handleHamburgerLiDisappear={handleHamburgerLiDisappear}
              handleMenuLiSignout={handleMenuLiSignout}
              handleCloseOnOverlayClick={handleCloseOnOverlayClick}
              isHomePage={true}
              handleSavedNewsEnter={handleSavedNewsEnter}
            />
          )}
        </div>
      ) : (
        <>
          <section className="navbar-articles">
            <Link
              to="/"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <h2
                className="navbar-articles__logo"
                onClick={handleVisibleReset}
                id="home"
              >
                NewsExplorer
              </h2>
            </Link>

            <div className="navbar-articles__buttons">
              <img
                className="navbar-articles__toggle-button"
                src={menuBlack}
                onClick={handleHamburgerMenuClick}
                alt="hamburger icon"
              />
              <Link
                to="/"
                className="navbar-articles__button-link"
                style={{ textDecoration: "none", alignSelf: "center" }}
              >
                <button
                  className="navbar-articles__button"
                  onClick={handleVisibleReset}
                >
                  Home
                </button>
              </Link>

              <button
                className="navbar-articles__button"
                id="saved-articles__button"
                disabled
              >
                Saved Articles
              </button>
              <button
                className="navbar-articles__signout"
                onClick={handleSignOutClick}
              >
                {currentUser}
                <img
                  className="navbar-articles__signout-icon"
                  src={logoutIconBlack}
                  alt="Logout icon"
                />
              </button>
            </div>
          </section>
          {isMenuToggled && (
            <Menu
              handleCloseIconClick={handleCloseIconClick}
              handleVisibleReset={handleVisibleReset}
              handleSignOutClick={handleSignOutClick}
              isHomePage={false}
            />
          )}
        </>
      )}
    </>
  );
};

export default NavBar;
