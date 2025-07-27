import React from "react";
import "./MediaPackage.css";

const packages = [
  {
    icon: "📢",
    text: "30-day campaign",
  },
  {
    icon: "🗓️",
    text: "Strategic scheduling",
  },
  {
    icon: "📺",
    text: "Exclusivity ensured per screen",
  },
  {
    icon: "⬆️",
    text: "Future-ready: Expand with us as new junctions go live",
  },
  {
    icon: "📺",
    text: "Future-ready: Expand with us as new junctions go live",
  },
  {
    icon: "🗓️",
    text: "Future-ready: Expand with us as new junctions go live",
  },
];

const MediaPackage = () => {
  return (
    <section className="media-section">
      <h2 className="media-title">
        <span className="bold">TURBO</span>{" "}
        <span className="highlight">Media Package</span>
      </h2>
      <p className="media-subtitle">
        Currently live at Vazhuthacaud, Trivandrum. More coming soon.
      </p>

      <div className="media-grid">
        {packages.map((item, index) => (
          <div className="media-card" key={index}>
            <div className="media-icon">{item.icon}</div>
            <p className="media-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaPackage;
