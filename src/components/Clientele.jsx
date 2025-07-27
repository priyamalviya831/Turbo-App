import React from "react";
import "./Clientele.css";
import hdfcImage from "../assets/hdfcImage.png";
import  starImage from "../assets/starImage.png";


// Use imported images if available or use emoji/svg/icon fonts
const clients = [
  {
    name: "HDFC BANK",
    img: hdfcImage, // Replace with local path if needed
  },
  {
    name: "STAR HEALTH",
    img: starImage, // Replace with local path
    // icon: "🏫",
  },
  {
    name: "REAL ESTATE",
    icon: "🏘️",
  },
  {
    name: "RETAIL",
    icon: "🏬",
  },
  {
    name: "INSTITUTIONS",
    icon: "🏫",
  },
];

const Clientele = () => {
  return (
    <section className="clientele-section">
      <h2 className="clientele-heading">OUR CLIENTELE</h2>
      <p className="clientele-subheading">Brands that lead choose TURBO</p>

      <div className="clientele-grid">
        {clients.map((client, index) => (
          <div key={index} className="clientele-card">
            {client.img ? (
              <img src={client.img} alt={client.name} className="client-logo" />
            ) : (
              <div className="client-icon">{client.icon}</div>
            )}
            <p className="client-name">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientele;
