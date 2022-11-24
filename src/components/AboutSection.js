import './AboutSectionStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

import ImgTop from '../assets/imgs/1.jpeg'
import ImgBottom from '../assets/imgs/2.jpg'

const AboutSection = () => {
  return (<div className='about'>
    <div className='left'>
      <h1>About Us</h1>
      <p>We provide a wide range of services to meet even the most daring requirements. Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across.</p>
      <Link to='/contact'>
        <button className='btn'>LEARN MORE</button>
      </Link>
    </div>
    <div className='right'>
      <div className='img-container'>
        <div className='img-stack top'>
          <img src={ImgBottom} className='img' alt='true' />
        </div>
        <div className='img-stack bottom'>
          <img src={ImgTop} className='img' alt='true' />
        </div>
      </div>
    </div>
  </div>
  );
};
export default AboutSection