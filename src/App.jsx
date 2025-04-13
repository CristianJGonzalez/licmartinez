import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./Components/Nav"

function App() {

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
      {/*------------------Third Section/Hero Section---------------------*/}
      <section className="section3">
        <div className="foto1Section3">
            <img src="/images/asesoria.jpg" alt="Lic Martinez" />
            <div className='textContainerSection3 asesoria'>
                <a href=''>Asesoria Legal</a>
            </div>
        </div>
        <div className="foto2Section3">
            <img src="/images/notarial.jpg" alt="Lic Martinez" />
            <div className='textContainerSection3 notarial'>
                <a href=''>Servicios Notariales</a>
            </div>
        </div>
      </section>
  </div>
  )
}

export default App
