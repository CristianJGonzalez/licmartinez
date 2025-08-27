import React from "react";

function Contact() {
  return (
    <div className="page contact">
      <h1>Contáctanos</h1>
      <p>Email : marco.martinez.abogado@gmail.com</p>
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
  );
}

export default Contact;
