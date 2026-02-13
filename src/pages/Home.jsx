import React from 'react';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {

  const projectsData = [
    {
      title: "Arya",
      about: `Arya is an AI-powered personal assistant designed to think, learn, and respond like a human—fast, smart, and contextual.
It works like ChatGPT or Gemini but with a personal touch, keeping per-user chat history, understanding intent, and helping users solve real problems efficiently.`,
      tech: "Frontend: React.js, Tailwind CSS | Backend: Node.js, Express.js | Database: MongoDB",
      link: "https://chatgpt.com/"
    },
    {
      title: "Portfolio Website",
      about: "A personal portfolio website to showcase my projects and skills.",
      tech: "React.js, Tailwind CSS",
      link: "https://myportfolio.com"
    },
    {
      title: "E-Commerce App",
      about: "An online shopping platform with cart, payment and admin panel.",
      tech: "React.js, Node.js, MongoDB",
      link: "https://mystore.com"
    }
  ];

  return (
    <div>
      <Hero />
      <Projects projects={projectsData} />
      <TechStack />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
