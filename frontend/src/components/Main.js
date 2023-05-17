import React from "react";
import addIcon from "../images/add.svg";
import editIcon from "../images/edit.svg";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onCardLike,
  onDeleteCardClick,
  cards,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatarClick}>
          <img
            src={currentUser.avatar}
            alt="Persona mayor con el mar de fondo"
            className="profile__avatar"
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" onClick={onEditProfileClick}>
            <img src={editIcon} alt="Icono de editar" />
          </button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlaceClick}>
          <img src={addIcon} alt="Icono de agregar" />
        </button>
      </section>
      <section>
        <ul className="cards-container">
          {cards && cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onDeleteCardClick={onDeleteCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
