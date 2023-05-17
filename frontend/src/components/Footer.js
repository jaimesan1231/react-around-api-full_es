import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copy">&copy; {currentYear} Alrededor de los EEUU</p>
    </footer>
  );
};

export default Footer;
