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
              Proyecto frontend orientado a una experiencia de compra moderna,
              clara y responsive para equipamiento de rescate.
            </p>
          </div>

          <div className="footerBottom">
            <p className="footerCredit footerCopy">
              © {currentYear} Rescue Store · Built by{" "}
              <a
                href="https://lucas-epherra.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Lucas Epherra portfolio"
              >
                Lucas Epherra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
