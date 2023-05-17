import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onDeleteCardClick }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const handleClick = () => {
    onCardClick(card);
  };

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((id) => id === currentUser._id);
  const handleLikeClick = () => {
    onCardLike(card);
  };
  const handleDeleteCardClick = () => {
    onDeleteCardClick(card);
  };
  return (
    <li className="card">
      <button
        className={`card__delete-icon card__delete-icon_${
          isOwn ? "visible" : "hidden"
        }`}
        onClick={handleDeleteCardClick}
      ></button>
      <img
        src={card.link}
        alt={`Imagen de ${card.name}`}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__footer">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={`card__like-icon ${isLiked && "card__like-icon_active"}`}
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-number card__like-number_visible">
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Card;
