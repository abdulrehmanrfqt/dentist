import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import MeetTheDoctor from '../components/MeetTheDoctor';

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutSection/>
      <MeetTheDoctor/>
      <Footer />
    </div>
  )
}

export default home