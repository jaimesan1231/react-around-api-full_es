import React from "react";
import addIcon from "../images/add.svg";

const PopupWithForm = ({
  children,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`${name}-popup`}
    >
      <div className="popup__container">
        <img
          src={addIcon}
          alt="Icono de cerrar"
          className="popup__close-icon"
          onClick={onClose}
        />
        <form
          action="#"
          className="form"
          id={`${name}-form`}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="form__title">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
