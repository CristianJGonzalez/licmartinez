import React from "react";
import serviceData from "../Components/serviceData";
import ServiceCard from "../Components/ServiceCard";
import "./ServicePage.css";

function ServicesPage() {
  return (
    <div className="service-page-container">
      <h1>Servicios</h1>

      <div className="flex-container">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
