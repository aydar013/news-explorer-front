import { useContext, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { handleDateFormat } from "../../utils/constants";

const NewsCard = ({
  handleDeleteArticle,
  cardInfo,
  index,
  keyword,
  savedArticles,
  handleSaveArticle,
  isHomePage,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [isHovering, setIsHovering] = useState(-1);

  const card = {
    keyword: keyword || cardInfo.keyword,
    title: cardInfo.title,
    text: cardInfo.description || cardInfo.text,
    date: cardInfo.publishedAt || cardInfo.date,
    source: cardInfo.source.name || cardInfo.source,
    link: cardInfo.url || cardInfo.link,
    image: cardInfo.urlToImage || cardInfo.image,
    id: cardInfo._id || cardInfo.id,
  };

  const bookmarked = savedArticles.some(
    (article) => article.link === card.link
  );

  const cardButtonClassName = bookmarked
    ? "card__bookmark card__bookmark-active"
    : "card__bookmark card__bookmark-inactive";

  const handleBookmarkButtonClick = (e) => {
    const isBookmarkActive = e.target.classList.contains(
      "card__bookmark-active"
    );

    if (isBookmarkActive) {
      e.target.classList.remove("card__bookmark-active");
      e.target.classList.add("card__bookmark-inactive");
      handleDeleteArticle(card);
    } else {
      e.target.classList.add("card__bookmark-active");
      e.target.classList.remove("card__bookmark-inactive");
      handleSaveArticle(card);
    }
  };

  const handleDeleteClick = () => {
    handleDeleteArticle(card);
  };

  return (
    <>
      {isHomePage ? (
        <div className="card">
          <Link
            to={{ pathname: `${card.link}` }}
            style={{ textDecoration: "none", alignSelf: "center" }}
            target="_blank"
            className="card__link"
          >
            <img className="card__image" src={card.image} alt={card.title} />
            <h3 className="card__date">
              {handleDateFormat(card.date.slice(0, 10))}
            </h3>
            <h2 className="card__title">{card.title}</h2>
            <h3 className="card__description">{card.text}</h3>
            <h3 className="card__source">{card.source}</h3>
            <div
              className={`${
                isHovering === index ? "card__signin" : "card__signin__hidden"
              }`}
            >
              Sign in to save articles
            </div>
          </Link>
          <div>
            <button
              className={cardButtonClassName}
              onClick={
                currentUser !== null ? handleBookmarkButtonClick : undefined
              }
              onMouseEnter={
                currentUser === null ? () => setIsHovering(index) : undefined
              }
              onMouseLeave={
                currentUser === null ? () => setIsHovering(-1) : undefined
              }
            ></button>
          </div>
        </div>
      ) : (
        <div className="card">
          <Link
            to={{ pathname: `${card.link}` }}
            style={{ textDecoration: "none", alignSelf: "center" }}
            target="_blank"
            className="card__link"
          >
            <img className="card__image" src={card.image} alt={card.title} />
            <h3 className="card__date">
              {handleDateFormat(card.date.slice(0, 10))}
            </h3>
            <h2 className="card__title">{card.title}</h2>
            <h3 className="card__description">{card.text}</h3>
            <h3 className="card__source">{card.source}</h3>
          </Link>
          <button className="card__delete-button" onClick={handleDeleteClick}>
            <div className="card__trash-icon"></div>
            <div className="card__delete-text">Remove from saved</div>
          </button>
          <div className="card__subtitle">{cardInfo.keyword}</div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
