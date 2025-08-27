import React from "react";

function ServicesPage({ services }) {
  return (
    <div className="service-page ">
      <h1>Servicios</h1>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
