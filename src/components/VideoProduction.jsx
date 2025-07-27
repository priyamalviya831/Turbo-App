import React from "react";
import "./VideoProduction.css";
import cameraMen from "../assets/cameraMan.png"
// import cameraMan from "../../assets/cameraman.jpg"; // Replace with your local image

const VideoProduction = () => {
  return (
    <section className="video-section">
      <h2 className="video-title">TURBO STUDIO</h2>
      <h3 className="video-subtitle">Cinematic Video Production</h3>
      <p className="video-location">
        Currently live at Vazhuthacaud, Trivandrum. More coming soon.
      </p>

      <div className="video-content">
        <div className="video-left">
          <img src={cameraMen} alt="Cameraman filming" className="video-img" />
        </div>

        <div className="video-right">
          <p className="video-description">
            TURBO STUDIO crafts powerful video content for brands ready to level
            up. From real estate promos to product films and campaign visuals —
            we bring ideas to life with cinematic precision and commercial
            polish.
          </p>
          <div className="video-highlight-box">
            <p>
              We don’t just broadcast. <br />
              <span className="highlight">We build.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
