import "./Footer.css"

function Footer() {

    return (
      <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Marco Antonio Martínez · Todos los derechos reservados.</p>
            <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/50377269737" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
            </div>
        </div>
      </footer>
    )
  }
  
export default Footer
  