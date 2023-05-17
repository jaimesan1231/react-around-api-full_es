import React from "react";
import addIcon from "../images/add.svg";
import accepted from "../images/accepted.jpg";
import denied from "../images/denied.jpg";

const InfoTooltip = ({ error, infoToolOpen, handleClose }) => {
  return (
    <div className={`popup ${infoToolOpen && "popup_opened"}`}>
      <div className="popup__container infoTooltip">
        <img
          src={addIcon}
          alt="Icono de cerrar"
          className="popup__close-icon popup__close-icon_place_center "
          onClick={handleClose}
        />
        {error ? (
          <>
            <img src={denied} alt="Icono de rechazo" className="popup__image" />
            <h2 className="popup__title">
              Uy, algo salió mal. Por favor, inténtalo de nuevo
            </h2>
          </>
        ) : (
          <>
            <img
              src={accepted}
              alt="Icono de aprobación"
              className="popup__image"
            />
            <h2 className="popup__title">¡Correcto! Ya estás registrado</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoTooltip;
