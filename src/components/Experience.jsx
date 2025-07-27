import React from "react";
import "./Experience.css";

const experiences = [
  {
    icon: "▶️",
    text: "900 plays/day",
  },
  {
    icon: "⚡",
    text: "Optimized peak-hour display",
  },
  {
    icon: "🎞️",
    text: "Smooth transitions & vivid playback",
  },
  {
    icon: "🕒",
    text: "Limited advertiser count for maximum exposure",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">THE EXPERIENCE</h2>
      <div className="experience-cards">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">{item.icon}</div>
            <p className="experience-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
