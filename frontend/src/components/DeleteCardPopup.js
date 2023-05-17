import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeleteCardPopup = ({ isOpen, onClose, onDeleteCard, selectedCard }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCard(selectedCard._id);
    onClose();
  };
  return (
    <PopupWithForm
      title="¿Estás seguro/a?"
      name="delete"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button className="form__button">Sí</button>
    </PopupWithForm>
  );
};

export default DeleteCardPopup;
