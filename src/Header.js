import React from 'react';
import './Header.css';
import me from './me.png';

const Header = () => {
  return (
    <header>
      <h1>Alok Pratap</h1>
      <p>Backend Developer | Software Engineer</p>
      <img src={me} alt="Alok Pratap" className="header-img" />
    </header>
  );
};

export default Header;
