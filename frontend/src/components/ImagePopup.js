import React from "react";
import addIcon from "../images/add.svg";
const ImagePopup = ({ isOpen, selectedCard, onClose }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} id="image-popup">
      {selectedCard && (
        <div className="popup__image-container">
          <img
            src={addIcon}
            alt="Icono de cerrar"
            className="popup__close-icon"
            onClick={onClose}
          />
          <img
            src={selectedCard.link}
            alt={`Imagen de ${selectedCard.name}`}
            className="popup__image"
          />
          <p className="popup__image-title">{selectedCard.name}</p>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
