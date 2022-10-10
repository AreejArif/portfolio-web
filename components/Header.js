import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.__header___container}>
      <a href="#contact">Contact</a>
      <a href="#Services">Services</a>
      <a href="#about">About</a>
      <a href="#Gallery">Gallery</a>
      <a class="active" href="#home">
        Home
      </a>
    </div>
  );
};

export default Header;
