import React from 'react';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
