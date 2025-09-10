import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div>
      <h1> Acerca de mí</h1>
      <div className="main-container">
        <div className="flex-container-1">
          <p>
            Soy el Lic. Marco Antonio Morales, abogado y notario en El Salvador
            con más de 25 años de experiencia en derecho. A lo largo de mi
            trayectoria he acompañado a personas, familias y empresas en la
            resolución de trámites y casos legales con seriedad, transparencia y
            compromiso. Mi misión es brindar asesoría clara y confiable a todos
            los salvadoreños, ya sea dentro del país o en el extranjero.
          </p>
          <p>
            Ofrezco una amplia gama de servicios legales en El Salvador, entre
            ellos: redacción y firma de poderes notariales, trámites de
            herencias y sucesiones, asesoría en contratos, representación en
            procesos legales y servicios notariales especializados. Mi
            compromiso es simplificar tus procesos y garantizar que cada gestión
            se realice de manera segura y conforme a la ley.
          </p>
          <p>
            Si necesitas el respaldo de un abogado y notario en El Salvador para
            tu familia o empresa, estás en el lugar correcto. Te invito a
            agendar tu consulta hoy mismo y contar con un aliado legal que
            proteja tus intereses en todo momento.
          </p>
        </div>
        <div className="flex-container-2">
          <img src="/images/about-image.jpg" alt="about-page" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
