import React from 'react';
import './EventPitchSection.css';
import { FaPhoneAlt, FaEnvelope, FaRegFileAlt, FaVideo, FaMicrophoneAlt, FaPaintBrush, FaFilm } from 'react-icons/fa';
import { MdOutlineVideoSettings } from 'react-icons/md';

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
          <FaRegFileAlt className="icon" />
          <p>Script</p>
        </div>
        <div className="service-box">
          <MdOutlineVideoSettings className="icon" />
          <p>Direction</p>
        </div>
        <div className="service-box">
          <FaMicrophoneAlt className="icon" />
          <p>Voiceover</p>
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
        <button className="primary-button">Book Ad Slot</button>
        <button className="outline-button">Request Video talk</button>
      </div>

      <div className="services-grid">
        <div className="service-box">
          <FaPaintBrush className="icon" />
          <p>Graphics</p>
        </div>
        <div className="service-box">
          <FaFilm className="icon" />
          <p>Post Production</p>
        </div>
      </div>
    </div>
  );
};

export default EventPitchSection;
