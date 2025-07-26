import React from "react";
import "./Clientele.css";

// Use imported images if available or use emoji/svg/icon fonts
const clients = [
  // {
  //   name: "HDFC BANK",
  //   img: "https://1000logos.net/wp-content/uploads/2021/05/HDFC-Bank-logo.png", // Replace with local path if needed
  // },
  {
    name: "STAR HEALTH",
    // img: "https://companieslogo.com/img/orig/STARHEALTH.NS-9e672cdc.png?t=1661329056", // Replace with local path
    icon: "🏫",
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
