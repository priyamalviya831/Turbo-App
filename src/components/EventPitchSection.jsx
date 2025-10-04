import React from 'react';
import './EventPitchSection.css';
import { FaPhoneAlt, FaEnvelope, FaRegFileAlt, FaVideo, FaMicrophoneAlt, FaPaintBrush, FaFilm } from 'react-icons/fa';
import { MdOutlineVideoSettings } from 'react-icons/md';
import script from "../assets/script.png"
import direction from "../assets/direction.png"
import voice from "../assets/voiceover.png"
import graphic from "../assets/Graphics.png"
import post from "../assets/Post.png"
const EventPitchSection = () => {
  return (
    <div className="event-pitch-section">
      <h2 className="title">Event reels & pitch videos</h2>
      <h3 className="subtitle"><em>For digital, OTT, events, and beyond.</em></h3>
      <p className="description">You bring the vision — we make it unforgettable.</p>

      <div className="button-group">
        <button className="primary-button">Start a Project</button>
        <button className="outline-button">View our Work</button>
      </div>

      <div className="services-grid">
        <div className="service-box">
          {/*  */}
          <img src={script} alt="Script" className="service-img" />
          {/*  */}
          {/* <FaRegFileAlt className="icon" /> */}
          <p>Script</p>
        </div>
        <div className="service-box">
          {/*  */}
           <img src={direction} alt="Direction" className="service-img" />
          {/*  */}
          {/* <MdOutlineVideoSettings className="icon" /> */}
          <p>Direction</p>
        </div>
        <div className="service-box">
          {/*  */}
          <img src={voice} alt="Voiceover" className="service-img" />
          {/*  */}
          {/* <FaMicrophoneAlt className="icon" /> */}
          <p>Voiceover</p>
        </div>
      </div>
       <div className="services-grid">
        <div className="service-box">
          {/* <FaPaintBrush className="icon" /> */}
          {/*  */}
          <img src={graphic} alt="Graphics" className="service-img" />
          {/*  */}
          <p>Graphics</p>
        </div>
        <div className="service-box">
          {/* <FaFilm className="icon" /> */}
{/*  */}
<img src={post} alt="Post Production" className="service-img" />
{/*  */}
          <p>Post Production</p>
        </div>
      </div>

      <h2 className="cta-title">READY TO BE SEEN?</h2>
      <h3 className="cta-subtitle">
        <em>
          Whether on the skyline or on the screen — <br />
          your message deserves impact.
        </em>
      </h3>

      <button className="outline-button">Let's talk</button>

      <div className="contact-boxes">
        <div className="contact-box">
          <FaPhoneAlt className="icon" />
          <span>+91 9061012495</span>
        </div>
        <div className="contact-box">
          <FaEnvelope className="icon" />
          <span>Danielsaji@turboads.in</span>
        </div>
      </div>

      <div className="button-group">
        <button onClick={() => window.open("https://calendly.com/turbooads/30min", "_blank")} className="primary-button ml-10">Book Ad Slot</button>
        <button onClick={() => window.open("https://calendly.com/turbooads/30min", "_blank")} className="outline-button  ml-7" >Request Video talk</button>
      </div>

     
    </div>
  );
};

export default EventPitchSection;
