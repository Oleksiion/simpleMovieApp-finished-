import React from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/hero.png";

const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        style={{
          width: "90px",
          height: "60px",
        }}
        alt="Logo"
      />
      <img src={Hero} alt="" />
      <h1>
        Find <span className="text-gradient">Movies</span> You'll Enjoy Without
        the Hassle
      </h1>
    </header>
  );
};

export default Header;
