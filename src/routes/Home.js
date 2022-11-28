import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import MeetTheDoctor from '../components/MeetTheDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import Treatments from '../components/Treatments';
import ScheduleAppointment from '../components/ScheduleAppointment';

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutSection/>
      <MeetTheDoctor/>
      <WhyChooseUs/>
      <Treatments/>
      <ScheduleAppointment/>
      <Footer />
    </div>
  )
}

export default home