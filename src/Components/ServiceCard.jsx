import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
  return (
    <div className="card-flex-container">
      <img src={props.img || "/images/default.jpg"} alt={props.name} />

      <div className="card-service-text-c">
        <h3 className="card-subheading">{props.name}</h3>
        <p className="card-service-p">{props.description}</p>

        <a href="/contacto" className="href">
          Contáctanos
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
