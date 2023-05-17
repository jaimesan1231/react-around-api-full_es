import React from "react";
import logo from "../images/logo.svg";
import { Link, useMatch } from "react-router-dom";
import burgerMenu from "../images/burgerMenu.svg";
import add from "../images/add.svg";

const Header = ({ handleSignOut, email }) => {
  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  const onSignOut = () => {
    handleSignOut();
    setOpen(false);
  };
  return (
    <header className={`header ${open && "header_opened"}`}>
      <img src={logo} alt="Logo de Around the US" className="header__logo" />
      {useMatch("/signin") && (
        <Link to="/signup" className="header__link">
          Regístrate
        </Link>
      )}
      {useMatch("/signup") && (
        <Link to="/signin" className="header__link">
          Inicia sesión
        </Link>
      )}
      {useMatch("/") && (
        <>
          <div
            className={`header__user-info ${
              open && "header__user-info_opened"
            }`}
          >
            <span className="header__email">{email}</span>
            <button className="header__logout" onClick={onSignOut}>
              Cerrar sesión
            </button>
          </div>
          {open ? (
            <img
              src={add}
              alt="close menu"
              className="header__close-icon"
              onClick={handleMenu}
            />
          ) : (
            <img
              src={burgerMenu}
              alt="burger menu"
              className="header__menu-icon"
              onClick={handleMenu}
            />
          )}
        </>
      )}
    </header>
  );
};

export default Header;
