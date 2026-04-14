import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerPanel">
          <div className="footerBrand">
            <span className="footerBadge">Rescue Store</span>
            <h3 className="footerTitle">Equipamiento de rescate</h3>
            <p className="footerText">
           Proyecto frontend orientado a una experiencia de compra moderna, clara y responsive para equipamiento de rescate.
            </p>
          </div>

          <div className="footerBottom">
            <p className="footerCopy">
              © {currentYear} Rescue Store · Desarrollado por Lucas Epherra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;