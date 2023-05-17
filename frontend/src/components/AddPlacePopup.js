import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlaceSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({
      title,
      link,
    });

    onClose();
  };
  React.useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);
  return (
    <PopupWithForm
      title="Agregar"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <label className="form__label">
          <input
            type="text"
            className="form__input"
            id="title"
            placeholder="Titulo"
            minLength="2"
            maxLength="30"
            required
            onChange={handleChangeTitle}
            value={title || ""}
          />
          <span className="form__input-error" id="title-error"></span>
        </label>
        <label className="form__label">
          <input
            type="url"
            className="form__input"
            id="link"
            placeholder="Enlace a la imagen"
            required
            onChange={handleChangeLink}
            value={link || ""}
          />
          <span className="form__input-error" id="link-error"></span>
        </label>
        <button className="form__button">Crear</button>
      </>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
