// src/components/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FlagshipLocation from '../components/FlagshipLocation';
import Experience from '../components/Experience';
import Clientele from '../components/Clientele';
import MediaPackage from '../components/MediaPackage';
import VideoProduction from '../components/VideoProduction';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <FlagshipLocation />
      <Experience />
      <Clientele />
      <MediaPackage />
      <VideoProduction />
      <Services />
    </>
  );
};

export default Home;
