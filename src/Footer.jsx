import React from "react";
import "./Footer.css";  

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        &copy;{new Date().getFullYear()} Lalit Maity — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;


