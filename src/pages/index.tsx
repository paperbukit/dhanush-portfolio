import React from 'react';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Goals from '../components/Goals';

const Home = () => {
  return (
    <>
      <Bio />
      <Skills />
      <Projects />
      <Goals />
    </>
  );
};

export default Home;