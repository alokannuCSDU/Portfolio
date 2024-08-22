import React from 'react';
import './Styles.css';

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>CERTIFICATIONS</h2>
      <ul>
        <div>
          <li>
            HTML, CSS & JavaScript: Coursera
            <a href="./html.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
          </li>
          <li>
            Excel: Simplilearn
            <a href="./Excel.pdf" target="_blank" rel="noopener noreferrer"> [PDF]</a>
           </li>
          <li>
            Python: Perfect e-learning
           <a href="./Python.jpg" target="_blank" rel="noopener noreferrer">Image</a>
          </li>
          <li>
            Introduction to Social Media: Meta
            <a href="./Meta.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Certifications;
