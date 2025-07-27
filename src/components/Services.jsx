import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">SERVICES</h2>
      <div className="services-grid">
        <div className="service-box">Brand &amp; product videos</div>
        <div className="service-box">Corporate intros &amp; social content</div>
        <div className="service-box">Motion graphics &amp; animated explainers</div>
        <div className="service-box">Real estate &amp; retail campaigns</div>
      </div>
    </section>
  );
};

export default Services;
