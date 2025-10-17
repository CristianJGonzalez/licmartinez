import React from "react";
import "./ServicePage.css";

function ServicesPage() {
  return (
    <div className="service-page-container">
      <h1>Servicios</h1>
      {/* Flex container 1*/}
      <div className="flex-container">
        {/* First card container */}
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Second Card Container */}
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 2*/}
      <div className="flex-container">
        {/* Third card container */}
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Fourth Card Container */}
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 3*/}
      <div className="flex-container">
        {/* Third card container */}
        <div className="card-flex-container">
          <img src="/images/lic-martinez-logo.png" alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">SERVICE 1</h3>
            <p className="card-service-p"> TESTING </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Fourth Card Container */}
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
  );
}

export default ServicesPage;
