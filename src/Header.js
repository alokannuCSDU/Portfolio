import React from 'react';
import './Styles.css';
import me from './me.png';

const Header = () => {
  return (
   <section id="header">
   <div id="naam">
     <h1>ALOK PRATAP</h1>
   <p>Backend Developer | Software Engineer</p>
   <li>
           RESUME
   <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
   </li>
   <img src={me} alt="Alok Pratap" className="header-img" />
   </div>
   </section>
  
  );
};

export default Header;
