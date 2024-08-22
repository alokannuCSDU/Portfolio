import React from 'react';
import './Styles.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Certificate from './Certifications';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  return (
    <div id="apps">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience/>
      <Certificate/>
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
