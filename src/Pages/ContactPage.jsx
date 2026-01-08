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
          <p>Políticas de privacidad y cookies</p>
          <p>Disclaimer</p>
          <p>© 2026 Marco Antonio Martínez · Todos los derechos reservados.</p>
        </div>
        <div className="content2">
          <p>SAN SALVADOR</p>
          <p>SAN SALVADOR</p>
          <p>TEL +503 7726-9737</p>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
