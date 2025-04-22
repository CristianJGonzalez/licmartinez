import './App.css'
import Nav from "./Components/Nav"
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    if (activeSection && section4Ref.current) {
      section4Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className='master'>
      {/*------------------Nav---------------------*/}
      <Nav/>
      {/*------------------First Section/Hero Section---------------------*/}
      <section className="section1">
          <div className="fraseSection1">
              <h1>Tu confianza, <span>nuestra responsabilidad legal</span></h1>
          </div>
      </section>
      {/*------------------Second Section/Hero Section---------------------*/}
      <section className="section2">
          <div className="fotoSecction2">
            <img src="/images/licMartinez.png" alt="Lic Martinez" />
          </div>
          <div className="infoSection2">
            <h2>Licenciado Marco Antonio Martinez</h2>
            <p>
              Soy <strong>Marco Martínez</strong>, abogado especializado en derecho civil con más de 10 años de experiencia. 
              Me esfuerzo por brindar soluciones legales confiables, éticas y personalizadas a cada uno de mis clientes.
            </p>

            <p>Especialidades:</p>
            <ul>
              <li>Derecho civil</li>
              <li>Derecho penal</li>
              <li>Asesoría empresarial</li>
              <li>Contratos y litigios</li>
            </ul>

            <p>
              Mi objetivo es construir relaciones duraderas basadas en la confianza, la responsabilidad y la transparencia.
            </p>
          </div>
      </section>
      {/*------------------Third Section---------------------*/}
      <section className="section3">
              <div className="foto1Section3" onClick={() => setActiveSection('asesoria')}>
                <img src="/images/asesoria.jpg" alt="Lic Martinez" />
                <div className='textContainerSection3 asesoria'>
                  <a>Asesoría Legal</a>
                </div>
              </div>
              <div className="foto2Section3" onClick={() => setActiveSection('notarial')}>
                <img src="/images/notarial.jpg" alt="Lic Martinez" />
                <div className='textContainerSection3 notarial'>
                  <a>Servicios Notariales</a>
                </div>
              </div>
            </section>
        {/*------------------Fourth Section---------------------*/}
        <section className="section4" ref={section4Ref}>
        {activeSection === 'asesoria' && (
          <div className="asesoriaS4">
            <h2>Tipos de asesorías:</h2>
            <ul>
              <li>Asesoría de divorcios</li>
              <li>Asesoría ante la procu</li>
              <li>Asesoría financiera/Forex</li>
              <li>Asesoría pa no casarte</li>
            </ul>
          </div>
        )}
        {activeSection === 'notarial' && (
          <div className="notarialS4">
            <h2>Servicios notariales como:</h2>
            <ul>
              <li>Escrituras públicas</li>
              <li>Poderes notariales</li>
              <li>Testamentos</li>
              <li>Contratos certificados</li>
            </ul>
          </div>
        )}
      </section>
      {/*------------------Fourth Section---------------------*/}
  </div>
  )
}

export default App
