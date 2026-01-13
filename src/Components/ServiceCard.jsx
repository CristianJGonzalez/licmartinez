import React from "react";
import "./ServiceCard.css";

function ServiceCard({ img, name, description }) {
  return (
    <div className="card-flex-container">
      <img src={img || "/images/default.jpg"} alt={name} />

      <div className="card-service-text-c">
        <h3 className="card-subheading">{name}</h3>
        <p className="card-service-p">{description}</p>

        <a href="/contacto" className="href">
          Contáctanos
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
