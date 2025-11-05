import React from "react";
import serviceData from "../Components/serviceData";
import "./ServicePage.css";

function ServicesPage() {
  return (
    <div className="service-page-container">
      {/* heading */}
      <h1>Servicios</h1>

      {/* Flex container that holds all cards I've created based on figma file*/}
      <div className="flex-container">
        {serviceData.map((service) => (
          <div key={service.id} className="card-flex-container">
            <img
              src={service.img || "/images/default.jpg"}
              alt={service.name}
            />
            <div className="card-service-text-c">
              <h3 className="card-subheading">{service.name}</h3>
              <p className="card-service-p">{service.description}</p>
              <a href="/contacto" className="href">
                Contáctanos
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
