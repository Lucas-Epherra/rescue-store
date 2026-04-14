import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerBrand">
          <span className="footerBadge">Rescue Store</span>
          <h3 className="footerTitle">Equipamiento de rescate</h3>
          <p className="footerText">
            Proyecto frontend desarrollado por Lucas Epherra, enfocado en una
            experiencia moderna, clara y responsive.
          </p>
        </div>

        <div className="footerBottom">
          <p className="footerCopy">
            © {currentYear} Rescue Store · Desarrollado por Lucas Epherra
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;