import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Gallery from '../components/Gallery';
import ScheduleAppointment from '../components/ScheduleAppointment';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Learn About Our Dental Office in Frisco, TX."/>
      <Gallery/>
      <ScheduleAppointment/>
      <Footer />
    </div>
  )
}

export default About