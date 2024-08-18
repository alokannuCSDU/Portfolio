import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT ME</h2>
      <p><i className="fas fa-envelope"></i> Email: <a href="mailto:alok.mca21.du@gmail.com">alok.mca21.du@gmail.com</a></p>
      <p><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/alok-pratap-758700217" target="_blank">Alok Pratap</a></p>
      <p><i className="fab fa-github"></i> GitHub: <a href="https://github.com/alokannuCSDU" target="_blank">alokannuCSDU</a></p>
      <p><i className="fas fa-phone"></i> Call Me: <a href="tel:+919517424924">+91 9517424924</a></p>
    </section>
  );
};

export default Contact;
