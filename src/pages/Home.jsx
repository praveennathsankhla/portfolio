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
      <Projects projects={{
          title:"Arya",
          about:`Arya is an AI-powered personal assistant designed to think, learn, and respond like a human—fast, smart, and contextual.
It works like ChatGPT or Gemini but with a personal touch, keeping per-user chat history, understanding intent, and helping users solve real problems efficiently.`,
         tech: "Frontend: React.js, Tailwind CSS | Backend: Node.js, Express.js | Database: MongoDB",
         link:"https://chatgpt.com/"

      }}/>
      <TechStack />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
