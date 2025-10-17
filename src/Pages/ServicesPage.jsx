import React from "react";
import "./ServicePage.css";

function ServicesPage() {
  return (
    <div className="service-page-container">
      <h1>Servicios</h1>
      <div className="main-flex-container">
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
          <div className="card-flex-container">
            <img src="/images/lic-martinez-logo.png" alt="logo" />
            <div className="card-service-text-c">
              <h3 className="card-subheading">SERVICE 1</h3>
              <p className="card-service-p"> TESTING </p>
              <link rel="stylesheet" href="/contacto" className="href" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
