import "./HeroImgStyles.css"

import React from 'react'
import Intro from "../assets/dent1.png"
import { Link } from "react-router-dom"
import Videobg from "../assets/video/comercial.mp4"

function HeroImg() {
  return (
    <div className="hero">
      {/* <div className="mask">
            <img className="intro-img" src={Intro} alt="IntrImg"/>
        </div> */}
      <div className="mask">
        <video src={'https://precisionsmiles.b-cdn.net/comercial.mp4'} playsInline autoPlay loop muted />
      </div>
      <div className="content">
        <p>Offering Quality Dentistry
          in Frisco, TX</p>
        <h1>Providing quality healthcare.</h1>
        <div>
          <Link to="/services" className="btn">APPOINTMENT</Link>
          <Link to="/contact" className="btn btn-light">LEARN</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg