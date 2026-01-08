import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <section className="contact-page-section1">
        <div className="overlay"></div>

        <div className="content">
          <h1>Contáctanos</h1>
          <p>Email: marco.martinez.abogado@gmail.com</p>
          <p>Teléfono: +503 2222-1234</p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/50377269737"
              target="_blank"
              rel="noopener noreferrer"
            >
              +503 7726-9737
            </a>
          </p>
        </div>
      </section>

      <section className="contact-page-section2">
        <div className="content1">
          <img src="/images/lic-martinez-logo.png" alt="Lic. Martinez Logo" />
          <div className="credits">
            <p>Políticas de privacidad y cookies |</p>
            <p>Disclaimer |</p>
            <p>© 2026 Marco Antonio Martínez</p>
          </div>
          <p>Sitio web creado por Carlos y Cristian Gonzalez</p>
        </div>
        <div className="content2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <div className="office-location">
            <p>Avenida Olímpica, Condominios Villa Olímpica, 6-A </p>
            <p>San Salvador, El Salvador. </p>
            <p>Tel: +503 7726-9737</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
