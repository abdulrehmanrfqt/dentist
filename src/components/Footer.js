import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>1901 FM423 #100</p>
                            <p>Frisco, TX 75033</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +(972) 377-4777</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        Pfd100@live.com</h4>
                    </div>
                </div>
                <div>
                    <img src="https://assets.website-files.com/628b63417f88c4395b4f4efe/628b73c4d432325cd831a3f7_Footer%20logo.png" loading="lazy" alt="" className="image-50"/>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>All Rights Reserved.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer