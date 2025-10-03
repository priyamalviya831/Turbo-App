import React from "react";
import "./MediaPackage.css";
import days from "../assets/30-day.png"
import Strategic from "../assets/Strategic.png"
import exclusivity from "../assets/Exclusivity.png"
import future from "../assets/Future-ready.png"


const packages = [
  {
    // icon: "📢",
    // text: "30-day campaign",
    name: "30-day campaign",
    img: days,

  },
  {
    // icon: "🗓️",
    // text: "Strategic scheduling",
    name: "Strategic scheduling",
    img:Strategic ,
  },
  {
    // icon: "📺",
    // text: "Exclusivity ensured per screen",
    name: "Exclusivity ensured per screen",
    img: exclusivity,
  },
  {
    // icon: "⬆️",
    // text: "Future-ready: Expand with us as new junctions go live",
     name: "Future-ready: Expand with us as new junctions go live",
    img: future,
  },
  // {
    // icon: "📺",
    // text: "Future-ready: Expand with us as new junctions go live",
    // name: "Future-ready: Expand with us as new junctions go live",
    // img: future,
  // },
  // {
    // icon: "🗓️",
    // text: "Future-ready: Expand with us as new junctions go live",
    //  name: "Exclusivity ensured per screen",
    // img: exclusivity,
  // },
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
            {/* <div className="media-img">{item.icon}</div> */}
        <div className="media-img">
        <img src={item.img} alt={item.name} />
        </div>
            <p className="media-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaPackage;
