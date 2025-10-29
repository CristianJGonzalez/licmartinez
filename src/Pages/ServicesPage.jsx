import React from "react";
import serviceData from "../Components/serviceData";
import "./ServicePage.css";

function ServicesPage(props) {
  return (
    <div className="service-page-container">
      <h1>Servicios</h1>
      {/* Flex container 1*/}
      <div className="flex-container">
        {/* First card container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Second Card Container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 2*/}
      <div className="flex-container">
        {/* Third card container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription}</p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Fourth Card Container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p">{props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 3*/}
      <div className="flex-container">
        {/* Quinto card container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Sexto Card Container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription}</p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 4*/}
      <div className="flex-container">
        {/* Setimo card container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription}</p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Octavo Card Container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>

      {/* Flex container 5*/}
      <div className="flex-container">
        {/* Ninth card container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
        {/* Tenth Container */}
        <div className="card-flex-container">
          <img src={props.serviveImg} alt="logo" />
          <div className="card-service-text-c">
            <h3 className="card-subheading">{props.serviceName} </h3>
            <p className="card-service-p"> {props.serviceDescription} </p>
            <link rel="stylesheet" href="/contacto" className="href" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
