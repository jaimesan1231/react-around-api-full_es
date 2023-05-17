import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, about: description });
    onClose();
  };
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title="Editar"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <label className="form__label">
          <input
            type="text"
            className="form__input"
            id="name"
            minLength="2"
            maxLength="40"
            required
            value={name || ""}
            onChange={handleChangeName}
          />
          <span className="form__input-error" id="name-error"></span>
        </label>
        <label className="form__label">
          <input
            type="text"
            className="form__input"
            id="job"
            minLength="2"
            maxLength="200"
            required
            value={description || ""}
            onChange={handleChangeDescription}
          />
          <span className="form__input-error" id="job-error"></span>
        </label>
        <button className="form__button">Guardar</button>
      </>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
