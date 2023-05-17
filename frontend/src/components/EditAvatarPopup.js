import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const link = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(link.current.value);
    onClose();
  };
  React.useEffect(() => {
    link.current.value = "";
  }, [isOpen]);
  return (
    <PopupWithForm
      title="Avatar"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <label className="form__label">
          <input
            type="url"
            className="form__input"
            id="avatar"
            placeholder="Enlace a la imagen"
            required
            ref={link}
          />
          <span className="form__input-error" id="avatar-error"></span>
        </label>
        <button className="form__button">Guardar</button>
      </>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
